import React, {useEffect, useState} from 'react';
import Dialog from '../components/Dialog';

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
            <Dialog isOpen={isNewMediaDialogOpen}>
                <h1>This is a new media dialog!</h1> 
            </Dialog>
            <div className="buttonbar">
                <ul className="buttonbar">
                    <li className="buttonbar_item">
                        <a className="buttonbar_item" href="#" onClick={() => {
                            setNewMediaDialogOpen(!isNewMediaDialogOpen);
                        }}>New Media</a>
                    </li>
                    <li className="buttonbar_item">
                        <a className="buttonbar_item" href="/media/filter">Filter</a>
                    </li>
                </ul>
            </div>
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