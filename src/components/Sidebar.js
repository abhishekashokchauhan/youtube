import React from "react";

const Sidebar = () => {
  return (
    <div className="w-48 p-3">
      <ul className="py-2">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <ul className="py-2">
        <li className="font-bold py-1">Explore</li>
        <li>Trending</li>
        <li>Music</li>
        <li>Shopping</li>
      </ul>

      <ul className="py-2">
        <li className="font-bold py-1">You</li>
        <li>Channels</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
    </div>
  );
};

export default Sidebar;
