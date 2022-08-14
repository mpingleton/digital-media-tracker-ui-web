import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {
    getApiContext,
    getMediaById,
} from '../api';

function MediaProfile() {
    const { mediaId } = useParams();
    const [media, setMedia] = useState({});

    useEffect(() => {
        document.title="Media Profile - Digital Media Tracker";
        getMediaById(getApiContext(), mediaId).then((data) => setMedia(data));
    }, []);

    return (
        <div className="media_profile_page">
            <h2>{media.title}</h2>
            <p>{`Control number: ${media.controlNumber}.`}</p>
            <p>{`Classification: ${media.classification}.`}</p>
            <p>{`Media type: ${media.mediaType}.`}</p>
            <p>{`Lifecycle state: ${media.lifecycleState}.`}</p>
        </div>
    );
}

export default MediaProfile;