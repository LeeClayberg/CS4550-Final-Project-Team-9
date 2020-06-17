import React from 'react'
import userService from "../services/UserService";

class AdminRow extends React.Component {
    state = {
        selected: false,
        role: ''
    }

    componentDidMount() {
        this.setState(prevState => ({
            role: this.props.user.role
        }));
    }

    updateRole = (value) =>
        this.setState(prevState => ({
            role: value
        }))

    render() {
        return (
            <div className="row wbdv-admin-entry">
                <div className="col-3 wbdv-admin-field-row">
                    {this.props.user.username}
                </div>
                <div className="col-3 wbdv-admin-field-row">
                    {this.props.user.password}
                </div>
                <div className="col-3 col-md-2 wbdv-admin-field-row">
                    {
                        !this.state.selected && this.props.user.role
                    }
                    {
                        this.state.selected &&
                        <select className="custom-select wbdv-admin-dropdown"
                                value={this.state.role}
                            onChange={(event) => this.updateRole(
                                event.target.value)}>
                            <option value="admin">admin</option>
                            <option value="collector">collector</option>
                        </select>
                    }
                </div>
                <div className="col-2 d-none d-md-block wbdv-admin-field-row">
                    {this.props.user.id}
                </div>
                <div className="col-3 col-md-2 wbdv-admin-field-row" align="right">
                    {
                        this.state.selected &&
                            <i className="btn fa fa-check wbdv-admin-icon"
                                onClick={() => {
                                    this.setState({
                                        selected: false
                                    });
                                    this.props.updateUser(this.props.user, this.state.role)}}/>
                    }
                    {
                        !this.state.selected && this.props.currentUser.id != this.props.user.id && this.props.user.id != 1 &&
                        <span>
                            <i className="btn fa fa-pencil wbdv-admin-icon"
                                onClick={() => {
                                    this.setState({
                                        selected: true
                                    })
                                }}/>
                            <i className="btn fa fa-trash wbdv-admin-icon" onClick={() => this.props.deleteUser(this.props.user.id)}/>
                        </span>
                    }
                </div>
            </div>
        )
    }
}

export default AdminRow;