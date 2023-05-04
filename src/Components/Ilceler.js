import { Select } from "antd";
import { memo, useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Ilceler({ il, label, getir, ...props }) {
  const [state, setState] = useState([]);
  const [state1, setState1] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, [il]);
  const fetchUsers = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:3001/select/${getir}/${il}`
    );
    setState(response.data[0].ilceler);
    setState1(response.data[0].ilceler[0]);
  });
  return (
    <>
      <Select
        {...props}
        showSearch
        value={state1}
        onChange={setState1}
        optionFilterProp="children"
        options={state.map((ilce) => ({
          value: ilce,
        }))}
      />
      <small className="input-text">{label}</small>
    </>
  );
}

export default memo(Ilceler);
