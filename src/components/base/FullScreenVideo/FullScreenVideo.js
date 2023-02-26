import Video from "./Video";

function FullScreenVideo(props) {
  const className = props.className;
  const children = props.children;
  const poster = props.poster;
  const videos = props.videos;

  return (
    <section className={`${className} full-screen-video`}>
      <div className={`${className}__body full-screen-video__body`}>
        {children}
      </div>
      <Video className={className} poster={poster} videos={videos} />
    </section>
  );
}

export default FullScreenVideo;
