import React, {useEffect, useState} from 'react';
import Panel from '../components/Panel';
import NewMediaDialog from '../dialogs/NewMediaDialog';
import ThreeComponentPage from '../layouts/ThreeComponentPage';

import {
    getApiContext,
    getMediaInMe,
    getMediaInFacility,
    getMediaInContainer,
} from '../api';

function Media() {
    const params = new URLSearchParams(window.location.search);
    const [media, setMedia] = useState([]);
    const [isNewMediaDialogOpen, setNewMediaDialogOpen] = useState(false);

    useEffect(() => {
        document.title="Media - Digital Media Tracker";
        const facilityId = params.get('facility');
        const containerId = params.get('container');
        if (facilityId === null && containerId === null) {
            getMediaInMe(getApiContext()).then((data) => setMedia(data.media));
        }
        else if (facilityId !== null && containerId === null) {
            getMediaInFacility(getApiContext(), Number.parseInt(facilityId, 10)).then((data) => setMedia(data.media));
        }
        else if (facilityId === null && containerId !== null) {
            getMediaInContainer(getApiContext(), Number.parseInt(containerId, 10)).then((data) => setMedia(data.media));
        }
    }, []);

    var mediaList = (<h3>Loading...</h3>);
    if (media.length > 0) {
        mediaList = media.map((m) => (
            <tr>
                <td>{m.controlNumber}</td>
                <td><a href={`/media/id/${m.id}`}>{m.title}</a></td>
                <td>{m.mediaType}</td>
                <td>{m.classification}</td>
                <td>{m.lifecycleState}</td>
            </tr>
        ));
    }

    const actionPanel = (
        <Panel id="media_actionbar">
            <div className="actionpanel">
                <button href="#" onClick={() => {
                    setNewMediaDialogOpen(!isNewMediaDialogOpen);
                }}>New Media</button>
            </div>
        </Panel>
    );

    const filterPanel = (
        <Panel id="media_filterpanel">
            <p>Filters</p>
        </Panel>
    );

    const mediaTable = (
        <table>
            <tr>
                <th>Control Number</th>
                <th>Title</th>
                <th>Medium</th>
                <th>Classification</th>
                <th>State</th>
            </tr>
            {mediaList}
        </table>
    );

    const mediaDialog = (
        <NewMediaDialog
            isOpen={isNewMediaDialogOpen}
            onSuccess={() => {
                window.location.reload();
                setNewMediaDialogOpen(false);
            }}
            onClose={() => {
                setNewMediaDialogOpen(false);
            }}
        />
    );

    return (
        <ThreeComponentPage
            leftComponent={actionPanel}
            centerComponent={mediaTable}
            rightComponent={filterPanel}
            dialogs={[mediaDialog]}
        />
    );
}

export default Media;