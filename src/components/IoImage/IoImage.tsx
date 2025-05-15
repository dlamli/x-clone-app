import React from "react";
import { Image } from "@imagekit/next";

import { ImageProps } from "@/types";

export const IoImage = ({
  src,
  w,
  h,
  className,
  alt,
  tr,
  fill,
}: ImageProps) => {
  return (
    <Image
      src={src}
      className={className}
      alt={alt || ""}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      fill={fill}
    />
  );
};
