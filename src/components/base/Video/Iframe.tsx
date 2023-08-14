import { FC, useRef } from "react";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";

import { useLoadingObject } from "@/hooks/useLoadingObject";

import { IIframe } from "./iframe.interface";

interface IframeProps {
  className: string;
  video: IIframe;
  resetStyle?: boolean;
}

const Iframe: FC<IframeProps> = ({
  className,
  video: { src, title },
  resetStyle,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { isLoading } = useLoadingObject(iframeRef);

  return (
    <div className={clsx(className, !resetStyle && "video")}>
      {isLoading && <Loader className="video__loader" />}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ref={iframeRef}
      ></iframe>
    </div>
  );
};

export default Iframe;
