import React, {useEffect, useState} from 'react';
import Panel from '../components/Panel';
import NewMediaDialog from '../dialogs/NewMediaDialog';

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

    return (
        <div className="media_page">
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
            <Panel id="media_buttonbar">
                <a className="buttonbar_item" href="#" onClick={() => {
                    setNewMediaDialogOpen(!isNewMediaDialogOpen);
                }}>New Media</a>
                <a className="buttonbar_item" href="/media/filter">Filter</a>
            </Panel>
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
        </div>
    );
}

export default Media;