import React from "react";
import { IoIosSearch } from "react-icons/io";

const MobileSearch = () => {
  return (
    <div className="offcanvasMobileSearchArea">
      <form action="#">
        <input type="search" placeholder="Search ..." />
        <button type="submit">
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};

export default MobileSearch;
