import React from "react";
import {usePromiseTracker} from "react-promise-tracker";


const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress &&
        <div className="col wbdv-home-cover-col">
            <div className="wbdv-loading float-right">
                <img className="wbdv-loading-logo align-middle"
                     src={require('../ComicStackBW.png')}
                     alt="Card image cap"/>
            </div>
        </div>
    );
}

export default LoadingIndicator;