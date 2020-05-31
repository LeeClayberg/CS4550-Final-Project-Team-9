import React from 'react'

class RecentReview extends React.Component {
    render() {
        return (
            <li className="list-group-item wbdv-review">
                <span className="row wbdv-review-row">
                    <div className="col-3 wbdv-recent-review-cover-col">
                        <img className="wbdv-recent-review-cover" src={"https://comicvine1.cbsistatic.com/uploads/scale_large/0/229/133387-18005-110333-1-action-comics.jpg"}
                             alt="Card image cap"/>
                    </div>
                    <div className="col-9 wbdv-recent-review-text-col">
                    <div className="row wbdv-review-row">
                        <div className="col-5 wbdv-review-user text-truncate">
                            {this.props.name}
                        </div>
                        <div className="col-7 wbdv-review-top-col">
                            <span className="float-right">
                                <i className="fa fa-star wbdv-review-star wbdv-review-star-filled"/>
                                <i className="fa fa-star wbdv-review-star wbdv-review-star-filled"/>
                                <i className="fa fa-star wbdv-review-star wbdv-review-star-filled"/>
                                <i className="fa fa-star wbdv-review-star wbdv-review-star-blank"/>
                                <i className="fa fa-star wbdv-review-star wbdv-review-star-blank"/>
                            </span>
                        </div>
                    </div>
                    <div className="wbdv-recent-review-message">
                        {this.props.text}
                    </div>
                    </div>
                </span>
            </li>
        )
    }
}

export default RecentReview;