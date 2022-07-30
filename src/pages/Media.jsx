import React, {useEffect, useState} from 'react';
import './Media.css';

import {
    getApiContext,
    getMediaInFacility,
    getMediaInContainer,
} from '../api';

function Media() {
    const params = new URLSearchParams(window.location.search);
    const [media, setMedia] = useState({});

    useEffect(() => {
        const facilityId = params.get('facility');
        const containerId = params.get('container');
        if (facilityId === null && containerId === null) {
            // Get all media that belongs to user.
        }
        else if (facilityId !== null && containerId === null) {
            getMediaInFacility(getApiContext(), Number.parseInt(facilityId, 10)).then((data) => setMedia(data));
        }
        else if (facilityId === null && containerId !== null) {
            getMediaInContainer(getApiContext(), Number.parseInt(containerId, 10)).then((data) => setMedia(data));
        }
    }, []);

    var mediaList = (<tr><td>Loading...</td></tr>);
    if (media.media !== undefined) {
        mediaList = media.media.map((m) => (
            <tr>
                <td>{m.controlNumber}</td>
                <td>{m.title}</td>
                <td>{m.mediaType}</td>
                <td>{m.classification}</td>
                <td>{m.lifecycleState}</td>
            </tr>
        ));
    }

    return (
        <div className="media_page">
            <div className="buttonbar">
                <ul className="buttonbar">
                    <li className="buttonbar_item">
                        <a className="buttonbar_item" href="#">New</a>
                    </li>
                    <li className="buttonbar_item">
                        <a className="buttonbar_item" href="#">New</a>
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