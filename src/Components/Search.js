import React from "react";
import {Searchdiv} from "./ComponentCss/SearchCss";
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
    <Searchdiv>
      <input className="Search"
        id="searchText"
        placeholder="Kelime, ilan no veya kurum adı ile ara"
      />
      

      <div className="Search-icon">
        <IoSearchSharp className="icon-boyut" />
      </div>
    </Searchdiv>
  );
}
export default Search;
