import React from 'react'
import RecentReviews from "./RecentReviews";
import {Link} from "react-router-dom";

class Register extends React.Component {

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    render() {
        return (
            <span>
                <div className="wbdv-register-section">
                    <div className="row">
                        <div className="col-1 col-lg-3"/>
                        <div className="col-10 col-lg-6" align="center">
                            <span className="wbdv-register-header">Sign up</span>
                            <div className="wbdv-register-group font-weight-bold" align="left">
                                Username
                                <input type="text"
                                       className="form-control wbdv-register-field"
                                       placeholder="username"/>
                            </div>
                            <div className="wbdv-register-group font-weight-bold" align="left">
                                Password
                                <input type="password"
                                       className="form-control wbdv-register-field"
                                       placeholder="password"/>
                            </div>
                            <div className="wbdv-register-group font-weight-bold" align="left">
                                Verify Password
                                <input type="password"
                                       className="form-control wbdv-register-field"
                                       placeholder="password"/>
                            </div>
                            <Link className="btn wbdv-register-btn" to={`/profile/admin`}>
                                Sign up
                            </Link>
                            <span className="row">
                                <div className="col-6"/>
                                <div className="col-6 wbdv-small-register-btn" align="right">
                                    <Link to={`/login`}>
                                        <span className="wbdv-small-btn-color">
                                            Login
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

export default Register;