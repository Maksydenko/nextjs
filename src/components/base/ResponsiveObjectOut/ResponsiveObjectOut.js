function ResponsiveObjectOut(props) {
  const nameClass = props.nameClass;
  const content = props.content;
  const object = props.object;

  return (
    <section className={`${nameClass} responsive-object-out`}>
      <div className={`${nameClass}__content responsive-object-out__content`}>
        <div
          className={`${nameClass}__container responsive-object-out__container`}
        >
          <div className={`${nameClass}__body responsive-object-out__body`}>
            {content}
          </div>
        </div>
      </div>
      {object}
    </section>
  );
}

export default ResponsiveObjectOut;
