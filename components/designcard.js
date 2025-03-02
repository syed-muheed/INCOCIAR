import clsx from "clsx";
import React from "react";
import { syne } from "./fonts";

const Designcard = ({
  className,
  className2,
  className3,
  className4,
  tag,
  service,
  no,
}) => {
  return (
    <div>
      <div
        className={clsx(
          "  flex flex-col justify-between pt-10 pl-8 pb-6 pr-4  max-w-[430px] h-[550px] z-10 ",
          className
        )}
      >
        <div>
          <div
            className={clsx(
              "  font-medium text-[0.9375rem]   border rounded-[51px] w-max px-4 py-1",
              className2
            )}
          >
            {tag}
          </div>
          
        </div>
        <div
          className={clsx(
            " text-[9rem] lg:text-[11rem] text-right leading-none  font-semibold",syne.className,
            className4
          )}
        >
          {no}
        </div>
      </div>
    </div>
  );
};

export default Designcard;
