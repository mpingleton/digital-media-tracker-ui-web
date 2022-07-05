import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Media from '../pages/Media';

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/media" element={<MainLayout element={<Media />} />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;