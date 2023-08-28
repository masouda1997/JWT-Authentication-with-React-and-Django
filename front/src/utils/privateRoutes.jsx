import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Profile } from "../pages/Profile";

export const PrivateRoutes = () => {
	const isAuthenticated = false;
	return !isAuthenticated ? <Navigate to="/login" /> : <Profile />;
};
