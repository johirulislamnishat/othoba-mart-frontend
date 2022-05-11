import React, { useState, useEffect } from "react";
import { Modal, message } from "antd";
import axios from "axios";

import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../../../../../apiconstants";
import useProvider from "../../../../../hooks/useProvider";

const TicketModal = ({
  chats,
  setChats,
  handleModal,
  ticketId,
  visible,
  onOk,
  onCancel,
}) => {
  // console.log("modal", modalVisible);
  // console.log("tickets", tickets);
  const [render, setRender] = useState(false);
  const {
    state: {
      user: { user_name, accessToken },
    },
  } = useProvider();
  // console.log(user);

  // handleModal = () => {

  //   useEffect(() => {
  //   axios
  //     .get(`${API_BASE_URL}/support/${ticketId}`, {
  //       headers: {
  //         token: `Bearer ${accessToken}`,
  //       },
  //     })
  //     .then((res) => {
  //       setChats(res.data.result.chat);
  //       setRender(false);
  //     })
  //     .catch((e) => console.log(e));
  //   }, [ticketId, render]);
  // };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log("message", data);
    const ticketMessage = {
      user_name: user_name,
      message: data.message,
    };
    // console.log("ticketMessage", ticketMessage);

    axios
      .put(`${API_BASE_URL}/support/${ticketId}`, ticketMessage, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        message.success(res.data.message);
        setRender(true);
        reset();
      })
      .catch(() => message.error("Failed to submit"));
  };

  return (
    <Modal
      title="Othoba Mart"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <div className="chat">
        <div className="messanger ">
          {chats?.map((chat) => (
            <div key={chat._id} className="messanger-chat p-2 ">
              <div className="msg left-msg">
                <div
                  className="msg-img"
                  // style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
                ></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">{chat.user_name}</div>
                    {/* <div className="msg-info-time">12:45</div> */}
                  </div>

                  <div className="msg-text">{chat.message}</div>
                </div>
              </div>

              {/* <div className="msg right-msg">
                <div
                  className="msg-img"
                  // style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                ></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Sajad</div>
                    <div className="msg-info-time">12:46</div>
                  </div>

                  <div className="msg-text">
                    You can change your name in JS section!
                  </div>
                </div>
              </div> */}
            </div>
          ))}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="messanger-inputarea"
          >
            <input
              {...register("message", { required: true })}
              type="text"
              className="messanger-input"
              placeholder="Enter your message..."
            />
            <button type="submit" className="messanger-send-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default TicketModal;
