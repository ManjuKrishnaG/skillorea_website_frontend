import { useState } from "react";
// import { Modal } from "react-bootstrap";
import "../assets/styles/chatbot.css";
import botIcon from "../assets/images/newchaticon.png";
import userAvatar from "../assets/images/chatbotimg.png"; // Update the path as needed

const Chatbot = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={handleToggle}>
        <img src={botIcon} alt="Chatbot" />
      </div>

      {/* Chatbot Modal */}
      {show && (
        <div className="chatbot-popup">
          <div className="chatbot-container">
            <div className="chatbot-header">Chatbot</div>
            <div className="chatbot-body">
              <div className="message bot">
                <p>
                  <strong>Hi Shawna Weber,</strong>
                  <br />
                  How may I help you?
                </p>
                <span className="timestamp">Just now</span>
              </div>
              <div className="message user">
                <img src={userAvatar} className="user-avatar" alt="User" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Donec eu enim sagittis
                  nibh purus et.
                </p>
                <span className="timestamp">Just now</span>
              </div>
            </div>
            <div className="chatbot-footer">
              <input
                type="text"
                placeholder="Type your message..."
                className="form-control"
              />
              <button className="send-btn">
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
