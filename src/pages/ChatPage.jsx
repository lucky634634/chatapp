// import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../api/Firebase";
import RoomSelect from "../components/RoomSelect";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export default function ChatPage() {
    const uid = useParams();
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        let unsubscribeSnapshot = () => { };
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
                const roomsRef = collection(db, "rooms");

                unsubscribeSnapshot = onSnapshot(roomsRef, (snapshot) => {
                    const roomsData = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }));
                    setRooms(roomsData);
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
        <span>{uid.uid}</span>
        <div>
            {rooms.map((room) => (
                <div key={room.id}>{room.id}</div>
            ))}
        </div>
    </>;
}