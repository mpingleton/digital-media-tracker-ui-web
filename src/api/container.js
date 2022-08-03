const getContainersInMe = async (apiContext) => {
    const res = await fetch(apiContext.apiAddr + '/api/container/in/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'applications/json',
        },
    }).then((data) => data.json());

    return res;
};

module.exports = {
    getContainersInMe,
};