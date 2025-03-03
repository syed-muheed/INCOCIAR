import React from "react";

const Leftarrow = ({ tab }) => {
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
          d="M19.14 11.8599L7 23.9999L19.14 36.1399"
          stroke={tab > 0 ? "#7A2100" : "#ADADAD"}
          strokeWidth="2.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.9998 24H7.33984"
          stroke={tab > 0 ? "#7A2100" : "#ADADAD"}
          strokeWidth="2.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Leftarrow;
