import React from 'react'
import RecentReviews from "./RecentReviews";
import {Link} from "react-router-dom";
import userService from "../services/UserService";

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    componentDidMount() {
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
                <div className="wbdv-login-section">
                    <div className="row">
                        <div className="col-1 col-lg-3"/>
                        <div className="col-10 col-lg-6" align="center">
                            <span className="wbdv-login-header">Login</span>
                            <div className="wbdv-login-group font-weight-bold" align="left">
                                Username
                                <input type="text"
                                       className="form-control wbdv-login-field"
                                       onChange={(event) => this.updateUsername(
                                           event.target.value)}
                                       placeholder="username"/>
                            </div>
                            <div className="wbdv-login-group font-weight-bold" align="left">
                                Password
                                <input type="password"
                                       className="form-control wbdv-login-field"
                                       onChange={(event) => this.updatePassword(
                                           event.target.value)}
                                       placeholder="password"/>
                            </div>
                            <Link className="btn wbdv-login-btn" onClick={() => this.login()}>
                                Login
                            </Link>
                            <span className="row">
                                <div className="col-6 wbdv-small-login-btn" align="left"/>
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