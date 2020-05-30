import React from 'react'
import SearchResultCard from "./SearchResultCard";
import SearchService from "../services/SearchService";

class SearchResults extends React.Component {
    state = {
        issues: [],
        page: 1,
        pageCount: 1,
    }

    componentDidMount() {
        this.search(this.state.page)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.query !== this.props.match.params.query) {
            this.search(1)
        }
    }

    search = (page) =>
        SearchService.search(this.props.match.params.query, page, 12)
            .then(pageInfo =>
                      this.setState({
                                        page: page,
                                        pageCount: Math.min(Math.floor(
                                            pageInfo.number_of_total_results / pageInfo.limit),
                                                833),
                                        issues: pageInfo.results
                                    }))

    render() {
        return (
            <div className="wbdv-search-area">
                <div className="row wbdv-search-area-top">
                    <div className="col-6 font-weight-bold">
                        Search Results
                    </div>
                    <div className="col-6 text-right font-weight-bold">
                        Page {this.state.page}
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {
                        this.state.issues.map(issue =>
                             <SearchResultCard
                                 id={issue.id}
                                issue={issue}/>)
                    }
                </div>
                <div className="wbdv-search-bottom-buttons">
                    {
                        this.state.page > 2 &&
                        <div
                            className="btn wbdv-page-btn font-weight-bold"
                            onClick={() => this.search(1)}>
                            1
                        </div>
                    }
                    {
                        this.state.page > 3 &&
                        <span className="font-weight-bold">
                            ...
                        </span>
                    }
                    {
                        this.state.page > 1 &&
                        <div className="btn wbdv-page-btn font-weight-bold"
                             onClick={() => this.search(this.state.page - 1)}>
                            {this.state.page - 1}
                        </div>
                    }
                    <div className="btn wbdv-page-btn wbdv-current-page font-weight-bold">
                        {this.state.page}
                    </div>
                    {
                        this.state.page < this.state.pageCount &&
                        <div className="btn wbdv-page-btn font-weight-bold"
                             onClick={() => this.search(this.state.page + 1)}>
                            {this.state.page + 1}
                        </div>
                    }
                    {
                        this.state.page < this.state.pageCount - 2 &&
                        <span className="font-weight-bold">
                            ...
                        </span>
                    }
                    {
                        this.state.page < this.state.pageCount - 1 &&
                        <div className="btn wbdv-page-btn font-weight-bold"
                             onClick={() => this.search(this.state.pageCount)}>
                            {this.state.pageCount}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default SearchResults