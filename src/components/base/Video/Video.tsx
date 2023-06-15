import { FC, useRef } from "react";

import Loader from "@/components/shared/Loader/Loader";
import { Items } from "./Items/Items";

import { useLoading } from "@/hooks/useLoading";

import { handleClassName } from "@/utils/className.util";

import { IVideo } from "./video.interface";

interface VideoProps {
  className: string;
  modifier?: string;
  poster: any;
  video: IVideo;
  resetStyle?: boolean;
}

const Video: FC<VideoProps> = ({
  className,
  modifier,
  poster,
  video,
  resetStyle,
}) => {
  const objectRef = useRef(null);
  const isLoading = useLoading(objectRef);

  return (
    <div
      className={
        handleClassName(!!modifier, `${className}__video`, modifier) +
        resetStyle
          ? ""
          : " video"
      }
    >
      {isLoading && <Loader />}
      <Items video={video} poster={poster} ref={objectRef} />
    </div>
  );
};

export default Video;
