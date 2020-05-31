import React from 'react'
import RecentReviews from "./RecentReviews";

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
                            <button className="btn wbdv-login-btn"
                                    onClick={() => alert("This eventually will be a way for a collector to login")}>
                                Login
                            </button>
                            <span className="row">
                                <div className="col-6 wbdv-small-login-btn" align="left">
                                    Register
                                </div>
                                <div className="col-6 wbdv-small-login-btn" align="right">
                                    Forgot Password?
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