import React from 'react'

class SearchResultCard extends React.Component {
    state = {
        issue: this.props.issue
    }

    render() {
        return (
            <div className="col mb-4">
                <div className="card">
                    <img className="card-img-top card-img" src={'https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/7100380-16.jpg'}
                         alt="Card image cap"/>
                    <div className="row card-body font-weight-bold">
                        Superman ft. Super Sons
                        <div className="card-date text-right">
                            2019-10-09
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResultCard