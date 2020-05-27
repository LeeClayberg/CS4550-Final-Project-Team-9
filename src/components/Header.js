import React from 'react'
import {Link} from "react-router-dom";

class Header extends React.Component {
    state = {
        searchString: ''
    }

    updateSearchString = (newString) =>
        this.setState(prevState => ({
            searchString: newString
        }))

    render() {
        return (
            <div className="navbar fixed-top wbdv-navbar-settings">
                <div className="wbdv-long-blank"/>
                <div className="wbdv-long-bar">
                    <div className="row">
                        <div className="col-3">
                            <img className="d-lg-none wbdv-small_logo align-middle"
                                 src={require('../ComicStack.png')}
                                 alt="Card image cap"/>
                            <div className="d-none d-lg-block wbdv-logo-section">
                                <img className="wbdv-logo align-middle"
                                     src={require('../ComicStack.png')}
                                     alt="Card image cap"/>
                            </div>
                        </div>
                        <div className="col-7 col-md-6">
                            <div className="input-group wbdv-search-group">
                                <input type="text" className="form-control wbdv-search-bar"
                                       placeholder="Search"
                                       onChange={(event) => this.updateSearchString(
                                           event.target.value)}
                                       value={this.state.searchString}/>
                                <div className="input-group-append">
                                    <Link to={`/search/${this.state.searchString}`}>
                                        <span
                                            className="btn input-group-text wbdv-search-button"
                                            id="basic-addon1">
                                            <i className="fa fa-search fa-lg wbdv-search-icon"></i>
                                        </span>
                                    </Link>
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
        )
    }
}

export default Header