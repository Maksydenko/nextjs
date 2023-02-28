import ImgPicture from "./ImgPicture";

function Img(props) {
  const className = props.className;
  const img = props.img;
  const picture = props.picture;

  return (
    <div className={`${className}__img`}>
      <ImgPicture picture={picture} img={img} />
    </div>
  );
}

export default Img;
