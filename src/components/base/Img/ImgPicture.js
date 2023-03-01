function ImgPicture(props) {
  const { picture, img } = props;

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
