import React from "react";
import {usePromiseTracker} from "react-promise-tracker";


const DetailsLoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker({area: props.area});

    return (
        promiseInProgress &&
        <div className="wbdv-loading">
            <img className="wbdv-loading-logo align-middle"
                 src={require('../ComicStackBW.png')}
                 alt="Card image cap"/>
        </div>
    );
}

export default DetailsLoadingIndicator;