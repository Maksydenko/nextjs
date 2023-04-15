const ResponsiveObjectOut = ({ className, children, object }) => (
  <section className={`${className} responsive-object-out`}>
    <div className="responsive-object-out__content">
      <div className="responsive-object-out__container">
        <div className="responsive-object-out__body">{children}</div>
      </div>
    </div>
    {object}
  </section>
);

export default ResponsiveObjectOut;
