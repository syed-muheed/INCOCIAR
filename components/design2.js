import clsx from "clsx";
import Image from "next/image";
import React from "react";
import Designcard from "./designcard";
import Fadein from "./fadein";

const Design2 = ({
  className,
  tag,
  className2,
  className3,
  className4,
  service,
  no,
  src,
  delay,
}) => {
  return (
    <Fadein delay={delay}>
      <div className="relative overflow-hidden max-w-[430px] h-[550px] ">
        {src && (
          <div className=" w-full h-full absolute -z-10">
            <Image
              className="min-h-full min-w-full object-cover"
              src={src}
              alt=""
            />{" "}
          </div>
        )}
        <Designcard
          className={clsx("", className)}
          tag={tag}
          className2={clsx("", className2)}
          service={service}
          className3={clsx("", className3)}
          no={no}
          className4={clsx("", className4)}
        />
      </div>
      <div
        className={clsx(
          " w-[98%] py-6 ",
          className3
        )}
      >
        {service}
      </div>
    </Fadein>
  );
};

export default Design2;
