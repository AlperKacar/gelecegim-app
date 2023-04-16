import { Select } from "antd";
import { memo, useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function SelectValidation({ label, ...props }) {
  const [state, setState] = useState([]);
  const fetchUsers = useCallback(async () => {
    const response = await axios.get(`http://localhost:3001/select/${label}`);
    setState(response.data);
  });
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
          value: state.ad,
        }))}
      />

      <small className="input-text">{label}</small>
    </>
  );
}
export default memo(SelectValidation);
