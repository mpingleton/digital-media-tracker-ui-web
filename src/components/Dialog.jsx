import React, { useState } from 'react';

function Dialog(props) {
    if (props.isOpen) {
        return (
            <div className="dialog">
                <button href="#" onClick={() => {
                    if (props.onClose !== undefined) {
                        props.onClose();
                    }
                }}>X</button>
                {props.children}
            </div>
        );
    }
    else {
        return null;
    }
}

export default Dialog;