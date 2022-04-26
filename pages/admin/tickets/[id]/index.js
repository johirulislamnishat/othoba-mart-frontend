import React from "react";

const Ticket = () => {
  return (
    <div className="chat">
      <div className="messanger">
        <div className="messanger-chat">
          <div className="msg left-msg">
            <div
              className="msg-img"
              style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">BOT</div>
                <div className="msg-info-time">12:45</div>
              </div>

              <div className="msg-text">
                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div
              className="msg-img"
              style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
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
          </div>
        </div>

        <form className="messanger-inputarea">
          <input
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
  );
};

export default Ticket;
