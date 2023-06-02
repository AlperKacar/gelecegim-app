import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleIlan from "./SingleIlan";
const Body = React.memo(() => {
  const [ilans, setIlans] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:3001/home/ilan`);
    setIlans(response.data.Ilans);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <ul>
        {ilans.map((ilan, index) => (
          <SingleIlan ilan={ilan} key={index} />
        ))}
      </ul>
    </div>
  );
});
export default Body;
