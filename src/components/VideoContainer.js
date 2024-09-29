import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/common";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  // Setting this in the state
  const [videosInfo, setVideosInfo] = useState([]);

  useEffect(() => {
    getAPIdataFromYT();
  }, []);

  if (videosInfo === null) {
    return <h1> Loading the data </h1>;
  }

  // Getting the data from the API
  const getAPIdataFromYT = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    setVideosInfo(data.items);
    console.log(data.items);
  };

  return (
    <div className="flex flex-wrap">
      {videosInfo.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
