import React from "react";
const SingleUser = ({ state }) => {
  return (
    <div>
      <div>
        <h3>
          {state.name} {state.surname}
        </h3>
        {state.email}
      </div>
    </div>
  );
};
export default SingleUser;
