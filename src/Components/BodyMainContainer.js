import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleIlan from "./SingleIlan";
import { Container, Vitrin } from "./ComponentCss/BodyMainContainerCss";
import { Link, useParams } from "react-router-dom";

const BodyMainContainer = React.memo(() => {
  const {kategori,alt_kategori} = useParams();
  const [ilans, setIlans] = useState([]);
  
  let url="http://localhost:3001/home/"
  const fetchUsers = async () => {
    
    if (kategori) {
      const kategori_gonder=kategori.charAt(0).toUpperCase() + kategori.slice(1);
      url += `${kategori_gonder}/`;
    if(alt_kategori){
      const encodedAltKategori = encodeURIComponent(alt_kategori);
      const formattedAltKategori = encodedAltKategori.replace(/\s+/g, "-");
      const altKategori_gonder=formattedAltKategori.charAt(0).toUpperCase()+formattedAltKategori.slice(1);
      url +=`${altKategori_gonder}/`
    }
    }

    url += "ilan";
    const response = await axios.get(url);
    setIlans(response.data.Ilans);
  };

  useEffect(() => {
    fetchUsers();
  }, [kategori,alt_kategori]);

  const maxIlans = 50; // Kısıtlamak istediğiniz ilan sayısı
  const limitedIlans = ilans.slice(0, maxIlans);

  return (
    <>
      <div>
        <Vitrin>
          <small>Anasayfa Vitrini</small>
          <Link className="link">Tüm İlanları göster</Link>
        </Vitrin>
        <Container>
          {limitedIlans.map((ilan, index) => (
            <SingleIlan ilan={ilan} key={index} />
          ))}
        </Container>
      </div>
    </>
  );
});

export default BodyMainContainer;
