const getFacilitiesInMe = async (apiContext) => {
    const res = await fetch(apiContext.apiAddr + '/api/facility/in/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'applications/json',
        },
    }).then((data) => data.json());

    return res;
};

module.exports = {
    getFacilitiesInMe,
};