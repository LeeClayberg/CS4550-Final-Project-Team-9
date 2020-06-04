import React from 'react'

class AdminRow extends React.Component {
    render() {
        return (
            <div className="row wbdv-admin-entry">
                <div className="col-3 wbdv-admin-field-row">
                    {this.props.username}
                </div>
                <div className="col-3 wbdv-admin-field-row">
                    {this.props.password}
                </div>
                <div className="col-3 col-md-2 wbdv-admin-field-row">
                    {this.props.role}
                </div>
                <div className="col-2 d-none d-md-block wbdv-admin-field-row">
                    {this.props.id}
                </div>
                <div className="col-3 col-md-2 wbdv-admin-field-row" align="right">
                    <i className="btn fa fa-pencil wbdv-admin-icon" onClick={() => alert("Will change row to edit mode")}/>
                    <i className="btn fa fa-trash wbdv-admin-icon" onClick={() => alert("Will delete user")}/>
                </div>
            </div>
        )
    }
}

export default AdminRow;