import React from 'react'

class IssueNewReview extends React.Component {
    state = {
        text: '',
        starCount: 1
    }

    render() {
        let elements=[];
        for (let i = 0; i < 5; i++) {
            i < this.state.starCount?
            elements.push(
                <i className="fa fa-star wbdv-review-star wbdv-review-star-filled wbdv-review-star-hover"
                    onClick={() => this.setState({
                        starCount: i + 1
                    })}/>):
            elements.push(
                <i className="fa fa-star wbdv-review-star wbdv-review-star-blank wbdv-review-star-hover"
                    onClick={() => this.setState({
                        starCount: i + 1
                    })}/>);
        }
        return (
            <li className="list-group-item wbdv-review">
                {
                    this.props.mode == 'admin' &&
                    <div className="btn wbdv-delete-review"
                         onClick={() => alert("Will remove review")}>
                        <i className="fa fa-trash"/>
                    </div>
                }
                <div className="row wbdv-review-row">
                    <div className="col-5 wbdv-review-user">
                        <span className="wbdv-review-name-color">
                            {this.props.name}
                        </span>
                    </div>
                    <div className="col-7 wbdv-review-top-col">
                        <span className="float-right">
                            {elements}
                        </span>
                    </div>
                </div>
                <textarea
                    rows="4"
                    maxLength="200"
                    className="form-control wbdv-review-textarea"
                    placeholder="Review here"
                    onChange={(event) => this.setState({
                        text: event.target.value
                    })}/>
                <div className="btn wbdv-review-post"
                     onClick={() => alert("Will post review")}>
                    Post Review
                </div>
            </li>
        )
    }
}

export default IssueNewReview;