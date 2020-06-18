import React from 'react'
import RecentReviews from "./RecentReviews";
import {Link} from "react-router-dom";
import userService from "../services/UserService";

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        passwordVerify: ''
    }

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    updateUsername = (newString) => {
        let lowerString = newString.toLowerCase().replace(' ', '');
        this.setState(prevState => ({
            username: lowerString
        }))}

    updatePassword = (newString) =>
        this.setState(prevState => ({
            password: newString
        }))

    updatePasswordVerify = (newString) =>
        this.setState(prevState => ({
            passwordVerify: newString
        }))

    addUser = () =>
        userService.createUser({
             username: this.state.username,
             password: this.state.password,
             startDate: (new Date()).toISOString().substring(0, 10)
        })
            .then(user => this.props.loginUser(user.id))
            .then(() => this.props.history.push(`/profile`))

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
                                       placeholder="username"
                                       onChange={(event) => this.updateUsername(
                                           event.target.value)}
                                       value={this.state.username}/>
                            </div>
                            <div className="wbdv-register-group font-weight-bold" align="left">
                                Password
                                <input type="password"
                                       className="form-control wbdv-register-field"
                                       placeholder="password"
                                       onChange={(event) => this.updatePassword(
                                           event.target.value)}
                                       value={this.state.password}/>
                            </div>
                            <div className="wbdv-register-group font-weight-bold" align="left">
                                Verify Password
                                <input type="password"
                                       className="form-control wbdv-register-field"
                                       placeholder="password"
                                       onChange={(event) => this.updatePasswordVerify(
                                           event.target.value)}
                                       value={this.state.passwordVerify}/>
                            </div>
                            <Link className="btn wbdv-register-btn" onClick={() =>
                                    this.state.password == this.state.passwordVerify?
                                    this.addUser():
                                    alert("Could not verify password")}>
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