// import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../api/Firebase";

export default function ChatPage() {
    const uid = useParams();
    const navigate = useNavigate();
    // const [chats, setChats] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
            } else {
                navigate("/signin");
            }
        });
        return unsubscribe;
    }, [navigate]);

    return <>
        <div>
            <span>{uid.uid}</span>
        </div>
    </>;
}