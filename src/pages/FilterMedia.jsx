import React, {useEffect, useState} from 'react';

import {
    getApiContext,
    getFacilitiesInMe,
} from '../api';

function FilterMedia() {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        getFacilitiesInMe(getApiContext()).then((data) => setFacilities(data.facilities));
    }, []);

    var facilityList = (<h3>Loading...</h3>);
    if (facilities.length > 0) {
        facilityList = facilities.map((f) => (
            <tr>
                <td>{f.description}</td>
                <td>{f.buildingAddress}</td>
                <td>{f.buildingNumber}</td>
                <td>{f.roomNumber}</td>
                <td><a href={`/media?facility=${f.id}`}>Select</a></td>
            </tr>
        ));
    }

    return (
        <div className="filter_media_page">
            <table>
                <tr>
                    <th>Description</th>
                    <th>Address</th>
                    <th>Building Number</th>
                    <th>Room Number</th>
                    <th>Select</th>
                </tr>
                {facilityList}
            </table>
        </div>
    );
}

export default FilterMedia;