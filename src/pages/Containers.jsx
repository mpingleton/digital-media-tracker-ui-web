import React, {useEffect, useState} from 'react';
import Panel from '../components/Panel';
import NewContainerDialog from '../dialogs/NewContainerDialog';
import ThreeComponentPage from '../layouts/ThreeComponentPage';

import {
    getApiContext,
    getContainersInMe,
} from '../api';

function Containers() {
    const [containers, setContainers] = useState([]);
    const [isNewContainerDialogOpen, setNewContainerDialogOpen] = useState(false);
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
                        setNewContainerDialogOpen(!isNewContainerDialogOpen);
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

    const dialogNewContainer = (
        <NewContainerDialog
            isOpen={isNewContainerDialogOpen}
            onSuccess={() => {
                window.location.reload();
                setNewContainerDialogOpen(false);
            }}
            onClose={() => {
                setNewContainerDialogOpen(false);
            }}
        />
    );

    return (
        <ThreeComponentPage
            leftComponent={actionPanel}
            centerComponent={containerTable}
            rightComponent={filterPanel}
            dialogs={[dialogNewContainer]}
        />
    );
}

export default Containers;