import React from 'react'

class IssueReview extends React.Component {
    render() {
        return (
            <li className="list-group-item wbdv-review">
                <div className="wbdv-review-user">
                    {this.props.name}
                </div>
                <div className="wbdv-review-text">
                    {this.props.text}
                </div>
            </li>
        )
    }
}

export default IssueReview;