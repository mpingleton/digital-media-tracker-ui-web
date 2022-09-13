import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Panel from '../components/Panel';
import EditMediaDialog from '../dialogs/EditMediaDialog';
import ReleaseMediaDialog from '../dialogs/ReleaseMediaDialog';
import DisposeMediaDialog from '../dialogs/DisposeMediaDialog';
import UploadMediaDocumentDialog from '../dialogs/UploadMediaDocumentDialog';
import ThreeComponentPage from '../layouts/ThreeComponentPage';

import {
    getApiContext,
    getMediaById,
} from '../api';

function MediaProfile() {
    const { mediaId } = useParams();
    const [isEditMediaDialogOpen, setEditMediaDialogOpen] = useState(false);
    const [isDisposeMediaDialogOpen, setDisposeMediaDialogOpen] = useState(false);
    const [isReleaseMediaDialogOpen, setReleaseMediaDialogOpen] = useState(false);
    const [isUploadMediaDocumentDialogOpen, setUploadMediaDocumentDialogOpen] = useState(false);
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
                        setEditMediaDialogOpen(!isEditMediaDialogOpen);
                    }}
                >
                    Edit
                </button>
                <button
                    onClick={() => {
                        setDisposeMediaDialogOpen(!isDisposeMediaDialogOpen);
                    }}
                >
                    Dispose
                </button>
                <button
                    onClick={() => {
                        setReleaseMediaDialogOpen(!isReleaseMediaDialogOpen);
                    }}
                >
                    Release
                </button>
                <button
                    onClick={() => {
                        setUploadMediaDocumentDialogOpen(!isUploadMediaDocumentDialogOpen);
                    }}
                >
                    Upload Document
                </button>
            </div>
        </Panel>
    );

    const dialogEditMedia = (
        <EditMediaDialog
            isOpen={isEditMediaDialogOpen}
            onSuccess={() => {
                window.location.reload();
                setEditMediaDialogOpen(false);
            }}
            onClose={() => {
                setEditMediaDialogOpen(false);
            }}
        />
    );

    const dialogDisposeMedia = (
        <DisposeMediaDialog
            isOpen={isDisposeMediaDialogOpen}
            onSuccess={() => {
                window.location.reload();
                setDisposeMediaDialogOpen(false);
            }}
            onClose={() => {
                setDisposeMediaDialogOpen(false);
            }}
        />
    );
    
    const dialogReleaseMedia = (
        <ReleaseMediaDialog
            isOpen={isReleaseMediaDialogOpen}
            onSuccess={() => {
                window.location.reload();
                setReleaseMediaDialogOpen(false);
            }}
            onClose={() => {
                setReleaseMediaDialogOpen(false);
            }}
        />
    );

    const dialogUploadMediaDocument = (
        <UploadMediaDocumentDialog
            isOpen={isUploadMediaDocumentDialogOpen}
            onSuccess={() => {
                window.location.reload();
                setUploadMediaDocumentDialogOpen(false);
            }}
            onClose={() => {
                setUploadMediaDocumentDialogOpen(false);
            }}
        />
    );

    return (
        <ThreeComponentPage
            leftComponent={panelMediaActions}
            centerComponent={panelMediaInfo}
            rightComponent={null}
            dialogs={[
                dialogEditMedia,
                dialogDisposeMedia,
                dialogReleaseMedia,
                dialogUploadMediaDocument,
            ]}
        />
    );
}

export default MediaProfile;