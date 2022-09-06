import React, {useEffect, useState} from 'react';
import Panel from '../components/Panel';
import ThreeComponentPage from '../layouts/ThreeComponentPage';

import {
    getApiContext,
    getContainersInMe,
} from '../api';

function Containers() {
    const [containers, setContainers] = useState([]);
    const [containerSelection, setContainerSelection] = useState([]);

    useEffect(() => {
        document.title="Containers - Digital Media Tracker";
        getContainersInMe(getApiContext()).then((data) => setContainers(data.containers));
    }, []);

    var containerList = (<h3>Loading...</h3>);
    if (containers.length > 0) {
        containerList = containers.map((m) => (
            <tr>
                <td></td>
                <td>{m.description}</td>
                <td>{m.facilityId}</td>
            </tr>
        ));
    }

    const actionPanel = (
        <Panel id="containers_actionbar">
            <div className="actionpanel">
                <button
                    onClick={() => {
                        
                    }}
                >
                    New Container
                </button>
                <button
                    onClick={() => {

                    }}
                    disabled={containerSelection.length === 0}
                >
                    Delete
                </button>
            </div>
        </Panel>
    );

    const filterPanel = (
        <Panel id="containers_filterpanel">
            <ul>
                <li><a href="/containers">{'(Clear Filters)'}</a></li>
            </ul>
        </Panel>
    );

    const containerTable = (
        <table>
            <tr>
                <th>Select</th>
                <th>Description</th>
                <th>Facility</th>
            </tr>
            {containerList}
        </table>
    );

    return (
        <ThreeComponentPage
            leftComponent={actionPanel}
            centerComponent={containerTable}
            rightComponent={filterPanel}
            dialogs={null}
        />
    );
}

export default Containers;