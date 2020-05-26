import React from 'react'

class SearchResultCard extends React.Component {
    render() {
        return (
            <div className="col mb-4">
                <div className="card">
                    <img className="card-img-top card-img" src={this.props.issue.image.super_url}
                         alt="Card image cap"/>
                    <div className="row card-body font-weight-bold text-truncate">
                        {this.props.issue.name !== null ?
                         this.props.issue.name :
                        this.props.issue.volume.name + " #" + this.props.issue.issue_number}
                        <div className="card-date text-right">
                            {this.props.issue.cover_date}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResultCard