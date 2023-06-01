import { forwardRef } from "react";

import Item from "./Item";

import { IVideo } from "../video.interface";

interface ItemsProps {
  video: IVideo | IVideo[];
  poster: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  preload?: string;
}

export const Items = forwardRef<HTMLVideoElement, ItemsProps>(
  (
    {
      video,
      poster,
      autoPlay = true,
      muted = true,
      controls,
      loop = true,
      preload = "auto",
    },
    ref
  ) => {
    const videoAttrs = {
      poster,
      autoPlay,
      muted,
      controls,
      loop,
      preload,
    };

    return (
      <video {...videoAttrs} ref={ref}>
        <Item video={video} />
      </video>
    );
  }
);
