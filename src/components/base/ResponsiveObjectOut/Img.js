function Img(props) {
  const pictures = props.pictures;
  const img = props.img;

  return (
    <div className="responsive-object-out__img">
      <picture>
        {pictures.map((picture, index) => (
          <source
            key={index}
            srcSet={picture.picture}
            type={`image/${picture.type}`}
          />
        ))}
        <img src={img} alt={img} />
      </picture>
    </div>
  );
}

export default Img;
