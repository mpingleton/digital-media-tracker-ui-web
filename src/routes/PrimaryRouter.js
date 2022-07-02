import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from '../pages/Landing';
import Login from '../pages/Login';

class PrimaryRouter extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default PrimaryRouter;