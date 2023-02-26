function Title(props) {
  const className = props.className;
  const tab = props.tab;
  const tabsWidth = props.tabsWidth;
  const active = props.active;
  const setActive = props.setActive;

  return (
    <li
      className={`${className}__title tabs__title${
        active === tab.id ? " _active" : ""
      }`}
      onClick={() => setActive(tab.id)}
      style={{ flexBasis: tabsWidth, width: tabsWidth }}
    >
      <span>{tab.title}</span>
    </li>
  );
}

export default Title;
