function Title(props) {
  const { className, tab, tabsWidth, isActive, setIsActive } = props;

  function handleTabClick() {
    setIsActive(tab.id);
  }

  return (
    <li
      className={`${className}__title tabs__title${
        isActive === tab.id ? " _active" : ""
      }`}
      onClick={handleTabClick}
      style={{ flexBasis: tabsWidth, width: tabsWidth }}
    >
      <span>{tab.title}</span>
    </li>
  );
}

export default Title;
