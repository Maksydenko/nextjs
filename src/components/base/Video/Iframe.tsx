import { FC, useRef } from "react";

import Loader from "@/components/shared/Loader/Loader";

import { useLoading } from "@/hooks/useLoading";

import { handleClassName } from "@/utils/className.util";

import { IIframe } from "@/interfaces/iframe.interface";

interface IframeProps {
  className: string;
  modifier?: string;
  video: IIframe;
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

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__video`,
    modifier
  );
  const defaultClassName = resetStyle ? "" : " video";

  return (
    <div className={modifiedClassName + defaultClassName}>
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
