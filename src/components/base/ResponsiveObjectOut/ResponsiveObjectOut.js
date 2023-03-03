function ResponsiveObjectOut(props) {
  const { className, children, object } = props;

  return (
    <section className={`${className} responsive-object-out`}>
      <div className={`${className}__content responsive-object-out__content`}>
        <div
          className={`${className}__container responsive-object-out__container`}
        >
          <div className={`${className}__body responsive-object-out__body`}>
            {children}
          </div>
        </div>
      </div>
      {object}
    </section>
  );
}

export default ResponsiveObjectOut;
