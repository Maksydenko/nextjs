import { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";

import Loader from "@/components/shared/Loader/Loader";

import { useLoading } from "@/hooks/useLoading";

import { getModifierClassName } from "@/utils/className.util";

interface ImgProps {
  className: string;
  modifier?: string;
  img: {
    src: StaticImageData;
    alt: string;
  };
  style?: { [property: string]: string };
  resetStyle?: boolean;
  width?: number;
  height?: number;
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
  const imgRef = useRef<HTMLImageElement>(null);
  const isLoading = useLoading(imgRef);

  <div
    className={`${getModifierClassName(
      !!modifier,
      `${className}__img`,
      modifier
    )}${resetStyle ? "" : " img"}`}
    style={style}
  >
    {isLoading && <Loader />}
    <Image src={src} alt={alt} width={width} height={height} ref={imgRef} />
  </div>;
};

export default Img;
