import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="h-5 p-5 flex flex-col w-full">
      <div className="flex w-full">
        <div>
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChatContainer />
        </div>
      </div>

      <div className="m-2 p-2">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
