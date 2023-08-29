import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { AuthContext } from "../context/AuthContext";

export const Header = () => {
    let { user, logoutUser } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div
                className="container-fluid"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                            Profile
                        </Link>
                    </li>
                </ul>
                <div>
                    {user ? (
                        <div className="nav-item">
                            <p className="nav-link" onClick={logoutUser}>
                                logout
                            </p>
                        </div>
                    ) : (
                        <div className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
