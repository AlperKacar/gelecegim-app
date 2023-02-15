import React from "react";
import searchCss from "./ComponentCss/SearchCss";
import { IoSearchSharp } from "react-icons/io5";

function Ara() {
  return (
    <searchCss.Searchdiv>
      <searchCss.Search
        id="searchText"
        placeholder=" Kelime, ilan no veya kurum adı ile ara"
      />

      <searchCss.Searchicon>
        <IoSearchSharp />
      </searchCss.Searchicon>
    </searchCss.Searchdiv>
  );
}
export default Ara;
