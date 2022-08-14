import React, {useEffect, useState} from 'react';

import {
    getApiContext,
    getContainersInMe,
} from '../api';

function Containers() {
    const [containers, setContainers] = useState([]);

    useEffect(() => {
        document.title="Containers - Digital Media Tracker";
        getContainersInMe(getApiContext()).then((data) => setContainers(data.containers));
    }, []);

    var containerList = (<h3>Loading...</h3>);
    if (containers.length > 0) {
        containerList = containers.map((m) => (
            <tr>
                <td>{m.description}</td>
                <td>{m.facilityId}</td>
            </tr>
        ));
    }

    return (
        <div className="container_page">
            <div className="buttonbar">
                <ul className="buttonbar">
                    <li className="buttonbar">
                        <a className="buttonbar_item" href="/containers/new">New Container</a>
                    </li>
                </ul>
            </div>
            <table>
                <tr>
                    <th>Description</th>
                    <th>Facility</th>
                </tr>
                {containerList}
            </table>
        </div>
    );
}

export default Containers;