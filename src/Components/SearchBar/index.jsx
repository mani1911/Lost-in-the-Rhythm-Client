import React, { useState } from "react";
import styles from "./styles.module.css";
const Searchbar = ({ setSearchKeyword }) => {
  const [searchWord, setSearch] = useState("");
  const searchInputChangeHandler = (e) => {
    setSearch(e.target.value);
    setSearchKeyword(e.target.value);
  };
  return (
    <div className="ml-auto">
      <div class="max-w-md mx-auto">
        <div class="relative flex items-center w-full h-10 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            value={searchWord}
            onChange={(e) => {
              searchInputChangeHandler(e);
            }}
            placeholder="Search Dance Videos..."
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
