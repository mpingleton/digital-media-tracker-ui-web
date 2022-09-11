import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Users from "../pages/Users";
import UsersProfile from "../pages/UsersProfile";
import Media from '../pages/Media';
import MediaProfile from '../pages/MediaProfile';
import Containers from "../pages/Containers";

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<MainLayout element={<Profile />} />} />
                <Route path="/containers" element={<MainLayout element={<Containers />} />} />
                <Route path="/users/id/:userId" element={<MainLayout element={<UsersProfile />} />} />
                <Route path="/users" element={<MainLayout element={<Users />} />} />
                <Route path="/media/id/:mediaId" element={<MainLayout element={<MediaProfile />} />} />
                <Route path="/media" element={<MainLayout element={<Media />} />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;