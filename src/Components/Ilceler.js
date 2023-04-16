import { Select } from "antd";
import { memo, useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Ilceler({ il, label, ...props }) {
  const [state, setState] = useState([]);
  const [state1, setState1] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, [il]);
  const fetchUsers = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:3001/select/${label}/${il}`
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
<<<<<<< HEAD
export default memo(Ilceler);
=======
export default memo(Ilceler);
>>>>>>> 2d00102c9389a3d80a158ce2ad47eec5e29185e9
