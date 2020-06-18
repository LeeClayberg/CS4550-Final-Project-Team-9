import React from 'react'
import {Link} from "react-router-dom";

class CollectionCover extends React.Component {
    state = {
        hover: false
    }

    render() {
        let elements = [];
        for (let i = 10.0; i >= 0; (i <= 9.2 ? i -= 0.5 : i -= 0.2)) {
            elements.push(<option value={i}>{(Math.round(i * 10) / 10).toFixed(1)}</option>);
        }
        return (
            <div className="col wbdv-collection-col"
                 onMouseEnter={() => this.setState({
                      hover: true
                 })}
                 onMouseLeave={() => this.setState({
                      hover: false
                 })}>
                {
                    this.state.hover &&
                    <select
                        className="custom-select wbdv-collection-grade-dropdown"
                        value={this.props.comicBook.grade}
                        onChange={(event) => this.props.updateComicBook(this.props.comicBook.id, event.target.value)}>
                        {elements}
                    </select>
                }
                {
                    !this.state.hover &&
                    <div className="wbdv-grade-box">
                        {this.props.comicBook.grade.toFixed(1)}
                    </div>
                }
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