import React from 'react'

class SearchResultCard extends React.Component {
    state = {
        issue: this.props.issue
    }

    render() {
        return (
            <div className="col mb-4">
                <div className="card">
                    <img className="card-img-top card-img" src={this.state.issue.image.super_url}
                         alt="Card image cap"/>
                    <div className="row card-body font-weight-bold text-truncate">
                        {this.state.issue.name !== null ?
                         this.state.issue.name :
                        this.state.issue.volume.name + " #" + this.state.issue.issue_number}
                        <div className="card-date text-right">
                            {this.state.issue.cover_date}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResultCard