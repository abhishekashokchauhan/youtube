import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-9 p-2"
        alt="user-logo "
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <div className="font-bold p-3">{name}</div>
      <div className="mx-3">{message}</div>
    </div>
  );
};

export default ChatMessage;
