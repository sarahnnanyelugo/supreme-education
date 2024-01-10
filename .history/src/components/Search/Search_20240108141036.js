import React from "react";
import "./search.scss";
import SearchIcon from "../../assets/images/search.png";

export const Search = () => {
  return (
    <div className="search-div">
      {" "}
      <div class="search-box">
        {/* <button class="btn-search"> */}
        <img src={SearchIcon} alt="icon" height="28px" />
        {/* </button> */}
        <input
          type="text"
          class="input-search"
          placeholder="Type to Search..."
        />
      </div>
    </div>
  );
};
