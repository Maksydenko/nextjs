import { FC, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";

import { useLoadingObject } from "@/hooks/useLoadingObject";

import { IImg } from "./img.interface";

interface ImgProps {
  className: string;
  modifier?: string;
  img: IImg;
  style?: { [property: string]: string };
  resetStyle?: boolean;
  priority?: boolean;
  quality?: number;
  width?: number;
  height?: number;
}

const Img: FC<ImgProps> = ({
  className,
  modifier,
  img: { src, alt },
  style,
  resetStyle,
  priority,
  quality = 75,
  width = 0,
  height = 0,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { isLoading } = useLoadingObject(imgRef);

  return (
    <div
      className={clsx(`${className}__img`, modifier, !resetStyle && "img")}
      style={style}
    >
      {isLoading && <Loader className={className} modifier={modifier} />}
      <Image
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        width={width}
        height={height}
        ref={imgRef}
      />
    </div>
  );
};

export default Img;
