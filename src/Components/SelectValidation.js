import { Select } from "antd";
import { memo, useCallback, useState, useEffect } from "react";
import axios from "axios";

function SelectValidation({ label, getir, ...props }) {
  const [options, setOptions] = useState([]);

  const fetchOptions = useCallback(async () => {
    const response = await axios.get(`http://localhost:3001/select/${getir}`);
    setOptions(response.data);
  }, [getir]);

  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  return (
    <>
      <Select
        {...props}
        showSearch
        options={options.map((option) => ({
          value: option.ad,
          label: option.ad,
        }))}
      />

      <small className="input-text">{label}</small>
    </>
  );
}

export default memo(SelectValidation);
