import React from 'react'
import {Link} from "react-router-dom";
import userService from "../services/UserService";

class Header extends React.Component {
    state = {
        searchString: '',
        menuDown: false,
        user: {}
    }

    componentDidMount() {
        userService.findUserById(this.props.userId)
            .then(user => {
                this.setState({
                    user: user
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.userId !== this.props.userId) {
            userService.findUserById(this.props.userId)
                .then(user => {
                    this.setState({
                        user: user
                    })
                })
        }
    }

    updateSearchString = (newString) =>
        this.setState(prevState => ({
            searchString: newString
        }))

    render() {
        return (
            <span className="fixed-top">
                <div className="wbdv-long-blank"/>
                <div className="wbdv-long-bar">
                    <div className="row wbdv-top-bar-height">
                        <div className="col-3 wbdv-top-bar-height">
                            <Link to={`/`}>
                                <img className="d-lg-none wbdv-small_logo align-middle"
                                     src={require('../ComicStack.png')}
                                     alt="Card image cap"/>
                                <div className="d-none d-lg-block wbdv-logo-section">
                                    <img className="wbdv-logo align-middle"
                                         src={require('../ComicStack.png')}
                                         alt="Card image cap"/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-7 col-md-6 wbdv-top-bar-height">
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
                        <div className="col-2 col-md-3 wbdv-top-bar-height wbdv-top-text">
                            {
                                !this.props.userId &&
                                <Link to={`/login`} className="float-right">
                                    <div
                                        className="d-none d-md-block wbdv-loginregister-text wbdv-no-link">
                                        Login/Register
                                    </div>
                                    <div
                                        className="d-md-none wbdv-loginregister-text-sm wbdv-no-link">
                                        Login/<br/>Register
                                    </div>
                                </Link>
                            }
                            {
                                this.props.userId &&
                                <span>
                                    <div
                                        className="d-none d-md-block wbdv-profile-text wbdv-no-link">
                                        {this.state.user.username}
                                    </div>
                                    <img className="btn wbdv-profile-img"
                                         src={"https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"}
                                         onClick={() => this.setState(
                                             {menuDown: !this.state.menuDown})}/>
                                </span>
                            }
                            {
                                this.state.menuDown &&
                                <div className="wbdv-header-dropdown" onClick={() => this.setState({
                                        menuDown: false
                                    })}>
                                    <ul className="wbdv-header-dropdown-list">
                                        <li className="list-group-item wbdv-header-dropdown-item">
                                            <Link className="wbdv-no-link" to={`/profile`}>
                                                Profile
                                            </Link>
                                        </li>
                                        <li className="list-group-item wbdv-header-dropdown-item">
                                            <Link className="wbdv-no-link" to={`/collection&sortby=grade`}>
                                                Collection
                                            </Link>
                                        </li>
                                        <li className="list-group-item wbdv-header-dropdown-item">
                                            <Link className="wbdv-no-link" to={`/reviews`}>
                                                Reviews
                                            </Link>
                                        </li>
                                        <li className="list-group-item wbdv-header-dropdown-item">
                                            <Link className="wbdv-no-link" to={`/`}
                                                onClick={() => this.props.logoutUser()}>
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

export default Header