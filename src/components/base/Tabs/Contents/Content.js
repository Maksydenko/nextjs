function Content(props) {
  const className = props.className;
  const tab = props.tab;
  const active = props.active;

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
