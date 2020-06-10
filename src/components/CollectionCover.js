import React from 'react'
import {Link} from "react-router-dom";

class CollectionCover extends React.Component {
    render() {
        return (
            <div className="col wbdv-collection-col">
                <div className="wbdv-grade-box">
                    {this.props.comicBook.grade.toFixed(1)}
                </div>
                <div className="btn wbdv-delete-box"
                     onClick={() => alert("Will remove comic book")}>
                    <i className="fa fa-trash"/>
                </div>
                <Link to={`/issue/${this.props.comicBook.issueId}`}>
                    <img className="wbdv-collection-cover" src={this.props.comicBook.coverImageURL}
                         alt="Temporary"/>
                </Link>
            </div>
        )
    }
}

export default CollectionCover;