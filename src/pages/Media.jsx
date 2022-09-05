import React, {useEffect, useState} from 'react';
import Panel from '../components/Panel';
import NewMediaDialog from '../dialogs/NewMediaDialog';
import ThreeComponentPage from '../layouts/ThreeComponentPage';

import {
    getApiContext,
    getMediaInMe,
    getFacilitiesInMe,
    getMediaInFacility,
    getMediaInContainer,
} from '../api';

function Media() {
    const params = new URLSearchParams(window.location.search);
    const [media, setMedia] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [isNewMediaDialogOpen, setNewMediaDialogOpen] = useState(false);
    const [mediaSelection, setMediaSelection] = useState([]);

    useEffect(() => {
        document.title="Media - Digital Media Tracker";
        const facilityId = params.get('facility');
        const containerId = params.get('container');

        getFacilitiesInMe(getApiContext()).then((data) => setFacilities(data.facilities));

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

    const toggleSelect = (id) => {
        const filteredSelection = mediaSelection.filter((selectedId) => (id !== selectedId));
        if (filteredSelection.length < mediaSelection.length) {
            setMediaSelection(filteredSelection);
            return;
        }

        const newSelection = mediaSelection.concat(id);
        setMediaSelection(newSelection);
    };

    const isSelected = (id) => {
        for (let i of mediaSelection) {
            if (id === i) {
                return true;
            }
        }

        return false;
    };

    var mediaList = (<h3>Loading...</h3>);
    if (media.length > 0) {
        mediaList = media.map((m) => (
            <tr>
                <td><input type="checkbox" checked={isSelected(m.id)} onClick={() => toggleSelect(m.id)} /></td>
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
                <button
                    onClick={() => {
                        setNewMediaDialogOpen(!isNewMediaDialogOpen);
                    }}
                >
                    New Media
                </button>
                <button
                    onClick={() => {

                    }}
                    disabled={mediaSelection.length === 0}
                >
                    Transfer
                </button>
            </div>
        </Panel>
    );

    const filterList = facilities.map((facility) => (
        <li><a href={`/media?facility=${facility.id}`}>{facility.description}</a></li>
    ));

    const filterPanel = (
        <Panel id="media_filterpanel">
            <ul>
                <li><a href="/media">{'(Clear Filters)'}</a></li>
                {filterList}
            </ul>
        </Panel>
    );

    const mediaTable = (
        <table>
            <tr>
                <th>Select</th>
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