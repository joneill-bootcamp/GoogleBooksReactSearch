import React from "react";

function Card(props) {
  return (
    <div className="card mb-4">
      <div className="card-header"> {props.title} </div>{" "}
      <div className="card-body"> {props.children} </div>{" "}
    </div>
  );
}

export default Card;
