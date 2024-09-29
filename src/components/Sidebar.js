import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="w-48 p-3">
      <ul className="py-2">
        <li>
          <Link to="/">Home</Link>
        </li>
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
