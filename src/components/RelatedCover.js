import React from 'react'
import {Link} from "react-router-dom";

class RelatedCover extends React.Component {
    render() {
        return (
            <div className="col wbdv-related-cover-col">
                <Link to={`/details/issue/${this.props.issue.id}`}>
                    <img className="wbdv-related-cover" src={this.props.issue.image.super_url}
                        alt="Card image cap"/>
                </Link>
            </div>
        )
    }
}

export default RelatedCover;