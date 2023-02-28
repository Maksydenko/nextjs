function ImgPicture(props) {
  const picture = props.picture;
  const img = props.img;

  if (picture) {
    return (
      <picture>
        <source srcSet={picture.src} type={`image/${picture.type}`} />
        <img src={img.src} alt={img.alt} loading="lazy" />
      </picture>
    );
  }
  return <img src={img.src} alt={img.alt} loading="lazy" />;
}

export default ImgPicture;
