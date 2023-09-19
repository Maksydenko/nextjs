import { FC, useRef } from "react";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";

import { useLoadingObject } from "@/hooks/useLoadingObject";

import { IIframe } from "./iframe.interface";

interface IframeProps {
  className: string;
  src: IIframe["src"];
  title?: IIframe["title"];
  loader?: boolean;
}

const Iframe: FC<IframeProps> = ({ className, src, title = "", loader }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { isLoading } = useLoadingObject(iframeRef);

  return (
    <div className={clsx(className, "video")}>
      {loader && isLoading && <Loader className="video__loader" />}
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
