import React from "react";
import "./search.scss";
export const Search = () => {
  return (
    <div class="search-box">
      <button class="btn-search">
        <img
          src={Search}
          alt="icon"
          style={{
            marginRight: "30px",

            paddingRight: "20px",
          }}
          height="28px"
        />
      </button>
      <input type="text" class="input-search" placeholder="Type to Search..." />
    </div>
  );
};
