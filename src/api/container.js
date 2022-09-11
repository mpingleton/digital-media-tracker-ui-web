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

const createContainer = async (apiContext, containerData) => {
    const res = await fetch(apiContext.apiAddr + '/api/container', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(containerData),
    });

    return res;
};

module.exports = {
    getContainersInMe,
    createContainer,
};