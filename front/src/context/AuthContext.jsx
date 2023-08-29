import { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // ############################ hooks ############################

    const [user, setUser] = useState(() =>
        localStorage.getItem("authToken")
            ? jwtDecode(localStorage.getItem("authToken"))
            : null
    );

    const [authToken, setAuthToken] = useState(() =>
        localStorage.getItem("authToken")
            ? JSON.parse(localStorage.getItem("authToken"))
            : null
    );

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // ############################ functions ############################

    let loginUser = async (e) => {
        e.preventDefault();
        console.log("🔴", e.target.username.value, e.target.password.value);
        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
            }),
        });
        let data = await response.json();
        console.log("🟢", data);
        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwtDecode(data["access"]));
            console.log(user.username);
            localStorage.setItem("authToken", JSON.stringify(data));
            navigate("/profile");
        } else {
            alert("something went wrong!!!");
        }
    };

    let logoutUser = () => {
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    const updateToken = async () => {
        console.log("🔁 update token called ");
        const response = await fetch(
            "http://127.0.0.1:8000/api/token/refresh/",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ refresh: authToken.refresh }),
            }
        );
        const data = await response.json();
        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("authToken", JSON.stringify(data));
        } else {
            logoutUser();
        }
    };

    // ############################ jsx ############################

    let contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
    };

    useEffect(() => {
        let fourminutes = 1000 * 60 * 4;
        let interval = setInterval(() => {
            if (authToken) {
                updateToken();
            }
        }, fourminutes);
        return () => clearInterval(interval);
    }, [authToken, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};
