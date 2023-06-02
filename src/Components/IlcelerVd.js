import { Select } from "antd";
import { memo, useState, useEffect } from "react";
import axios from "axios";

function IlcelerVd({ il, label, getir, ...props }) {
  const { Option } = Select;
  const [ilceler, setIlceler] = useState([]);

  useEffect(() => {
    const fetchIlceler = async () => {
      if (il) {
        const response = await axios.get(
          ` http://localhost:3001/select/${getir}/${il}`
        );
        setIlceler(response.data);
      }
    };
    fetchIlceler();
  }, [il, getir]);

  return (
    <>
      <Select
        {...props}
        showSearch
        optionFilterProp="children"
        disabled={!ilceler.length}
      >
        {ilceler.map((ilce) => (
          <Option className="taşanları-gizle" key={ilce.name} value={ilce.name}>
            <p className="taşanları-gizle">{ilce.name}</p>
          </Option>
        ))}
      </Select>
      <small className="input-text">{label}</small>
    </>
  );
}

export default memo(IlcelerVd);
