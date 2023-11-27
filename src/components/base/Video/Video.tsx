import { FC } from "react";
import clsx from "clsx";

import Sources from "./Sources";

import { TypeVideo } from "./video.type";

interface VideoProps {
  className?: string;
  poster?: string;
  video: TypeVideo;
  resetStyle?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  preload?: "none" | "metadata" | "auto";
}

const Video: FC<VideoProps> = ({
  className,
  poster,
  video,
  autoPlay = true,
  muted = true,
  controls,
  loop = true,
  preload,
}) => {
  const videoAttrs = {
    poster,
    autoPlay,
    muted,
    controls,
    loop,
    preload,
  };

  return (
    <div className={clsx(className, "video")}>
      <video {...videoAttrs}>
        <Sources video={video} />
      </video>
    </div>
  );
};

export default Video;
