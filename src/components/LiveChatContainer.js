import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { makeSentence } from "../utils/sentenceHelper";

const LiveChatContainer = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    let i = setInterval(() => {
      // Call an API here and get the data
      // We would simulate that adding the data from the our function.

      dispatch(
        addMessages({
          name: generateRandomName(),
          text: makeSentence(),
        })
      );
    }, 5000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[320px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((message, index) => (
            <ChatMessage
              id={index}
              name={message.name}
              message={message.text}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessages({
              name: "Abhishek Chauhan",
              text: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChatContainer;
