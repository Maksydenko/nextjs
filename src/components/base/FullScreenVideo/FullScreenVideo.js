import Video from "./Video";

function FullScreenVideo(props) {
  const nameClass = props.nameClass;
  const children = props.children;
  const poster = props.poster;
  const videos = props.videos;

  return (
    <section className={`${nameClass} full-screen-video`}>
      <div className={`${nameClass}__body full-screen-video__body`}>
        {children}
      </div>
      <Video nameClass={nameClass} poster={poster} videos={videos} />
    </section>
  );
}

export default FullScreenVideo;
