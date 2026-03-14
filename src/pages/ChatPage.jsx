import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../api/Firebase";
import RoomSelect from "../components/RoomSelect";
import { collection, onSnapshot } from "firebase/firestore";

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
                    console.log(roomsData);
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

    return <>
        <ul className="room-list">
            {rooms.map((room) => (
                // <div key={room.id}>{room.id}</div>
                <RoomSelect key={room.id} id={room.id} data={room.data} />
            ))}
        </ul>
        <div className="chat-container">

        </div>
    </>;
}