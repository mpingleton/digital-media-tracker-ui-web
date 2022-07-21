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

module.exports = {
    getMediaById,
};