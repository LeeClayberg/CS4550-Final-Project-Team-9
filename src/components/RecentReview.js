import React from 'react'

class RecentReview extends React.Component {
    render() {
        let elements=[];
        for (let i = 0; i < 5; i++) {
            i < this.props.stars?
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-filled"/>):
            elements.push(<i className="fa fa-star wbdv-review-star wbdv-review-star-blank"/>);
        }
        return (
            <li className="list-group-item wbdv-review">
                <span className="row wbdv-review-row">
                    <div className="col-3 wbdv-recent-review-cover-col">
                        <img className="btn wbdv-recent-review-cover" src={this.props.cover}
                             onClick={() => alert("Will go to reviewed issue")}
                             alt="Card image cap"/>
                    </div>
                    <div className="col-9 wbdv-recent-review-text-col">
                    <div className="row wbdv-review-row">
                        <div className="col-5 wbdv-review-user text-truncate">
                            {this.props.name}
                        </div>
                        <div className="col-7 wbdv-review-top-col">
                            <span className="float-right">
                                {elements}
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