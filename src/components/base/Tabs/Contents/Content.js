function Content(props) {
  const nameClass = props.nameClass;
  const tab = props.tab;
  const active = props.active;

  return (
    <div
      className={`${nameClass}__content tabs__content${
        active === tab.id ? " _active" : ""
      }`}
    >
      {tab.content}
    </div>
  );
}

export default Content;
