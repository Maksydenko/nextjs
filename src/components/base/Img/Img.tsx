import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import { getModifierClassName } from "@/utils/className.util";

interface IImgProps {
  className: string;
  modifier?: string;
  img: {
    src: StaticImageData;
    alt: string;
  };
  style?: { [property: string]: string };
  defaultStyle?: boolean;
  width?: number;
  height?: number;
}

const Img: FC<IImgProps> = ({
  className,
  modifier,
  img: { src, alt },
  style,
  defaultStyle = true,
  width = 0,
  height = 0,
}) => (
  <div
    className={`${getModifierClassName(
      !!modifier,
      `${className}__img`,
      modifier
    )}${defaultStyle ? " img" : ""}`}
    style={style}
  >
    <Image src={src} alt={alt} width={width} height={height} />
  </div>
);

export default Img;
