import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API, API_KEY } from "../utils/constants";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      getSearchDataFromYTApi(searchText);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchDataFromYTApi = async (searchText) => {
    console.log("Searching with the text", searchText);
    const response = await fetch(
      YOUTUBE_SEARCH_API + API_KEY + "&q=" + searchText
    );
    const data = await response.json();
    const { items } = data;
    setSearchResult(items);
  };

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between items-center shadow-lg">
      <div className="m-2 p-2">
        <div className="flex">
          <img
            alt="hamburger icon"
            className="h-9 p-2 cursor-pointer"
            onClick={() => {
              toggleSidebar();
            }}
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
          className="w-96 h-auto border border-black rounded-l-full px-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
        />
        <button className="border border-black px-2 rounded-r-full">
          Search
        </button>
        {isFocused && (
          <div className="fixed p-4 bg-white">
            {searchResult.map((item) => {
              return (
                <li className="bg-gray-50 py-1 w-96 shadow-md rounded-md">
                  {item.snippet.title}
                </li>
              );
            })}
          </div>
        )}
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
