import { FC, useRef } from "react";

import Loader from "@/components/shared/Loader/Loader";
import { Items } from "./Items/Items";

import { useLoading } from "@/hooks/useLoading";

import { IVideo } from "./video.interface";

interface VideoProps {
  className: string;
  poster: any;
  video: IVideo;
  resetStyle?: boolean;
}

const Video: FC<VideoProps> = ({ className, poster, video, resetStyle }) => {
  const objectRef = useRef(null);
  const isLoading = useLoading(objectRef);

  return (
    <div className={`${className}__video${resetStyle ? "" : " video"}`}>
      {isLoading && <Loader />}
      <Items video={video} poster={poster} ref={objectRef} />
    </div>
  );
};

export default Video;
