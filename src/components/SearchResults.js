import React from 'react'

class SearchResults extends React.Component {
    render() {
        return (
            <div className="search-area">
                <div className="row search-area-top">
                    <div className="col-6 font-weight-bold">
                        Search Results
                    </div>
                    <div className="col-6 text-right font-weight-bold">
                        Page 1
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
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

                </div>
            </div>
        )
    }
}

export default SearchResults