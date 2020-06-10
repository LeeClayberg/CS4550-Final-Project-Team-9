import React from 'react'

class ProfileCover extends React.Component {
    render() {
        return (
            <div className="col wbdv-profile-cover-col">
                <img className="wbdv-profile-cover" src={this.props.comicBook.coverImageURL}
                     alt="Card image cap"/>
            </div>
        )
    }
}

export default ProfileCover;