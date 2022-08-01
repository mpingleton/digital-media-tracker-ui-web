import Cookies from 'universal-cookie';

export function getApiContext() {
    const cookies = new Cookies();
    const accessToken = cookies.get('accessToken');

    return {
        apiAddr: 'http://localhost:3001',
        accessToken: accessToken,
    };
}

export function setAccessToken(accessToken) {
    const cookies = new Cookies();
    cookies.set('accessToken', accessToken, { path: '/' });
}

export function deleteAccessToken() {
    const cookies = new Cookies();
    cookies.remove('accessToken');
}

export * from './auth.js';
export * from './media.js';
export * from './facility.js';