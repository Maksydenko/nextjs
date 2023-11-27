import { FC, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

import Loader from "~/components/shared/Loader/Loader";

import { useLoadingObject } from "~/hooks/useLoadingObject";

import { IImg } from "./img.interface";

interface ImgProps {
  className?: string;
  src: IImg["src"];
  alt?: IImg["alt"];
  style?: { [property: string]: string };
  svg?: boolean;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  width?: number;
  height?: number;
  loader?: boolean;
}

const Img: FC<ImgProps> = ({
  className,
  src,
  alt = "",
  style,
  svg,
  priority,
  quality = 75,
  fill = true,
  width,
  height,
  loader = true,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { isLoading } = useLoadingObject(imgRef);

  return (
    <div className={clsx(className, "img", svg && "img--svg")} style={style}>
      {loader && isLoading && <Loader className="img__loader" />}
      <Image
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        {...(fill
          ? {
              fill,
            }
          : {
              width,
              height,
            })}
        ref={imgRef}
      />
    </div>
  );
};

export default Img;
