function Title(props) {
  const { className, tab, tabsWidth, active, setActive } = props;

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
