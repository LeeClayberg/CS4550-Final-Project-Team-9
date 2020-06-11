import React from 'react'
import {Link} from "react-router-dom";
import reviewService from "../services/ReviewService";

class IssueReview extends React.Component {
    render() {
        let elements=[];
        for (let i = 0; i < 5; i++) {
            i < this.props.review.stars?
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-filled"/>):
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-blank"/>);
        }
        return (
            <li className="list-group-item wbdv-review">
                {
                    this.props.mode == 'admin' || this.props.userId == this.props.review.userId &&
                    <div className="btn wbdv-delete-review"
                        onClick={() => {
                            reviewService.deleteReview(this.props.review.id)
                                .then(() => this.props.updateReviews());
                        }}>
                        <i className="fa fa-trash"/>
                    </div>
                }
                <div className="row wbdv-review-row">
                    <div className="col-5 wbdv-review-user">
                        <Link to={`/user/${this.props.review.userId}`}>
                            <span className="wbdv-review-name-color">
                                {this.props.review.username}
                            </span>
                        </Link>
                    </div>
                    <div className="col-7 wbdv-review-top-col">
                        <span className="float-right">
                            {elements}
                        </span>
                    </div>
                </div>
                <div className="wbdv-review-text"
                     title={this.props.review.text}>
                    {this.props.review.text}
                </div>
            </li>
        )
    }
}

export default IssueReview;