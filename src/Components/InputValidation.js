import { useEffect, useState } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
export default function InputValidation({ max, label, type = "", ...props }) {
  const [show, setShow] = useState(false);

  const [inputType, setInputType] = useState(type);
  useEffect(() => {
    if (show) {
      setInputType("");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show]);

  return (
    <>
      <Input type={inputType} {...props} maxLength={max} />
      {type == "password" && (
        <div
          type="button"
          className="show-hide-button"
          onClick={() => setShow((show) => !show)}
        >
          {show ? (
            <Link className="hide-show-trigger"></Link>
          ) : (
            <Link className="show-hide-trigger"></Link>
          )}
        </div>
      )}
      <small className="input-text">{label}</small>
    </>
  );
}
