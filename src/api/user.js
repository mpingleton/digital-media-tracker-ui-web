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

const getUserById = async (apiContext, userId) => {
    const res = await fetch(apiContext.apiAddr + '/api/user/id/' + userId, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
    }).then((data) => data.json());

    return res;
};

const createUser = async (apiContext, userData) => {
    const res = await fetch(apiContext.apiAddr + '/api/user', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    return res;
};

module.exports = {
    getUsers,
    getSelf,
    getUserById,
    createUser,
};