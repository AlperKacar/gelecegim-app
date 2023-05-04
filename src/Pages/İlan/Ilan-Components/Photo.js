import React from "react";
import { Link } from "react-router-dom";
import { PhotoDiv } from "../Ilan-ComponentCss/PhotoCss";

import { BiSearchAlt2, BiPlayCircle } from "react-icons/bi";

function Photo() {
  return (
    <PhotoDiv>
      <div className="frame-main" />
      <ul className="buyuk-video-buton">
        <li>
          <Link className="buyukFotoLink" to="">
            <BiSearchAlt2 className="search-icon" />
            Büyük Fotoğraf
          </Link>
        </li>
        <li>
          <Link className="videoLink" to="">
            <BiPlayCircle className="play-icon" />
            Video
          </Link>
        </li>
      </ul>
      <div className="side-main">
        <div className="frame-side"></div>
        <div className="frame-side"></div>
        <div className="frame-side"></div>
      </div>
    </PhotoDiv>
  );
}

export default Photo;
