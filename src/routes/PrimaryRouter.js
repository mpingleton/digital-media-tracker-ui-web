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
                    <Route path="/login" element={<Login apiContext={this.props.apiContext} />} />
                    <Route path="/" element={<Landing apiContext={this.props.apiContext} />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default PrimaryRouter;