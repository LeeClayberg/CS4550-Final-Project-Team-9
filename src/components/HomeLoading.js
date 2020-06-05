import React from "react";
import {usePromiseTracker} from "react-promise-tracker";


const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker({area: props.area});

    return (
        promiseInProgress &&
        <div className="col wbdv-home-cover-col">
            {console.log("Hit")}
            <div className="wbdv-home-loading float-right">
                <img className="wbdv-home-loading-logo align-middle"
                     src={require('../ComicStackBW.png')}
                     alt="Card image cap"/>
            </div>
        </div>
    );
}

export default LoadingIndicator;