import { FC, useRef } from "react";
import Image from "next/image";

import Loader from "@/components/shared/Loader/Loader";

import { useLoading } from "@/hooks/useLoading";

import { IImg } from "@/interfaces/img.interface";

interface ImgProps {
  className: string;
  img: IImg;
  style?: { [property: string]: string };
  resetStyle?: boolean;
  width?: number;
  height?: number;
}

const Img: FC<ImgProps> = ({
  className,
  img: { src, alt },
  style,
  resetStyle = true,
  width = 0,
  height = 0,
}) => {
  const objectRef = useRef<HTMLImageElement>(null);
  const isLoading = useLoading(objectRef);

  return (
    <div
      className={`${className}__img${resetStyle ? " img" : ""}`}
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
