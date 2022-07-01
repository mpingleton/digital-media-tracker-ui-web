
const logout = async (context) => {
    try {
        const data = await fetch('http://localhost:3001/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${context.accessToken}`
            },
        }).then(response => response.json());

        context.clear();
    }
    catch (err) {
        console.log(err);
    }
};

export default logout;