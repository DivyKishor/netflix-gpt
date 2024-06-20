import React from "react";
import { CiSearch } from "react-icons/ci";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black flex rounded-lg">
        <input
          type="text"
          className="m-2 p-2 text-center w-full bg-gray-700 text-white rounded-lg"
          placeholder="What would you like to watch today?"
        />
        <button className="m-2 p-2 text-white text-3xl">
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
