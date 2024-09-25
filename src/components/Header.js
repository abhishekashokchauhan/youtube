import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg">
      <div className="m-2 p-2">
        <div className="flex">
          <img
            alt="hamburger icon"
            className="h-9 p-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          />
          <img
            alt="youtube-logo"
            className="h-10 p-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </div>
      </div>

      <div className="m-2 p-2">
        <input
          type="text"
          className="w-96 h-auto border border-black rounded-l-full "
        />
        <button className="border border-black px-2 rounded-r-full">
          Search
        </button>
      </div>

      <div className="m-2 p-2">
        <img
          className="h-9 p-2"
          alt="user-logo "
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
      </div>
    </div>
  );
};

export default Header;
