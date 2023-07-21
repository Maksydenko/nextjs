import { FC, useRef } from "react";
import Image from "next/image";

import Loader from "@/components/shared/Loader/Loader";

import { useLoadingObject } from "@/hooks/useLoadingObject";

import { handleClassName } from "@/utils/className.util";

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
  const objectRef = useRef<HTMLImageElement>(null);
  const isLoading = useLoadingObject(objectRef);

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__img`,
    modifier
  );
  const defaultClassName = resetStyle ? "" : " img";

  return (
    <div className={modifiedClassName + defaultClassName} style={style}>
      {isLoading && <Loader className={className} modifier={modifier} />}
      <Image
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        width={width}
        height={height}
        ref={objectRef}
      />
    </div>
  );
};

export default Img;
