import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleIlan from "./SingleIlan";

const SingleUser = ({ ilan }) => {
  const [state, setState] = useState([]);

  return (
    <div>
      <div>
        <h3>
          {ilan.baslik} {ilan.alt_kategori}
        </h3>
      </div>
    </div>
  );
};

export default SingleUser;
