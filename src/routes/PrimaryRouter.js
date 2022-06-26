import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

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
                    <Route path="/media" element={<MainLayout />} />
                    <Route path="/" element={<h1>Home</h1>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default PrimaryRouter;