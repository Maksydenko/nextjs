import { FC, useRef } from "react";
import Image from "next/image";

import Loader from "@/components/shared/Loader/Loader";

import { useLoading } from "@/hooks/useLoading";

import { handleClassName } from "@/utils/className.util";

import { IImg } from "@/interfaces/img.interface";

interface ImgProps {
  className: string;
  modifier?: string;
  img: IImg;
  style?: { [property: string]: string };
  resetStyle?: boolean;
  width?: number;
  height?: number;
  onMouseOver?: any;
  onMouseOut?: any;
}

const Img: FC<ImgProps> = ({
  className,
  modifier,
  img: { src, alt },
  style,
  resetStyle,
  width = 0,
  height = 0,
}) => {
  const objectRef = useRef<HTMLImageElement>(null);
  const isLoading = useLoading(objectRef);

  return (
    <div
      className={`${handleClassName(
        !!modifier,
        `${className}__img`,
        modifier
      )}${resetStyle ? "" : " img"}`}
      style={style}
    >
      {isLoading && <Loader />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        ref={objectRef}
      />
    </div>
  );
};

export default Img;
