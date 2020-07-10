import React from "react";

function Button({ size, type = "default", className, children, onClick }) {
  return (
    <div className="text-right">
      <button
        onClick={onClick}
        className={[`btn ${size}`, `btn-${type}`, className].join(" ")}
      >
        {children}{" "}
      </button>{" "}
    </div>
  );
}

export default Button;
