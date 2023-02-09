import Img from "./Img";

function ResponsiveObjectOut(props) {
  return (
    <section className={`${props.nameClass} responsive-object-out`}>
      <div className="responsive-object-out__content">
        <div className="responsive-object-out__container">
          <div className="responsive-object-out__body">{props.children}</div>
        </div>
      </div>
      <Img picture={props.picture} img={props.img} />
    </section>
  );
}

export default ResponsiveObjectOut;
