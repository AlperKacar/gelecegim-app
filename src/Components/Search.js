import React from "react";
import {Searchdiv} from "./ComponentCss/SearchCss";
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
<<<<<<< HEAD
    <searchCss.Searchdiv>

    </searchCss.Searchdiv>
=======
    <Searchdiv>
      <input className="Search"
        id="searchText"
        placeholder="Kelime, ilan no veya kurum adı ile ara"
      />
      

      <div className="Search-icon">
        <IoSearchSharp className="icon-boyut" />
      </div>
    </Searchdiv>
>>>>>>> 7418af7301762ea31d1375162631c9073150263b
  );
}
export default Search;
