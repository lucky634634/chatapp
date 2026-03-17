import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../api/Firebase";
import RoomSelect from "../components/RoomSelect";
import { collection, onSnapshot } from "firebase/firestore";
import "./ChatPage.css"
import { IoSettingsSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function ChatPage() {
    const uid = useParams();
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        let unsubscribeSnapshot = () => { };
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                const roomsRef = collection(db, "rooms");

                unsubscribeSnapshot = onSnapshot(roomsRef, (snapshot) => {
                    const roomsData = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }));
                    setRooms(roomsData);
                    // console.log(roomsData);
                }, (error) => {
                    console.error("Snapshot error:", error);
                });
            } else {
                navigate("/signin");
            }
        });
        return () => {
            unsubscribeAuth();
            unsubscribeSnapshot();
        };
    }, [navigate]);

    return <div className="chat-page">
        <aside className="sidebar">
            <div className="top">
                <input type="text" placeholder="Search" className="search-bar" />
            </div>
            <ul className="room-list">
                {rooms.map((room) => (
                    <RoomSelect key={room.id} id={room.id} data={room.data} />
                ))}
            </ul>
            <div className="bottom">
            </div>
        </aside>
        <div className="chat-container">
            <div className="message-display"></div>
            <form className="message-input">
                <input type="text" placeholder="Type a message..." className="text-input" />
                <button className="send-button"><IoIosSend /></button>
            </form>
        </div>
    </div>;
}