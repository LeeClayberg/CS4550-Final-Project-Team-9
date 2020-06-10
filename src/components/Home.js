import React from 'react'
import SearchService from "../services/SearchService";
import HomeCover from "./HomeCover";
import RecentReviews from "./RecentReviews";
import {Link} from "react-router-dom";
import LoadingIndicator from "./HomeLoading";
import userService from "../services/UserService";

class Home extends React.Component {
    state = {
        issues: [],
        loaded: false,
        username: '',
        password: '',
        user: {}
    }

    componentDidMount() {
        SearchService.randomComics()
            .then(pageInfo =>
                this.setState({
                    issues: pageInfo.results,
                    loaded: true
                }));
        userService.findUserById(this.props.userId)
            .then(user => {
                this.setState({
                    user: user
                })
            })
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    updateUsername = (newString) =>
        this.setState(prevState => ({
            username: newString
        }))

    updatePassword = (newString) =>
        this.setState(prevState => ({
            password: newString
        }))

    login = () =>
        userService.findIdFromLogin(this.state.username, this.state.password)
            .then(user => this.props.loginUser(user.id))
            .then((userId) => userId? this.props.history.push(`/profile`): alert("Unknown username or password"))

    render() {
        return (
            <span>
                <div className="wbdv-home-info">
                    <h3 align="center">Welcome to Comic Stack!</h3>
                    We support over <b>700,000</b> comic book issues that date back to the late 1930's! Do you have a giant personal collection of comic books from when you were younger? Become a member and track your collection today! Every comic book added to your collection can be marked with a grade and any signatures it might have. Want to learn more about your comics? Read the description and reviews provided by other users on every issue. <b>Tracking your comic books just got a whole lot easier!</b>
                </div>
                <span className="row">
                    <div className="col-md-8 wbdv-home-col">
                        <div className="wbdv-home-issues">
                            <div className="wbdv-home-issues-header">
                                Check out these issues!
                            </div>
                            {
                                !this.state.loaded &&
                                <div className="row row-cols-5 wbdv-cover-row">
                                    <LoadingIndicator/>
                                    <LoadingIndicator/>
                                    <LoadingIndicator/>
                                    <LoadingIndicator/>
                                    <LoadingIndicator/>
                                </div>
                            }
                            {
                                this.state.loaded &&
                                <div className="row row-cols-5 wbdv-cover-row">
                                    {
                                        this.state.issues.map(issue =>
                                                                  <HomeCover
                                                                      id={issue.id}
                                                                      issue={issue}/>)
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-4 wbdv-home-col">
                        {
                            !this.props.userId &&
                             <div className="wbdv-home-login" align="center">
                                 Login
                                 <div className="wbdv-home-login-size font-weight-bold" align="left">
                                     Username
                                     <input type="text"
                                            className="form-control wbdv-home-login-field"
                                            onChange={(event) => this.updateUsername(
                                                event.target.value)}
                                            placeholder="username"/>
                                 </div>
                                 <div className="wbdv-home-login-size font-weight-bold" align="left">
                                     Password
                                     <input type="password"
                                            className="form-control wbdv-home-login-field"
                                            onChange={(event) => this.updatePassword(
                                                event.target.value)}
                                            placeholder="password"/>
                                 </div>
                                 <Link className="btn wbdv-home-login-btn" onClick={() => this.login()}>
                                     Login
                                 </Link>
                                 <span className="row">
                                    <div className="col-6 wbdv-home-small-login-btn" align="left">
                                        <Link to={`/register`}>
                                            <span className="wbdv-small-btn-color">
                                                Register
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="col-6 wbdv-home-small-login-btn" align="right">
                                        Forgot Password?
                                    </div>
                                </span>
                             </div>
                        }
                        {
                            this.props.userId &&
                            <div className="wbdv-home-profile" align="center">
                                <img className="wbdv-home-profile-img"
                                     src={this.state.user.pictureURL}/>
                                <div className="wbdv-home-profile-username">
                                    {this.state.user.username}
                                </div>
                                <span className="row">
                                    <div className="col-12 col-lg-6 wbdv-home-profile-col-left">
                                        <Link className="btn wbdv-home-profile-btn" to={`/profile`}>
                                            Profile
                                        </Link>
                                    </div>
                                    <div className="col-12 col-lg-6 wbdv-home-profile-col-right">
                                        <Link className="btn wbdv-home-profile-btn" to={`/collection&sortby=grade`}>
                                            Collection
                                        </Link>
                                    </div>
                                </span>
                                <span className="row">
                                    <div className="col-12 col-lg-6 wbdv-home-profile-col-left">
                                        <Link className="btn wbdv-home-profile-btn" to={`/reviews`}>
                                            Reviews
                                        </Link>
                                    </div>
                                    <div className="col-12 col-lg-6 wbdv-home-profile-col-right">
                                        <Link className="btn wbdv-home-profile-btn"
                                              onClick={() => this.props.logoutUser()}>
                                            Logout
                                        </Link>
                                    </div>
                                </span>
                            </div>
                        }
                    </div>
                </span>
                <RecentReviews/>
            </span>
        )
    }
}

export default Home;