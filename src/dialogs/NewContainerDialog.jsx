import React, { useState, useEffect } from 'react';
import Dialog from '../components/Dialog';

import {
    getApiContext,
    getFacilitiesInMe,
    createContainer,
} from '../api';

function NewContainerDialog(props) {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        getFacilitiesInMe(getApiContext()).then((data) => setFacilities(data.facilities));
    }, []);

    var facilityOptions = facilities.map((f) => (<option value={f.id}>{f.description}</option>))

    const handleSubmit = (event) => {
        event.preventDefault();

        const containerData = {
            facilityId: Number(event.target.facility.value),
            description: event.target.description.value,
        };

        createContainer(getApiContext(), containerData)
            .then(() => {
                if (props.onSuccess !== undefined) {
                    props.onSuccess();
                }
            });
    };

    return (
        <Dialog isOpen={props.isOpen} onClose={props.onClose}>
            <form className="new_container_form" onSubmit={handleSubmit}>
                <label for="facility">Facility: </label>
                <select id="facility" name="facility">
                    {facilityOptions}
                </select><br/><br/>
                <label for="description">Description: </label><br/>
                <input type="text" id="description" name="description" /><br/><br/>
                <input type="submit" value="Create" />
            </form>
        </Dialog>
    );
}

export default NewContainerDialog;