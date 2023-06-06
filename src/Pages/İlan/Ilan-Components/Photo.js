import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoDiv } from "../Ilan-ComponentCss/PhotoCss";
import { BiSearchAlt2, BiPlayCircle,BiChevronRight, BiChevronLeft } from "react-icons/bi";

function Photo(props) {
  const resimler = props.ilanDetay.images;
  const [updateURL, setUpdateURL] = useState(
    resimler[0].replace(
      "upload/",
      `upload/c_pad,g_center,h_396,q_90,w_528,x_0,y_0/`
    )
  );
  const [seciliResim, setSeciliResim] = useState(resimler[0]);
  useEffect(() => {
    const resimContainer = document.querySelector(".side-container");
    const geriButonu = document.getElementById("sayfa-geri");
    const ileriButonu = document.getElementById("sayfa-ileri");

    geriButonu.addEventListener("click", function () {
      resimContainer.scrollBy({
        top: 0,
        left: -523,
        behavior: "smooth",
      });
    });

    ileriButonu.addEventListener("click", function () {
      resimContainer.scrollBy({
        top: 0,
        left: 523,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    let url = seciliResim;
    const uploadPath = "upload/";
    const newUploadPath = "c_pad,g_center,h_396,q_90,w_528,x_0,y_0";

    setUpdateURL(url.replace(uploadPath, `${uploadPath}${newUploadPath}/`));
  }, [seciliResim]);

  /* console.log(seciliResim) */
  const handleResimSecimi = async (resim) => {
    setSeciliResim(resim);
  };
  return (
    <PhotoDiv>
      <div className="container">
        <div className="frame-main">
          <img className="main-img" src={updateURL} alt="Büyük Resim" />
        </div>
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
          {resimler.map((resim, index) => (
            <div className="frame-side" key={index} tabIndex={index}>
              <img
                className="side-img"
                key={index}
                src={resim}
                alt={`Küçük Resim ${index + 1}`}
                onClick={() => handleResimSecimi(resim)}
              />
            </div>
          ))}
        </div>
        <div className="buttons">
        <button id="sayfa-geri" className="sayfa-geri">
          <BiChevronLeft className="button-icons"/>
          </button>
          <button id="sayfa-ileri" className="sayfa-ileri">
          <BiChevronRight className="button-icons"/>
          </button>
          
        </div>
      </div>
    </PhotoDiv>
  );
}

export default Photo;
