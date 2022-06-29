
class ApiContext {
    constructor() {
        this.accessToken = null;
        this.userObject = null;
    }

    login(username, passphrase) {
        try {
            fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    passphrase: passphrase,
                }),
            })
                .then(response => response.json())
                .then((data) => {
                    this.accessToken = data.accessToken;
                });
        }
        catch (err) {
            console.log(err);
        }
    }

    logout() {
        try {
            fetch('http://localhost:3001/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.accessToken}`
                },
            })
                .then(response => response.json())
                .then((data) => {
                    this.accessToken = null;
                    this.userObject = null;
                });
        }
        catch (err) {
            console.log(err);
        }
    }

    self() {
        try {
            fetch('http://localhost:3001/api/user/self', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.accessToken}`
                },
            })
                .then(response => response.json())
                .then((data) => {
                    this.userObject = data;
                });
        }
        catch (err) {
            console.log(err);
        }
    }
}

export default ApiContext;