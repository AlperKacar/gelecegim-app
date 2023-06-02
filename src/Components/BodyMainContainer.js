import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleIlan from "./SingleIlan";
import { Container, Vitrin } from "./ComponentCss/BodyMainContainerCss";
import { Link } from "react-router-dom";
const BodyMainContainer = React.memo(() => {
  const [ilans, setIlans] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:3001/home/ilan`);
    setIlans(response.data.Ilans);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <Vitrin>
          <small>Anasayfa Vitrini</small>
          <Link className="link">Tüm İlanları göster</Link>
        </Vitrin>
        <Container>
          {ilans.map((ilan, index) => (
            <SingleIlan ilan={ilan} key={index} />
          ))}
        </Container>
      </div>
    </>
  );
});
export default BodyMainContainer;
