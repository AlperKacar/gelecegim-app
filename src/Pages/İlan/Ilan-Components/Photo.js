import React from "react";
import { Link } from "react-router-dom";
import { PhotoDiv } from "../Ilan-ComponentCss/PhotoCss";

import { BiSearchAlt2, BiPlayCircle } from "react-icons/bi";

function Photo() {
  return (
    <PhotoDiv>
      <div className="container">
      <div className="frame-main"/>
      <ul className="buyuk-video-buton">
        <li>
          <BiSearchAlt2 className="search-icon" />
          <Link className="buyukFotoLink" to="">
            
            Büyük Fotoğraf
          </Link>
        </li>
        <li> 
          <BiPlayCircle className="play-icon" />
          <Link className="videoLink" to="">
           
            Video
          </Link>
        </li>
      </ul>
      <div className="side-container">
        <div className="frame-side" tabIndex={1}></div>
        <div className="frame-side" tabIndex={2}></div>
        <div className="frame-side" tabIndex={3}></div>
      </div>
      </div>
    </PhotoDiv>
  );
}

export default Photo;
