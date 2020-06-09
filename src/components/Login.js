import React from 'react'
import RecentReviews from "./RecentReviews";
import {Link} from "react-router-dom";

class Login extends React.Component {

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    render() {
        return (
            <span>
                <div className="wbdv-login-section">
                    <div className="row">
                        <div className="col-1 col-lg-3"/>
                        <div className="col-10 col-lg-6" align="center">
                            <span className="wbdv-login-header">Login</span>
                            <div className="wbdv-login-group font-weight-bold" align="left">
                                Username
                                <input type="text"
                                       className="form-control wbdv-login-field"
                                       placeholder="username"/>
                            </div>
                            <div className="wbdv-login-group font-weight-bold" align="left">
                                Password
                                <input type="password"
                                       className="form-control wbdv-login-field"
                                       placeholder="password"/>
                            </div>
                            <Link className="btn wbdv-login-btn" to={`/profile`}>
                                Login
                            </Link>
                            <span className="row">
                                <div className="col-6 wbdv-small-login-btn" align="left">
                                    <Link>
                                        <span className="wbdv-small-btn-color">
                                            Forgot Password?
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-6 wbdv-small-login-btn" align="right">
                                    <Link to={`/register`}>
                                        <span className="wbdv-small-btn-color">
                                            Register
                                        </span>
                                    </Link>
                                </div>
                            </span>
                        </div>
                        <div className="col-1 col-lg-3"/>
                    </div>
                </div>
                <RecentReviews/>
            </span>
        )
    }
}

export default Login;