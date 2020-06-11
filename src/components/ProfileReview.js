import React from 'react'

class ProfileReview extends React.Component {
    render() {
        let elements=[];
        for (let i = 0; i < 5; i++) {
            i < this.props.review.stars?
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-filled"/>):
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-blank"/>);
        }
        return (
            <li className="list-group-item wbdv-profile-review">
                <span className="row wbdv-review-row">
                    <div className="col-3 wbdv-covered-review-cover-col">
                        <img className="btn wbdv-covered-review-cover" src={this.props.review.coverImageURL}
                             alt="Card image cap"/>
                    </div>
                    <div className="col-9 wbdv-covered-review-text-col">
                    <div className="wbdv-profile-review-row">
                        <span className="float-right">
                            {elements}
                        </span>
                    </div>
                    <div className="wbdv-profile-review-message">
                        {this.props.review.text}
                    </div>
                    </div>
                </span>
            </li>
        )
    }
}

export default ProfileReview;