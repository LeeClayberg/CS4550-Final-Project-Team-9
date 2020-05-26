import React from 'react'
import SearchResults from "./SearchResults";
import SearchService from "../services/SearchService";

class ComicStack extends React.Component {
    state = {
        issues: [],
        page: 1,
        pageCount: 1,
        searchString: ''
    }

    componentDidMount() {
        SearchService.search("", this.state.page)
            .then(pageInfo =>
                this.setState({
                    issues: pageInfo.results
        }))
    }

    updateSearchString = (newString) =>
        this.setState(prevState => ({
            searchString: newString
        }))

    search = (page) =>
        SearchService.search(this.state.searchString, page)
            .then(pageInfo =>
                this.setState({
                    page: page,
                    pageCount: Math.floor(pageInfo.number_of_total_results / pageInfo.limit),
                    issues: pageInfo.results
        }))



    render() {
        return (
            <div className="container">
                <div className="navbar fixed-top wbdv-navbar-settings">
                    <div className="wbdv-long-blank"/>
                    <div className="wbdv-long-bar">
                        <div className="row">
                            <div className="col-3">
                                <img className="d-lg-none wbdv-small_logo align-middle" src={require('../ComicStack.png')}
                                     alt="Card image cap"/>
                                <div className="d-none d-lg-block wbdv-logo-section">
                                    <img className="wbdv-logo align-middle" src={require('../ComicStack.png')}
                                         alt="Card image cap"/>
                                </div>
                            </div>
                            <div className="col-7 col-md-6">
                                <div className="input-group wbdv-search-group">
                                    <input type="text" className="form-control wbdv-search-bar" placeholder="Search"
                                           onChange={(event) => this.updateSearchString(event.target.value)}
                                           value={this.state.searchString}/>
                                    <div className="input-group-append">
                                        <span className="btn input-group-text wbdv-search-button-border" id="basic-addon1"
                                              onClick={() => this.search(1)}>
                                            <i className="fa fa-search fa-lg wbdv-search-icon"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 col-md-3">
                                <div className="d-none d-md-block wbdv-profile-text font-weight-bold">
                                    Account
                                </div>
                                <div className="wbdv-profile-img">
                                    <i className="fa fa-user fa-2x wbdv-user-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SearchResults
                    page={this.state.page}
                    pageCount={this.state.pageCount}
                    issues={this.state.issues}
                    search={this.search}/>
            </div>
        )
    }
}

export default ComicStack