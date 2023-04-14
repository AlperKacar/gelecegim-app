import { Select } from "antd";
import { memo, useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function Ilceler({ label, ...props }) {
  const [state, setState] = useState([]);
  const id = useSelector((state) => state.activation);
  const fetchUsers = async () => {
    const response = await axios.get(
      `http://localhost:3001/select/${label}/${id}`
    );
    setState(response.data.ilceler);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <Select
        {...props}
        showSearch
        optionFilterProp="children"
        options={state.map((state) => ({
          value: state,
        }))}
      />
      <small className="input-text">{label}</small>
    </>
  );
}
export default Ilceler;
