import React, {useEffect, useState} from 'react';
import Dialog from '../components/Dialog';

import {
    getApiContext,
    getMediaInMe,
    getMediaInFacility,
    getMediaInContainer,
    getContainersInMe,
    createMedia,
} from '../api';

function Media() {
    const params = new URLSearchParams(window.location.search);
    const [media, setMedia] = useState([]);
    const [containers, setContainers] = useState([]);
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

        getContainersInMe(getApiContext()).then((data) => setContainers(data.containers));
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

    var containerOptions = containers.map((c) => (<option value={c.id}>{c.description}</option>));

    const handleSubmit = (event) => {
        event.preventDefault();

        const mediaData = {
            containerId: Number(event.target.container.value),
            controlNumber: event.target.controlNumber.value,
            title: event.target.title.value,
            mediaType: event.target.mediaType.value,
            classification: event.target.classification.value,
            lifecycleState: event.target.lifecycleState.value,
        };

        createMedia(getApiContext(), mediaData);
    };

    return (
        <div className="media_page">
            <Dialog isOpen={isNewMediaDialogOpen}>
                <form className="new_media_form" onSubmit={handleSubmit}>
                    <label for="container">Container: </label>
                    <select id="container" name="container">
                        {containerOptions}
                    </select><br/><br/>
                    <label for="controlNumber">Control Number: </label><br/>
                    <input type="text" id="controlNumber" name="controlNumber" /><br/><br/>
                    <label for="title">Title: </label><br/>
                    <input type="text" id="title" name="title" /><br/><br/>
                    <label for="mediaType">Media Type: </label>
                    <select id="mediaType" name="mediaType">
                        <option value="CD">CD</option>
                        <option value="DVD">DVD</option>
                        <option value="BD">BD</option>
                        <option value="HDD">HDD</option>
                        <option value="SSD">SSD</option>
                    </select><br/><br/>
                    <label for="classification">Classification: </label>
                    <select id="classification" name="classification">
                        <option value="UNCLASSIFIED">Unclassified</option>
                        <option value="CONFIDENTIAL">Confidential</option>
                        <option value="SECRET">Secret</option>
                        <option value="TOP_SECRET">Top Secret</option>
                    </select><br/><br/>
                    <label for="lifecycleState">Lifecycle State: </label>
                    <select id="lifecycleState" name="lifecycleState">
                        <option value="BLANK">Blank</option>
                        <option value="ACTIVE">Active</option>
                        <option value="RELEASED">Released</option>
                        <option value="DESTROYED">Destroyed</option>
                    </select><br/><br/>
                    <input type="submit" value="Create" />
                </form>
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