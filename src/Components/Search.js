import React from "react";
import {Searchdiv} from "./ComponentCss/SearchCss";
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  const Searchbar =() =>{
    const ackapat=document.getElementById("searchText").style;
    ackapat.display=(ackapat.display==="none")?"inline":"none";
  }
  return (
    <Searchdiv>
      <input className="Search"
        id="searchText"
        placeholder="Kelime, ilan no veya kurum adı ile ara"
      />
      <h1 className="Arama">Arama</h1>

      <div className="Search-icon">
        <IoSearchSharp  className="icon-boyut" />
      </div>

      <div className="Search-icon-mobile">
        <IoSearchSharp onClick={Searchbar} className="icon-boyut" />
      </div>
    </Searchdiv>
  );
}
export default Search;
