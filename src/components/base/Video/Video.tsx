import { FC } from "react";

import Items from "./Items/Items";

import { handleClassName } from "@/utils/className.util";

import { IVideo } from "./video.interface";

interface VideoProps {
  className: string;
  modifier?: string;
  poster?: string;
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
  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__video`,
    modifier
  );
  const defaultClassName = resetStyle ? "" : " video";

  return (
    <div className={modifiedClassName + defaultClassName}>
      <Items video={video} poster={poster} />
    </div>
  );
};

export default Video;
