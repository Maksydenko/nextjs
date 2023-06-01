import { useLoading } from "@/hooks/useLoading";

import Loader from "@/components/base/Loader/Loader";
import Source from "./Source";

const Video = ({ className, poster, video, resetStyle }) => {
  const isLoading = useLoading("video");

  return (
    <div className={`${className}__video${resetStyle ? "" : " video"}`}>
      {isLoading && <Loader />}
      <Source video={video} poster={poster} />
    </div>
  );
};

export default Video;
