import MasgStyle from "../../styles/message.module.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
    const friend = MasgStyle.message;
    const Me = MasgStyle.own;
    return (
        <div className={own ? Me : friend}>
            <div className={MasgStyle.messageTop}>
                <img
                    className={MasgStyle.messageImg}
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <p className={MasgStyle.messageText}>{message.text}</p>
            </div>
            <div className={MasgStyle.messageBottom}>
                {format(message.createdAt)}
            </div>
        </div>
    );
}
