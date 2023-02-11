import ImgPicture from "./ImgPicture";

function Img(props) {
  const nameClass = props.nameClass;
  const img = props.img;
  const picture = props.picture;

  return (
    <div className={`${nameClass}__img`}>
      <picture>
        <ImgPicture picture={picture} />
        <img src={img.src} alt={img.alt} loading="lazy" />
      </picture>
    </div>
  );
}

export default Img;
