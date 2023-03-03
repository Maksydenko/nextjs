function Title(props) {
  const { className, tab, tabsWidth, isActive, setIsActive } = props;

  return (
    <li
      className={`${className}__title tabs__title${
        isActive === tab.id ? " _active" : ""
      }`}
      onClick={() => setIsActive(tab.id)}
      style={{ flexBasis: tabsWidth, width: tabsWidth }}
    >
      <span>{tab.title}</span>
    </li>
  );
}

export default Title;
