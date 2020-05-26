import React from 'react'
import SearchResultCard from "./SearchResultCard";

class SearchResults extends React.Component {
    render() {
        return (
            <div className="wbdv-search-area">
                <div className="row wbdv-search-area-top">
                    <div className="col-6 font-weight-bold">
                        Search Results
                    </div>
                    <div className="col-6 text-right font-weight-bold">
                        Page {this.props.page}
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {
                        this.props.issues.map(issue =>
                             <SearchResultCard
                                 id={issue.id}
                                issue={issue}/>)
                    }
                </div>
                <div className="wbdv-search-bottom-buttons">
                    {
                        this.props.page > 2 &&
                        <div
                            className="btn wbdv-page-btn font-weight-bold"
                            onClick={() => this.props.search(1)}>
                            1
                        </div>
                    }
                    {
                        this.props.page > 3 &&
                        <span>
                            ...
                        </span>
                    }
                    {
                        this.props.page > 1 &&
                        <div className="btn wbdv-page-btn font-weight-bold"
                             onClick={() => this.props.search(this.props.page - 1)}>
                            {this.props.page - 1}
                        </div>
                    }
                    <div className="btn wbdv-page-btn wbdv-current-page font-weight-bold">
                        {this.props.page}
                    </div>
                    {
                        this.props.page < this.props.pageCount &&
                        <div className="btn wbdv-page-btn font-weight-bold"
                             onClick={() => this.props.search(this.props.page + 1)}>
                            {this.props.page + 1}
                        </div>
                    }
                    {
                        this.props.page < this.props.pageCount - 2 &&
                        <span>
                            ...
                        </span>
                    }
                    {
                        this.props.page < this.props.pageCount - 1 &&
                        <div className="btn wbdv-page-btn font-weight-bold"
                             onClick={() => this.props.search(this.props.pageCount)}>
                            {this.props.pageCount}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default SearchResults