import React from "react";
import { Container } from "../IlanVerComponentCss/IlanKategoriCss";
import { Link } from "react-router-dom";
import { IoBasketballSharp } from "react-icons/io5";
import { BsPaletteFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";

function IlanKategori(props) {
  
  

 /*  useEffect(() => {}, []); */
  

  const  categoryControl = async(x) => {
    console.log("çalıştı.")
    /* setShow(false);
    setSecilen(x); */
    props.setShow(false)
    props.setSecilen(x)
  };
 
  return (
    
    <Container>
    
      <Link to="">
        <div className="Egitim" onClick={() => categoryControl("Egitim")}>
          <div className="Egitim-color-bar" />
          <div className="egitim-icon-div">
            <IoBookSharp className="egitim-icon" />
          </div>
          <span className="yazi">Eğitim</span>
        </div>
      </Link>


      <Link to="">
        <div className="Spor" onClick={() => categoryControl("Spor")}>
          <div className="Spor-color-bar" />
          <div className="spor-icon-div">
            <IoBasketballSharp className="spor-icon" />
          </div>
          <span className="yazi">Spor</span>
        </div>
      </Link>

      <Link to="">
        <div className="Sanat" onClick={() => categoryControl("Sanat")}>
          <div className="Sanat-color-bar" />
          <div className="sanat-icon-div">
            <BsPaletteFill className="sanat-icon" />
          </div>
          <span className="yazi">Sanat</span>
        </div>
      </Link>
     
    </Container>
  );
}

export default IlanKategori;
