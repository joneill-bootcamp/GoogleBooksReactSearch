import React from "react";

function Input(props) {
  return (
    <div className="input-group input-group-lg mb-2">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

export default Input;
