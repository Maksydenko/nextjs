import { useState, useEffect } from "react";

import Video from "./Video";

function FullScreenVideo(props) {
  const [height, setHeight] = useState(0);

  function handleHeight() {
    const windowHeight = window.innerHeight;
    setHeight(windowHeight);
  }

  useEffect(() => {
    handleHeight();
    window.addEventListener("resize", handleHeight);

    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, [height]);

  const { className, children, poster, videos } = props;

  const styleMinHeight = {
    minHeight: height + "px",
  };

  return (
    <section
      className={`full-screen-video ${className}`}
      style={styleMinHeight}
    >
      <div className="full-screen-video__body">{children}</div>
      <Video className={className} poster={poster} videos={videos} />
    </section>
  );
}

export default FullScreenVideo;
