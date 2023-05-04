import { Select } from "antd";
import { memo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function IlcelerVd({ il, label, getir, ...props }) {
  const [state, setState] = useState([]);
  const [state1, setState1] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      if (il) {
        const response = await axios.get(
          ` http://localhost:3001/select/${getir}/${il}`
        );
        setState(response.data);
        setState1(response.data[0].name);
      }
    };
    fetchUsers();
  }, [il, getir]);

  return (
    <>
      <Select
        {...props}
        showSearch
        value={state1}
        onChange={setState1}
        optionFilterProp="children"
        options={state.map((item) => ({
          value: item.name,
        }))}
      />
      <small className="input-text">{label}</small>
    </>
  );
}

export default memo(IlcelerVd);
