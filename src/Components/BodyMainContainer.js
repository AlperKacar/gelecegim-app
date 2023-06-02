import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import SingleIlan from "./SingleIlan"; 
import { Container } from './ComponentCss/BodyMainContainerCss';
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
    <Container>




    <div>
      <ul>
        {ilans.map((ilan, index) => (
          <SingleIlan ilan={ilan} key={index} />
        ))}
      </ul>
    </div>
    </Container>
  )

});
export default BodyMainContainer