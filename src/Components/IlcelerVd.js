import { Select } from "antd";
import { memo, useState, useEffect } from "react";
import axios from "axios";

function IlcelerVd({ il, label, getir, ...props }) {
<<<<<<< HEAD
  const { Option } = Select;
  const [ilceler, setIlceler] = useState([]);

  useEffect(() => {
    const fetchIlceler = async () => {
=======
  const [state, setState] = useState([]);
  const [state1, setState1] = useState();
  useEffect(() => { 
    const fetchUsers = async () => {
>>>>>>> 5af1760c0a594054adce4717356ba2a436d3d0c5
      if (il) {
        const response = await axios.get(
          ` http://localhost:3001/select/${getir}/${il}`
        );
<<<<<<< HEAD
        setIlceler(response.data);
=======
        
        setState(response.data);
        setState1(response.data[0].name);
>>>>>>> 5af1760c0a594054adce4717356ba2a436d3d0c5
      }
    };
    fetchIlceler();
  }, [il, getir]);

  return (
    <>
      <Select
        {...props}
        showSearch
<<<<<<< HEAD
        optionFilterProp="children"
        disabled={!ilceler.length}
      >
        {ilceler.map((ilce) => (
          <Option key={ilce.name} value={ilce.name}>
            {ilce.name}
          </Option>
        ))}
      </Select>
=======
        
        optionFilterProp="children"
        options={state.map((item) => ({
          value: item.name,
        }))}
        
        
      />
>>>>>>> 5af1760c0a594054adce4717356ba2a436d3d0c5
      <small className="input-text">{label}</small>
    </>
  );
}

export default memo(IlcelerVd);
