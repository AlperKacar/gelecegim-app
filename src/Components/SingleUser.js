import React from "react";
const SingleUser = ({ state }) => {
  return (
    <div>
      <div>
        <h3>
          {state.ad} {state.ilceler}
        </h3>
        {state.email}
      </div>
    </div>
  );
};
export default SingleUser;
