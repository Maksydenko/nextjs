import { FC } from "react";
import clsx from "clsx";

import Sources from "./Sources";

import { TypeLocalVideo } from "./localVideo.type";

import s from "./Video.module.scss";

interface LocalVideoProps {
  className?: string;
  poster?: string;
  video: TypeLocalVideo;
  resetStyle?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  preload?: "none" | "metadata" | "auto";
}

const LocalVideo: FC<LocalVideoProps> = ({
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
    <div className={clsx(className, s.video)}>
      <video {...videoAttrs}>
        <Sources video={video} />
      </video>
    </div>
  );
};

export default LocalVideo;
