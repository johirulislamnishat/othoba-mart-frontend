import ChatStyle from "../../styles/Messenger.module.css";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import { useContext, useEffect, useRef, useState } from "react";
import useProvider from "../../hooks/useProvider";
import axios from "axios";
import { io } from "socket.io-client";
import AdminLayout from "../../components/layouts/adminLayout";
import { API_BASE_URL } from "../../apiconstants";

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();

    const {
        state: { user },
    } = useProvider();

    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io("https://othobamart-chat-api.herokuapp.com/");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        // socket.current.on("getUsers", (users) => {
        //     setOnlineUsers(
        //         user.followings.filter((f) => users.some((u) => u.userId === f))
        //     );
        // });
    }, [user]);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    // get all active conversation
    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get(
                    API_BASE_URL + "/conversation/" + user._id
                );
                setConversations(res?.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    // fetch all messages
    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(
                    API_BASE_URL + "/message/" + currentChat?._id
                );
                // console.log(res);
                setMessages(res?.data?.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    // handle message send
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );

        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await axios.post(API_BASE_URL + "/message", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    // chat auto scroll down
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            <AdminLayout title="Dashboard" pageTitle="Chatbox">
                <div className={ChatStyle.messenger}>
                    <div className={ChatStyle.chatMenu}>
                        <div className={ChatStyle.chatMenuWrapper}>
                            {/* <input
                            placeholder="Search for friends"
                            className="chatMenuInput"
                        /> */}
                            {conversations.map((c, i) => (
                                <div key={i} onClick={() => setCurrentChat(c)}>
                                    <Conversation
                                        conversation={c}
                                        currentUser={user}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={ChatStyle.chatBox}>
                        <div className={ChatStyle.chatBoxWrapper}>
                            {currentChat ? (
                                <>
                                    <div className={ChatStyle.chatBoxTop}>
                                        {messages.map((m, i) => (
                                            <div key={i} ref={scrollRef}>
                                                <Message
                                                    message={m}
                                                    own={m.sender === user._id}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className={ChatStyle.chatBoxBottom}>
                                        <textarea
                                            className={
                                                ChatStyle.chatMessageInput
                                            }
                                            placeholder="write something..."
                                            onChange={(e) =>
                                                setNewMessage(e.target.value)
                                            }
                                            value={newMessage}
                                        ></textarea>
                                        <button
                                            className={
                                                ChatStyle.chatSubmitButton
                                            }
                                            onClick={handleSubmit}
                                        >
                                            Send
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <span className={ChatStyle.noConversationText}>
                                    Open a conversation to start a chat.
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
