import { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";

import Loader from "@/components/shared/Loader/Loader";

import { useLoading } from "@/hooks/useLoading";

interface ImgProps {
  className: string;
  src: StaticImageData | string;
  alt: string;
  style?: { [property: string]: string };
  defaultStyle?: boolean;
  width?: number;
  height?: number;
}

const Img: FC<ImgProps> = ({
  className,
  src,
  alt,
  style,
  defaultStyle = true,
  width = 0,
  height = 0,
}) => {
  const objectRef = useRef<HTMLImageElement>(null);
  const isLoading = useLoading(objectRef);

  return (
    <div
      className={`${className}__img${defaultStyle ? " img" : ""}`}
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
