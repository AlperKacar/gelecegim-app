import { useState, useEffect } from "react";
import { Searchdiv } from "./ComponentCss/SearchCss";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Search() {
  const Searchbar = () => {
    const ackapat = document.getElementById("searchText").style;
    ackapat.display = ackapat.display === "none" ? "inline" : "none";
  };
  const [aramaMetni, setaramaMetni] = useState("");
  const handleChange = (event) => {
    setaramaMetni(event.target.value);
  };
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  useEffect(() => {
    if (show) {
      setShow2(false);
    } else if (!show) {
      setShow2(false);
    }
  }, [show]);

  useEffect(() => {
    if (show1) {
      setShow2(true);
    } else if (!show1) {
      setShow2(true);
    }
  }, [show1]);

  return (
    <Searchdiv>
      <div className="Searchbar-div">
      <input
        className="Search"
        spellCheck="false"
        id="searchText"
        placeholder="Kelime, ilan no veya kurum adı ile ara"
        onChange={handleChange}
        value={aramaMetni}
        onClick={() => setShow(!show)}
      />
      <div className="Search-icon">
        <IoSearchSharp className="icon-boyut" />
      </div>

     
      {show2 && (
        <Link  className="Search-cancel-iconx">
          <RxCross2 />
        </Link>
      )}

      <div onClick={() => setShow2(!show2)}>
        {!show2 && (
          <Link
            onClick={() => setaramaMetni("")}
            className="Search-cancel-icon"
          >
            <RxCross2 />
          </Link>
        )}
      </div>
      </div>

      <div className="Search-icon-mobile">
        <IoSearchSharp onClick={Searchbar} className="icon-boyut" />
      </div>
      <span className="Arama">Arama</span>

      
      
    </Searchdiv>
  );
}
export default Search;
