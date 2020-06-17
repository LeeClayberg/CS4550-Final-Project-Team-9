import React from 'react'
import {Link} from "react-router-dom";

class CoverReview extends React.Component {
    render() {
        let elements=[];
        for (let i = 0; i < 5; i++) {
            i < this.props.review.stars?
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-filled"/>):
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-blank"/>);
        }
        return (
            <div className="col-md-6">
                <Link to={`/details/issue/${this.props.review.issueId}`}>
                    <li className="list-group-item wbdv-review">
                        <span className="row wbdv-review-row">
                            <div className="col-3 wbdv-covered-review-cover-col">
                                <img className="btn wbdv-covered-review-cover" src={this.props.review.coverImageURL}
                                     alt="Card image cap"/>
                            </div>
                            <div className="col-9 wbdv-covered-review-text-col">
                            <div className="row wbdv-review-row">
                                <div className="col-5 wbdv-review-user text-truncate">
                                    {this.props.review.username}
                                </div>
                                <div className="col-7 wbdv-review-top-col">
                                    <span className="float-right">
                                        {elements}
                                    </span>
                                </div>
                            </div>
                            <div className="wbdv-covered-review-message"
                                 title={this.props.review.text}>
                                {this.props.review.text}
                            </div>
                            </div>
                        </span>
                    </li>
                </Link>
            </div>
        )
    }
}

export default CoverReview;