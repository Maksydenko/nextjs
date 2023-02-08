import Img from "./Img";

function ResponsiveObjectOut(props) {
  return (
    <section className="responsive-object-out">
      <div className="responsive-object-out__content">
        <div className="responsive-object-out__container">
          <div className="responsive-object-out__body">{props.children}</div>
        </div>
      </div>
      <Img pictures={props.pictures} img={props.img} />
    </section>
  );
}

export default ResponsiveObjectOut;
