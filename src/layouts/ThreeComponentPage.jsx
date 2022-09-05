import React from 'react';
import './styles/ThreeComponentPage.css';

function ThreeComponentPage(props) {
    return (
        <div className="component_wrapper">
            <div className="component_left">
                {props.leftComponent}
            </div>
            <div className="component_center">
                {props.centerComponent}
            </div>
            <div className="component_right">
                {props.rightComponent}
            </div>
            {props.dialogs}
        </div>
    );
}

export default ThreeComponentPage;