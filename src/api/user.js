const getUsers = async (apiContext) => {
    const res = await fetch(apiContext.apiAddr + '/api/user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
    }).then((data) => data.json());

    return res;
};

const getSelf = async (apiContext) => {
    const res = await fetch(apiContext.apiAddr + '/api/user/self', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
    }).then((data) => data.json());

    return res;
};

module.exports = {
    getUsers,
    getSelf,
};