import Img from "@base/Img/Img";

function ResponsiveObjectOut(props) {
  const nameClass = props.nameClass;
  const children = props.children;
  const picture = props.picture;
  const img = props.img;

  return (
    <section className={`${nameClass} responsive-object-out`}>
      <div className={`${nameClass}__content responsive-object-out__content`}>
        <div
          className={`${nameClass}__container responsive-object-out__container`}
        >
          <div className={`${nameClass}__body responsive-object-out__body`}>
            {children}
          </div>
        </div>
      </div>
      <Img nameClass="responsive-object-out" picture={picture} img={img} />
    </section>
  );
}

export default ResponsiveObjectOut;
