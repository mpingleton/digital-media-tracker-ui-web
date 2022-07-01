
class ApiContext {
    constructor() {
        this.accessToken = null;
        this.userObject = null;
    }

    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }

    setUserObject(userObject) {
        this.userObject = userObject;
    }

    clear() {
        this.accessToken = null;
        this.userObject = null;
    }
}

export default ApiContext;