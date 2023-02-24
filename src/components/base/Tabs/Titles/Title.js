function Title(props) {
  const nameClass = props.nameClass;
  const tab = props.tab;
  const tabsWidth = props.tabsWidth;
  const active = props.active;
  const setActive = props.setActive;

  return (
    <li
      className={`${nameClass}__title tabs__title${
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
