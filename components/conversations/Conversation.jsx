import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiconstants";
import ConversationCss from "../../styles/Conversation.module.css";

export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null);
    // console.log("user", user);

    useEffect(() => {
        const friendId = conversation?.members.find(
            (m) => m !== currentUser._id
        );
        const getUser = async () => {
            try {
                const res = await axios(
                    API_BASE_URL + `/user?userId=` + friendId
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
                {user?.user_name}
            </span>
        </div>
    );
}
