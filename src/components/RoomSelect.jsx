import "./RoomSelect.css";

export default function RoomSelect({ id, data, uid, active }) {
    const convertTime = (timeString) => {
        const time = new Date(timeString);
        const duration = new Date() - time;
        if (duration < 60000) {
            return `${Math.floor(duration / 1000)} s`;
        } else if (duration < 3600000) {
            return `${Math.floor(duration / 60000)} m`;
        } else if (duration < 86400000) {
            return `${Math.floor(duration / 3600000)} h`;
        } else if (duration < 2592000000) {
            return `${Math.floor(duration / 86400000)} d`;
        } else if (duration < 31536000000) {
            return `${Math.floor(duration / 2592000000)} m`;
        } else {
            return `${Math.floor(duration / 31536000000)} y`;
        }
    }

    return <li className={`room-select-container {active ? 'active' : ''}`} >
        <img className="user-avatar" />
        <div className="message">
            <div className="user-id">{id}</div>
            <div className="message-container">
                <div className="message-content">{data.lastMessage.text}</div>
                <div className="message-timestamp">{convertTime(data.lastMessage.time)}</div>
            </div>
        </div>
    </li >;
}