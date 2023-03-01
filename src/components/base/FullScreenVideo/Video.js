function Video(props) {
  const videos = props.videos;
  const videoItems = videos.map((video, index) => (
    <source key={index} src={video.src} type={`video/${video.type}`} />
  ));

  return (
    <video
      className={`${props.className} full-screen-video__video`}
      poster={props.poster}
      autoPlay
      muted
      loop
      preload="auto"
    >
      {videoItems}
    </video>
  );
}

export default Video;
