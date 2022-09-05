const getMediaById = async (apiContext, mediaId) => {
    const res = await fetch(apiContext.apiAddr + '/api/media/id/' + mediaId, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
    }).then((data) => data.json());

    return res;
};

const getMediaInMe = async (apiContext) => {
    const res = await fetch(apiContext.apiAddr + '/api/media/in/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
    }).then((data) => data.json());

    return res;
};

const getMediaInContainer = async (apiContext, containerId) => {
    const res = await fetch(apiContext.apiAddr + '/api/media/in/container/' + containerId, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
    }).then((data) => data.json());

    return res;
};

const getMediaInFacility = async (apiContext, facilityId) => {
    const res = await fetch(apiContext.apiAddr + '/api/media/in/facility/' + facilityId, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
    }).then((data) => data.json());

    return res;
};

const createMedia = async (apiContext, mediaData) => {
    const res = await fetch(apiContext.apiAddr + '/api/media', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mediaData),
    });

    return res;
};

module.exports = {
    getMediaById,
    getMediaInMe,
    getMediaInContainer,
    getMediaInFacility,
    createMedia,
};