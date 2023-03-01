function Content(props) {
  const { className, tab, active } = props;

  return (
    <div
      className={`${className}__content tabs__content${
        active === tab.id ? " _active" : ""
      }`}
    >
      {tab.content}
    </div>
  );
}

export default Content;
