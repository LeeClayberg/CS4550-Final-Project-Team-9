import React from 'react'
import {Link} from "react-router-dom";

class CollectionCover extends React.Component {
    state = {
        hover: false
    }

    render() {
        return (
            <div className="col wbdv-collection-col"
                 onMouseEnter={() => this.setState({
                      hover: true
                 })}
                 onMouseLeave={() => this.setState({
                      hover: false
                 })}>
                <div className="wbdv-grade-box">
                    {this.props.comicBook.grade.toFixed(1)}
                </div>
                {
                    this.state.hover &&
                    <div className="btn wbdv-delete-box"
                         onClick={() => this.props.deleteComicBook(this.props.comicBook.id)}>
                        <i className="fa fa-trash"/>
                    </div>
                }
                <Link to={`/details/issue/${this.props.comicBook.issueId}`}>
                    <img className="wbdv-collection-cover" src={this.props.comicBook.coverImageURL}
                         alt="Temporary"/>
                </Link>
            </div>
        )
    }
}

export default CollectionCover;