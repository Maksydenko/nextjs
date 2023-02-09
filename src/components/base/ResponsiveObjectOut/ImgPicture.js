function ImgPicture(props) {
  const picture = props.picture;

  if (picture) {
    return <source srcSet={picture.src} type={`image/${picture.type}`} />;
  }
}

export default ImgPicture;
