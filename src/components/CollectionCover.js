import React from 'react'

class CollectionCover extends React.Component {
    render() {
        return (
            <div className="col wbdv-collection-col">
                <div className="wbdv-grade-box">
                    10.0
                </div>
                <img className="wbdv-collection-cover" src={require("../TempCover.png")}
                     alt="Temporary"/>
            </div>
        )
    }
}

export default CollectionCover;