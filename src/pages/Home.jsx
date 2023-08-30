import React from "react";
import { Header } from "../components/Header";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Home = () => {
    const [notes, setNotes] = useState([]);
    let { authToken } = useContext(AuthContext);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/notes/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(authToken.access),
            },
        });
        const data = await response.json();
        setNotes(data);
    };

    return (
        <>
            <Header />
            <div>Home page </div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>{note.body}</li>
                ))}
            </ul>
        </>
    );
};
