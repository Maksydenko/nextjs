function Video(props) {
  return (
    <video
      className="full-screen-video__video"
      poster={props.poster}
      autoPlay
      muted
      loop
      preload="auto"
    >
      {props.videos.map((video) => (
        <source src={video.video} type={`video/${video.type}`} />
      ))}
    </video>
  );
}

export default Video;
