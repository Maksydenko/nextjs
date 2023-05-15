import { FC } from "react";
import Image from "next/image";

import { IImg } from "@/interfaces/img.interface";

interface IImgProps {
  className: string;
  img: IImg;
  style?: { [property: string]: string };
  defaultStyle?: boolean;
}

const Img: FC<IImgProps> = ({ className, img, style, defaultStyle = true }) => {
  const { src, alt } = img;

  return (
    <div
      className={`${className}__img${defaultStyle ? " img" : ""}`}
      style={style}
    >
      <Image src={src} alt={alt} width={0} height={0} />
    </div>
  );
};

export default Img;
