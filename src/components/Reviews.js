import React from 'react'
import CollectionCover from "./CollectionCover";
import {Link} from "react-router-dom";

class Reviews extends React.Component {

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    render() {
        return (
            <div className="wbdv-collection">
                <div className="wbdv-collection-header">
                    My Collection
                </div>
                <div className="row row-cols-3 row-cols-md-5 row-cols-lg-6 wbdv-cover-row">
                    <CollectionCover/><CollectionCover/><CollectionCover/>
                    <CollectionCover/><CollectionCover/><CollectionCover/>
                    <CollectionCover/><CollectionCover/><CollectionCover/>
                    <CollectionCover/><CollectionCover/><CollectionCover/>
                </div>
            </div>
        )
    }
}

export default Reviews;