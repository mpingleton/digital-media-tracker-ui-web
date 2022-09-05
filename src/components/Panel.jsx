import React from 'react';

function Panel(props) {
    return (
        <div id={props.id} className="panel">{props.children}</div>
    );
}

export default Panel;