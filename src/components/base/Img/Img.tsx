import { FC, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";

import { IImg } from "./img.interface";

import s from "./Img.module.scss";

interface ImgProps {
  className?: string;
  href?: string;
  src: IImg["src"];
  alt?: IImg["alt"];
  svg?: boolean;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  size?: string;
  width?: number;
  height?: number;
  loader?: boolean;
  style?: { [property: string]: string };
}

const Img: FC<ImgProps> = ({
  className,
  href,
  src,
  alt = "",
  svg,
  priority,
  quality = 75,
  fill = true,
  size = "100vw",
  width,
  height,
  loader = true,
  style,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const Tag = href ? "a" : "div";

  return (
    <Tag
      className={clsx(className, s.img, svg && s.img_svg)}
      style={style}
      {...(href && {
        href,
      })}
    >
      {loader && isLoading && <Loader className={s.img__loader} />}
      <Image
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        {...(width && height
          ? {
              width,
              height,
            }
          : {
              fill,
              size,
            })}
        onLoad={handleLoad}
        ref={imgRef}
      />
    </Tag>
  );
};

export default Img;
