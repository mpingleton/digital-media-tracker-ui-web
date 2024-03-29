import React, { useState, useEffect } from 'react';
import Dialog from '../components/Dialog';

import {
    getApiContext,
    getContainersInMe,
    createMedia,
} from '../api';

function NewMediaDialog(props) {
    const [containers, setContainers] = useState([]);

    useEffect(() => {
        getContainersInMe(getApiContext()).then((data) => setContainers(data.containers));
    }, []);

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

        createMedia(getApiContext(), mediaData)
            .then(() => {
                if (props.onSuccess !== undefined) {
                    props.onSuccess();
                }
            });
    };

    return (
        <Dialog isOpen={props.isOpen} onClose={props.onClose}>
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
    );
}

export default NewMediaDialog;