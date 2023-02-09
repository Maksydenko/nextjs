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
      {props.videos.map((video, index) => (
        <source key={index} src={video.src} type={`video/${video.type}`} />
      ))}
    </video>
  );
}

export default Video;
