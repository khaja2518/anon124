import React from "react";
import ReactDOM from "react-dom";

function Portals() {
    return ReactDOM.createPortal
        (
            <div><h3>this is from a portal,
            </h3></div>,
            document.getElementById('portals-root')
        )
}

export default Portals