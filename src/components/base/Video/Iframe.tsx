import { FC, useRef } from "react";

import Loader from "@/components/shared/Loader/Loader";

import { useLoading } from "@/hooks/useLoading";

import { handleClassName } from "@/utils/className.util";

interface IVideo {
  src: string;
  title: string;
}

interface IframeProps {
  className: string;
  modifier?: string;
  video: IVideo;
  resetStyle?: boolean;
}

const Iframe: FC<IframeProps> = ({
  className,
  modifier,
  video: { src, title },
  resetStyle,
}) => {
  const objectRef = useRef<HTMLIFrameElement>(null);
  const isLoading = useLoading(objectRef);

  return (
    <div
      className={
        handleClassName(!!modifier, `${className}__full-screen`, modifier) +
        resetStyle
          ? ""
          : " video"
      }
    >
      {isLoading && <Loader />}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ref={objectRef}
      ></iframe>
    </div>
  );
};

export default Iframe;
