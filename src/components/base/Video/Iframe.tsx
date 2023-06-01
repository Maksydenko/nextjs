import { FC, useRef } from "react";

import Loader from "@/components/shared/Loader/Loader";

import { useLoading } from "@/hooks/useLoading";

interface IVideo {
  src: string;
  title: string;
}

interface IframeProps {
  className: string;
  video: IVideo;
  resetStyle?: boolean;
}

const Iframe: FC<IframeProps> = ({
  className,
  video: { src, title },
  resetStyle,
}) => {
  const objectRef = useRef<HTMLIFrameElement>(null);
  const isLoading = useLoading(objectRef);

  return (
    <div className={`${className}__video${resetStyle ? "" : " video"}`}>
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
