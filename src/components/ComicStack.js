import React from 'react'
import SearchResults from "./SearchResults";
import SearchService from "../services/SearchService";

class ComicStack extends React.Component {
    state = {
        issues: [],
        searchString: ''
    }

    componentDidMount() {
        SearchService.search("", 1)
            .then(pageInfo =>
                this.setState({
                    issues: pageInfo.results
        }))
    }

    updateSearchString = (newString) =>
        this.setState(prevState => ({
            searchString: newString
        }))

    search = () =>
        SearchService.search(this.state.searchString, 1)
            .then(pageInfo =>
                this.setState({
                    issues: pageInfo.results
        }))

    render() {
        return (
            <div className="container">
                <div className="navbar fixed-top navbar-settings">
                    <div className="long-blank"/>
                    <div className="long-bar">
                        <div className="row">
                            <div className="col-3">
                                <img className="d-lg-none small_logo align-middle" src={require('../ComicStack.png')}
                                     alt="Card image cap"/>
                                <div className="d-none d-lg-block logo-section">
                                    <img className="logo align-middle" src={require('../ComicStack.png')}
                                         alt="Card image cap"/>
                                </div>
                            </div>
                            <div className="col-7 col-md-6">
                                <div className="input-group search-group">
                                    <input type="text" className="form-control search-bar" placeholder="Search"
                                           onChange={(event) => this.updateSearchString(event.target.value)}
                                           value={this.state.searchString}/>
                                    <div className="input-group-append">
                                        <span className="btn input-group-text search-button-border" id="basic-addon1"
                                              onClick={() => this.search(true)}>
                                            <i className="fa fa-search fa-lg search-icon"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 col-md-3">
                                <div className="d-none d-md-block profile-text font-weight-bold">
                                    Account
                                </div>
                                <div className="profile-img">
                                    <i className="fa fa-user fa-2x user-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SearchResults
                    {...console.log(this.state.issues)}
                    issues={this.state.issues}/>
            </div>
        )
    }
}

export default ComicStack