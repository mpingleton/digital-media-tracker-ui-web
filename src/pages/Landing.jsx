import React, {useEffect} from 'react';

function Landing() {
    useEffect(() => {
        document.title="Digital Media Tracker";
    }, []);

    return (
        <div>
            <h1>Digital Media Tracker</h1>
            <h3>Digital Media Tracker is authorized to store and process Unclassified information only!</h3>
            <a href="/login">Login</a>
        </div>
    );
}

export default Landing;