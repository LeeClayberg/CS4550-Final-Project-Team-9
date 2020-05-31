import React from 'react'
import SearchService from "../services/SearchService";
import HomeCover from "./HomeCover";
import RecentReviews from "./RecentReviews";

class Home extends React.Component {
    state = {
        issues: []
    }

    componentDidMount() {
        SearchService.randomComics()
            .then(pageInfo =>
                this.setState({
                    issues: pageInfo.results
                }));
        window.scrollTo({top: 0, behavior: "smooth"});
    }

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
                            <div className="row row-cols-5 wbdv-cover-row">
                                {
                                    this.state.issues.map(issue =>
                                                               <HomeCover
                                                                   id={issue.id}
                                                                   issue={issue}/>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wbdv-home-col">
                        <div className="wbdv-home-login" align="center">
                            Login
                            <div className="wbdv-home-login-size font-weight-bold" align="left">
                                Username
                                <input type="text"
                                       className="form-control wbdv-home-login-field"
                                       placeholder="username"/>
                            </div>
                            <div className="wbdv-home-login-size font-weight-bold" align="left">
                                Password
                                <input type="password"
                                       className="form-control wbdv-home-login-field"
                                       placeholder="password"/>
                            </div>
                            <button className="btn wbdv-home-login-btn"
                                onClick={() => alert("This eventually will be a way for a collector to login")}>
                                Login
                            </button>
                            <span className="row">
                                <div className="col-6 wbdv-home-small-login-btn" align="left">
                                    Register
                                </div>
                                <div className="col-6 wbdv-home-small-login-btn" align="right">
                                    Forgot Password?
                                </div>
                            </span>
                        </div>
                    </div>
                </span>
                <RecentReviews/>
            </span>
        )
    }
}

export default Home;