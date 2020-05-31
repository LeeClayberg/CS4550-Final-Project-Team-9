import React from 'react'
import {Link} from "react-router-dom";

class Profile extends React.Component {

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
                            <span className="wbdv-login-header">Profile</span>

                        </div>
                        <div className="col-1 col-lg-3"/>
                    </div>
                </div>
            </span>
        )
    }
}

export default Profile;