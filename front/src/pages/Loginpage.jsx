import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Header } from "../components/Header";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
    let { loginUser } = useContext(AuthContext);
    return (
        <>
            <Header />
            <div style={{ width: "70%", margin: "10% auto" }}>
                <h1>login page </h1>
                <form onSubmit={loginUser}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter username"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
