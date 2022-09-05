import React, { useState } from 'react';

function Dialog(props) {
    if (props.isOpen) {
        return (<div className="dialog">{props.children}</div>);
    }
    else {
        return null;
    }
}

export default Dialog;