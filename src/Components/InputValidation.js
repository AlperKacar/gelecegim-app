import { useEffect, useState, memo } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
function InputValidation({ min, max, label, type = "", ...props }) {
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
      <Input type={inputType} {...props} maxLength={max} minLength={min} />
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

export default memo(InputValidation);
