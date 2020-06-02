import React from 'react'

class Review extends React.Component {
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
                    <div className="col-3 wbdv-covered-review-cover-col">
                        <img className="btn wbdv-covered-review-cover" src={this.props.cover}
                             onClick={() => alert("Will go to reviewed issue")}
                             alt="Card image cap"/>
                    </div>
                    <div className="col-9 wbdv-covered-review-text-col">
                    <div className="row wbdv-review-row">
                        <div className="col-5"/>
                        <div className="col-7 wbdv-review-top-col">
                            <span className="float-right">
                                {elements}
                            </span>
                        </div>
                    </div>
                    <div className="wbdv-regular-review-message">
                        {this.props.text}
                    </div>
                    </div>
                </span>
            </li>
        )
    }
}

export default Review;