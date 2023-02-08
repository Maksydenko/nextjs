import Video from "./Video";

function FullScreenVideo(props) {
  return (
    <section className={`${props.nameClass} full-screen-video`}>
      <div className="full-screen-video__body">{props.children}</div>
      <Video poster={props.poster} videos={props.videos} />
    </section>
  );
}

export default FullScreenVideo;
