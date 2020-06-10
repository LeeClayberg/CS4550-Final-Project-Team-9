import React from 'react'
import {Link} from "react-router-dom";

class CollectionCover extends React.Component {
    render() {
        return (
            <div className="col wbdv-collection-col">
                <div className="wbdv-grade-box">
                    10.0
                </div>
                <div className="btn wbdv-delete-box"
                     onClick={() => alert("Will remove comic book")}>
                    <i className="fa fa-trash"/>
                </div>
                <Link>
                <img className="wbdv-collection-cover" src={require("../TempCover.png")}
                     alt="Temporary"/>
                </Link>
            </div>
        )
    }
}

export default CollectionCover;