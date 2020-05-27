import React from 'react'
import SearchService from "../services/SearchService";
import ReactHtmlParser from 'react-html-parser';

class Issue extends React.Component {
    state = {
        issue: null
    }

    componentDidMount() {
        SearchService.findIssueById(this.props.match.params.id)
            .then(issue => {
                console.log(issue.results);
                this.setState({
                    issue: issue.results
                })})
    }

    displayList = (character, i) => {
        return character.name +
            ((i < this.state.issue.character_credits.length - 1) ?
            ", " : "")
    }

    render() {
        if(!this.state.issue) {
            return (<div/>)
        }
        return (
            <div className="row">
                <div className="col-8">
                    <div className="wbdv-issue-info">
                        <span className="row">
                            <div className="col-5">
                                <img className="wbdv-issue-cover" src={this.state.issue.image.super_url}
                                     alt="Card image cap"/>
                            </div>
                            <span className="col-7 wbdv-basic-top-outer">
                                <div className="wbdv-top-add-area">
                                    <div className="wbdv-add-btn float-right">
                                        + Add
                                    </div>
                                </div>
                                <div className="wbdv-top-spacer"/>
                                <div className="wbdv-top-info">
                                    <div className="row wbdv-info-row">
                                        <div className="col-3 wbdv-info-row-column font-weight-bold">
                                            Name:
                                        </div>
                                        <div className="col-9 wbdv-info-row-column text-right text-truncate">
                                            {this.state.issue.name?
                                             this.state.issue.name :
                                             this.state.issue.volume.name + " #" + this.state.issue.issue_number}
                                        </div>
                                    </div>
                                    <div className="row wbdv-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            Volume:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right text-truncate">
                                            {this.state.issue.volume.name}
                                        </div>
                                    </div>
                                    <div className="row wbdv-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            Issue:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right text-truncate">
                                            {this.state.issue.issue_number}
                                        </div>
                                    </div>
                                    <div className="row wbdv-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            Cover Date:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right text-truncate">
                                            {this.state.issue.cover_date}
                                        </div>
                                    </div>
                                    <div className="row wbdv-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            In Store Date:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right text-truncate">
                                             {this.state.issue.store_date?
                                              this.state.issue.store_date :
                                              "N/A"}
                                        </div>
                                    </div>
                                </div>
                                <div className="wbdv-top-spacer"/>
                                <div className="wbdv-top-chars">
                                    <div className="font-weight-bold wbdv-section-title">Characters</div>
                                    {this.state.issue.character_credits.map(this.displayList)}
                                </div>
                            </span>
                        </span>
                        <div className="wbdv-issue-description">
                            <div className="font-weight-bold wbdv-section-title">Description</div>
                            {ReactHtmlParser(this.state.issue.description)}
                        </div>
                        <div className="wbdv-issue-related-header">
                                Related Issues
                        </div>
                        <div className="row row-cols-5 wbdv-cover-row">
                            <div className="col">
                                <img className="wbdv-related-cover" src={"https://comicvine1.cbsistatic.com/uploads/scale_large/11/117763/2403520-ss16.png"}
                                     alt="Card image cap"/>
                            </div>
                            <div className="col">
                                <img className="wbdv-related-cover" src={"https://comicvine1.cbsistatic.com/uploads/scale_large/11/117763/2403520-ss16.png"}
                                     alt="Card image cap"/>
                            </div>
                            <div className="col">
                                <img className="wbdv-related-cover" src={"https://comicvine1.cbsistatic.com/uploads/scale_large/11/117763/2403520-ss16.png"}
                                     alt="Card image cap"/>
                            </div>
                            <div className="col">
                                <img className="wbdv-related-cover" src={"https://comicvine1.cbsistatic.com/uploads/scale_large/11/117763/2403520-ss16.png"}
                                     alt="Card image cap"/>
                            </div>
                            <div className="col">
                                <img className="wbdv-related-cover" src={"https://comicvine1.cbsistatic.com/uploads/scale_large/11/117763/2403520-ss16.png"}
                                     alt="Card image cap"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="wbdv-issue-reviews">
                        <span className="row">
                            <div className="col-10">
                                <div className="wbdv-review-title">
                                    Reviews
                                </div>
                            </div>
                            <span className="col-2 wbdv-basic-top-outer">
                                <div className="wbdv-review-add">
                                    +
                                </div>
                            </span>
                        </span>
                        <ul className="list-group wbdv-review-list">
                            <li className="list-group-item wbdv-review">
                                <div className="wbdv-review-user">
                                    John Wigner
                                </div>
                                <div className="wbdv-review-text">
                                    Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him
                                </div>
                            </li>
                            <li className="list-group-item wbdv-review">
                                <div className="wbdv-review-user">
                                    John Wigner
                                </div>
                                <div className="wbdv-review-text">
                                    Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him
                                </div>
                            </li>
                            <li className="list-group-item wbdv-review">
                                <div className="wbdv-review-user">
                                    John Wigner
                                </div>
                                <div className="wbdv-review-text">
                                    Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him
                                </div>
                            </li>
                            <li className="list-group-item wbdv-review">
                                <div className="wbdv-review-user">
                                    John Wigner
                                </div>
                                <div className="wbdv-review-text">
                                    Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him
                                </div>
                            </li>
                            <li className="list-group-item wbdv-review">
                                <div className="wbdv-review-user">
                                    John Wigner
                                </div>
                                <div className="wbdv-review-text">
                                    Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Issue