import { FC } from "react";

import Item from "./Item";

import { TypeVideo } from "@/types/video.type";

interface ItemsProps {
  video: TypeVideo;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  preload?: string;
}

const Items: FC<ItemsProps> = ({
  video,
  poster,
  autoPlay = true,
  muted = true,
  controls,
  loop = true,
  preload = "auto",
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
    <video {...videoAttrs}>
      <Item video={video} />
    </video>
  );
};

export default Items;
