
const login = async (context, username, passphrase) => {
    try {
        const data = await fetch('http://localhost:3001/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                passphrase: passphrase,
            }),
        }).then(response => response.json());

        context.setAccessToken(data.accessToken);
    }
    catch (err) {
        console.log(err);
    }
};

export default login;