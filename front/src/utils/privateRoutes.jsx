import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = () => {
    let { user } = useContext(AuthContext);
    console.log(Boolean(user));
    return !user ? <Navigate to="/login" /> : <Profile />;
};
