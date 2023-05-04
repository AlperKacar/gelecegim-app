import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
const Body = React.memo(() => {
  const [state, setState] = useState([]);
/* 
  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:3001/iller/`);
    setState(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []); */

  return (
    <div>
      <ul>
       {/*  {state.map((state, index) => (
          <SingleUser state={state} key={index} /> 
        ))} */}
      </ul>
    </div>
  );
});
export default Body;
