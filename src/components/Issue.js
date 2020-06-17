import React, {Fragment} from 'react'
import SearchService from "../services/SearchService";
import parse, {domToReact} from 'html-react-parser';
import RelatedCover from "./RelatedCover";
import IssueReview from "./IssueReview";
import {Link} from "react-router-dom";
import DetailsLoadingIndicator from "./DetailsLoading";
import IssueNewReview from "./IssueNewReview";
import ComicBookService from "../services/ComicBookService";
import UserService from "../services/UserService";
import ReviewService from "../services/ReviewService";

class Issue extends React.Component {
    state = {
        issue: null,
        add: false,
        related: [],
        reviews: [],
        loaded: false,
        addReview: false,
        grade: 10.0,
        signatures: '',
        user: null
    }

    componentDidMount() {
        this.reload()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            window.scrollTo({top: 0, behavior: "smooth"});
            this.setState({
                loaded: false
            });
            this.reload();
        }
    }

    reload = () =>
        SearchService.findIssueById(this.props.match.params.id)
            .then(issue => issue.results)
            .then(issue => {
                this.setState({
                                  issue: issue
                              });
                SearchService.findRelatedIssues(issue)
                    .then(issues => {
                        this.setState({
                                          related: issues.results,
                                          loaded: true
                                      })
                    });
                UserService.findUserById(this.props.userId)
                    .then(user =>
                        this.setState({
                            user: user
                        }))
                ReviewService.findReviewsForIssue(this.props.match.params.id)
                    .then(reviews => {
                        this.setState({
                            reviews: reviews
                        })
                    });
            })

    nextIssue = () =>
        SearchService.findNextIssue(this.state.issue)
            .then(issue => issue.results)
            .then(results =>
                      results[0] ?
                      this.props.history.push(`/details/issue/${results[0].id}`) :
                      alert("This is the last issue in the volume")
            )

    prevIssue = () =>
        SearchService.findPrevIssue(this.state.issue)
            .then(issue => issue.results)
            .then(results =>
                      results[0] ?
                      this.props.history.push(`/details/issue/${results[0].id}`) :
                      alert("This is the first issue in the volume")
            )

    displayList = (character, i) => {
        return (
            <span>
                <Link to={`/details/character/${character.id}`} className={"wbdv-character-link"}>
                    {character.name}
                </Link>
                {(i < this.state.issue.character_credits.length - 1) ?
                 ", " : ""}
            </span>
        )
    }

    displayListTooltip = (character, i) => {
        return " " + character.name;
    }

    updateGrade = (value) =>
        this.setState(prevState => ({
            grade: value
        }))

    updateSignatures = (value) =>
        this.setState(prevState => ({
            signatures: value
        }))

    reloadReviews = () =>
        ReviewService.findReviewsForIssue(this.props.match.params.id)
            .then(reviews => {
                this.setState({
                    reviews: reviews,
                    addReview: false
                })
            })

    addIssueToCollection = () =>
        ComicBookService.createComicBook({
            issueId: this.state.issue.id,
            userId: this.props.userId,
            grade: this.state.grade,
            signatures: this.state.signatures,
            coverImageURL: this.state.issue.image.super_url,
            coverDate: this.state.issue.cover_date,
            timestamp: (new Date()).toISOString(),
            title: this.state.issue.name ?
                   this.state.issue.name :
                   this.state.issue.volume.name + " #" + this.state.issue.issue_number,
            volume: this.state.issue.volume.name,
            characters: this.state.issue.character_credits.map(this.displayListTooltip).join("")
        })
            .then(() => {
                this.setState({
                    add: false
                })})

    render() {
        if (!this.state.issue || !this.state.loaded) {
            return (
                <div className="row">
                    <DetailsLoadingIndicator/>
                </div>
            )
        }
        let elements = [];
        for (let i = 9.8; i >= 0; (i <= 9.2 ? i -= 0.5 : i -= 0.2)) {
            elements.push(<option value={i}>{(Math.round(i * 10) / 10).toFixed(1)}</option>);
        }
        return (
            <div className="row">
                <div className="col-lg-8">
                    <div className="wbdv-issue-info">
                            <span className="row">
                                <div className="col-lg-5">
                                    <img className="wbdv-issue-cover"
                                         src={this.state.issue.image.super_url}
                                         alt="Card image cap"/>
                                </div>
                                <span className="col-lg-7 wbdv-basic-top-outer">
                                    <span className="row wbdv-top-area">
                                        <span className="col-6 wbdv-top-area-col">
                                            <button className="btn wbdv-arrow-btn"
                                                    onClick={() => this.prevIssue()}>
                                                <i className="fa fa-arrow-left"/>
                                            </button>
                                            <button className="btn wbdv-arrow-btn"
                                                    onClick={() => this.nextIssue()}>
                                                <i className="fa fa-arrow-right"/>
                                            </button>
                                        </span>
                                        <span className="col-6 wbdv-top-area-col">
                                            <button className="btn wbdv-add-btn float-right"
                                                    onClick={() => this.props.userId?
                                                                   this.setState({
                                                                       add: !this.state.add
                                                                   }):
                                                                   alert("Must be logged in to add this issue")}>
                                                + Add
                                            </button>
                                            {
                                                this.state.add &&
                                                <div className="wbdv-add-box font-weight-bold">
                                                    Grade
                                                    <select
                                                        className="custom-select wbdv-grade-dropdown"
                                                        value={this.state.grade}
                                                        onChange={(event) => this.updateGrade(
                                                            event.target.value)}>
                                                        <option selected>10.0</option>
                                                        {elements}
                                                    </select>
                                                    Signature(s)
                                                    <input type="text"
                                                           className="form-control wbdv-signature-field"
                                                           placeholder="ex. Stan Lee"
                                                           value={this.state.signatures}
                                                           onChange={(event) => this.updateSignatures(
                                                               event.target.value)}/>
                                                    <button className="btn wbdv-add-done-btn"
                                                            onClick={() => this.addIssueToCollection()}>
                                                        Done
                                                    </button>
                                                </div>
                                            }
                                        </span>
                                    </span>
                                    <div className="wbdv-top-spacer"/>
                                    <div className="wbdv-top-info">
                                        <div className="row wbdv-info-row"
                                             title={this.state.issue.name ?
                                                    this.state.issue.name :
                                                    this.state.issue.volume.name + " #"
                                                    + this.state.issue.issue_number}>
                                            <div
                                                className="col-3 wbdv-info-row-column font-weight-bold">
                                                Name:
                                            </div>
                                            <div
                                                className="col-9 wbdv-info-row-column text-right text-truncate">
                                                {this.state.issue.name ?
                                                 this.state.issue.name :
                                                 this.state.issue.volume.name + " #"
                                                 + this.state.issue.issue_number}
                                            </div>
                                        </div>
                                        <div className="row wbdv-info-row">
                                            <div
                                                className="col-4 wbdv-info-row-column font-weight-bold">
                                                Volume:
                                            </div>
                                            <div
                                                className="col-8 wbdv-info-row-column text-right text-truncate">
                                                {this.state.issue.volume.name}
                                            </div>
                                        </div>
                                        <div className="row wbdv-info-row">
                                            <div
                                                className="col-4 wbdv-info-row-column font-weight-bold">
                                                Issue:
                                            </div>
                                            <div
                                                className="col-8 wbdv-info-row-column text-right text-truncate">
                                                {this.state.issue.issue_number}
                                            </div>
                                        </div>
                                        <div className="row wbdv-info-row">
                                            <div
                                                className="col-6 wbdv-info-row-column font-weight-bold">
                                                Cover Date:
                                            </div>
                                            <div
                                                className="col-6 wbdv-info-row-column text-right text-truncate">
                                                {this.state.issue.cover_date}
                                            </div>
                                        </div>
                                        <div className="row wbdv-info-row">
                                            <div
                                                className="col-6 wbdv-info-row-column font-weight-bold">
                                                In Store Date:
                                            </div>
                                            <div
                                                className="col-6 wbdv-info-row-column text-right text-truncate">
                                                 {this.state.issue.store_date ?
                                                  this.state.issue.store_date :
                                                  "N/A"}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wbdv-top-spacer"/>
                                    <div className="wbdv-top-chars"
                                         title={this.state.issue.character_credits.map(
                                             this.displayListTooltip)}>
                                        <div
                                            className="font-weight-bold wbdv-section-title">Characters</div>
                                        <span className="wbdv-scroll">
                                            {this.state.issue.character_credits.map(this.displayList)}
                                        </span>
                                    </div>
                                </span>
                            </span>
                        <div className="wbdv-issue-description">
                            <div className="font-weight-bold wbdv-section-title">Description</div>
                            {this.state.issue.description ?
                             parse(this.state.issue.description, {
                                 replace: ({attribs, children}) => {
                                     if (!attribs) {
                                         return;
                                     }
                                     if (attribs.href) {
                                         return React.createElement('a', {}, domToReact(children,))
                                     }
                                 }
                             }) :
                             "N/A"}
                        </div>
                        <div className="wbdv-issue-related-header">
                            Related Issues
                        </div>
                        <div className="row row-cols-5 wbdv-cover-row">
                            {
                                this.state.related.map(issue =>
                                                           <RelatedCover
                                                               id={issue.id}
                                                               issue={issue}/>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="wbdv-issue-reviews">
                            <span className="row">
                                <div className="col-10">
                                    <div className="wbdv-review-title">
                                        Reviews
                                    </div>
                                </div>
                                <span className="col-2 wbdv-review-add-col">
                                    <div className="btn wbdv-review-add"
                                         onClick={() => this.props.userId?
                                                        this.setState({
                                                            addReview: true
                                                         }):
                                                        alert("Must be logged in to write a review")}>
                                        <i className="fa fa-plus"/>
                                    </div>
                                </span>
                            </span>
                        <ul className="list-group wbdv-review-list">
                            {
                                this.state.addReview &&
                                <IssueNewReview issue={this.state.issue} user={this.state.user} closeReview={this.reloadReviews}/>
                            }
                            {
                                this.state.reviews.map(review =>
                                     <IssueReview
                                          userId={this.props.userId}
                                          review={review}
                                          mode={this.state.user.role}
                                          updateReviews={this.reloadReviews}/>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Issue