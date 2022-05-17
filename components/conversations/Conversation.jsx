import axios from "axios";
import { useEffect, useState } from "react";
import ConversationCss from "../../styles/Conversation.module.css";

export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null);
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const friendId = conversation?.members.find(
            (m) => m !== currentUser._id
        );

        const getUser = async () => {
            try {
                const res = await axios(
                    "http://localhost:5000/users?userId=" + friendId
                );
                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
        <div className={ConversationCss.conversation}>
            <img
                className={ConversationCss.conversationImg}
                src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
                alt=""
            />
            <span className={ConversationCss.conversationName}>
                {user?.username}
            </span>
        </div>
    );
}
