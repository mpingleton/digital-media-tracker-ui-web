import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

class PrimaryRouter extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/media" element={<h1>Media</h1>} />
                    <Route path="/" element={<h1>Home</h1>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default PrimaryRouter;