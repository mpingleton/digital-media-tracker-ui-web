import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Panel from '../components/Panel';
import ThreeComponentPage from '../layouts/ThreeComponentPage';

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

    const panelMediaInfo = (
        <Panel id="media_profile_info_panel">
            <h2>{media.title}</h2>
            <p>{`Control number: ${media.controlNumber}.`}</p>
            <p>{`Classification: ${media.classification}.`}</p>
            <p>{`Media type: ${media.mediaType}.`}</p>
            <p>{`Lifecycle state: ${media.lifecycleState}.`}</p>
        </Panel>
    );

    const panelMediaActions = (
        <Panel id="media_profile_action_panel">
            <div className="actionpanel">
                <button
                    onClick={() => {
                        
                    }}
                >
                    Edit
                </button>
                <button
                    onClick={() => {
                        
                    }}
                >
                    Dispose
                </button>
                <button
                    onClick={() => {
                        
                    }}
                >
                    Release
                </button>
                <button
                    onClick={() => {
                        
                    }}
                >
                    Upload Document
                </button>
            </div>
        </Panel>
    );

    return (
        <ThreeComponentPage
            leftComponent={panelMediaActions}
            centerComponent={panelMediaInfo}
            rightComponent={null}
            dialogs={null}
        />
    );
}

export default MediaProfile;