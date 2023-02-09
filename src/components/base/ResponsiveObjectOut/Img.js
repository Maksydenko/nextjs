import ImgPicture from "./ImgPicture";

function Img(props) {
  const picture = props.picture;
  const img = props.img;

  return (
    <div className="responsive-object-out__img">
      <picture>
        <ImgPicture picture={picture} />
        <img src={img.src} alt={img.alt} loading="lazy" />
      </picture>
    </div>
  );
}

export default Img;
