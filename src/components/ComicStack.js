import React from 'react'
import SearchResults from "./SearchResults";
import SearchService from "../services/SearchService";

class ComicStack extends React.Component {
    state = {
        issues: []
    }

    componentDidMount() {
        SearchService.search("swamp thing", 2)
            .then(pageInfo =>
                this.setState({
                     issues: pageInfo.results
                }))
    }

    render() {
        console.log(this.state.issues)
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
                                    <input type="text" className="form-control search-bar" placeholder="Search"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text search-button-border" id="basic-addon1">
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
                    issues={this.state.issues}/>
            </div>
        )
    }
}

export default ComicStack