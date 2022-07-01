
const self = async (context) => {
    try {
        const data = await fetch('http://localhost:3001/api/user/self', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`
            },
        }).then(response => response.json());

        context.setUserObject(data);
    }
    catch (err) {
        console.log(err);
    }
};

export default self;