import React from 'react'
import SearchResultCard from "./SearchResultCard";

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
                    {
                        this.props.issues.map(issue =>
                             <SearchResultCard
                                issue={issue}/>)
                    }
                </div>
            </div>
        )
    }
}

export default SearchResults