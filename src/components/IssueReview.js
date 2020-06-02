import React from 'react'
import {Link} from "react-router-dom";

class IssueReview extends React.Component {
    render() {
        let elements=[];
        for (let i = 0; i < 5; i++) {
            i < this.props.stars?
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-filled"/>):
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-blank"/>);
        }
        return (
            <li className="list-group-item wbdv-review">
                <div className="row wbdv-review-row">
                    <div className="col-5 wbdv-review-user">
                        <Link to={`/user/${87437537}`}>
                            <span className="wbdv-review-name-color">
                                {this.props.name}
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
                     title={this.props.text}>
                    {this.props.text}
                </div>
            </li>
        )
    }
}

export default IssueReview;