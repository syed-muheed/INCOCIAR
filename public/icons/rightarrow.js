import React from "react";

const Rightarrow = ({ tab, len }) => {
  return (
    <div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.8594 11.8599L40.9994 23.9999L28.8594 36.1399"
          stroke={tab < len - 1 ? "#7A2100" : "#ADADAD"}
          strokeWidth="2.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 24H40.66"
          stroke={tab < len - 1 ? "#7A2100" : "#ADADAD"}
          strokeWidth="2.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Rightarrow;
