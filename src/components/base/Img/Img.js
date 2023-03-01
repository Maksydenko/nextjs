import ImgPicture from "./ImgPicture";

function Img(props) {
  const { className, picture, img } = props;

  return (
    <div className={`${className}__img`}>
      <ImgPicture picture={picture} img={img} />
    </div>
  );
}

export default Img;
