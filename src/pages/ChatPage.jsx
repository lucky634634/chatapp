import { useEffect, useState } from "react";

export default function ChatPage({ uid }) {
    const [groups, setGroups] = useState(null);

    useEffect(() => { }, [uid]);

    if (groups == null) {
        return <div>Loading...</div>;
    }


    return <></>;
}