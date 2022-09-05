import React, { useState } from 'react';

function Dialog(props) {
    if (props.isOpen) {
        return (
            <div className="dialog">
                <a href="#" onClick={() => {
                    if (props.onClose !== undefined) {
                        props.onClose();
                    }
                }}>{'[X]'}</a>
                {props.children}
            </div>
        );
    }
    else {
        return null;
    }
}

export default Dialog;