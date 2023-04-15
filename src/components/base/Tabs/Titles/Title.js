const Title = ({ tab, tabsWidth, isActive, setIsActive }) => {
  const handleTabClick = () => {
    setIsActive(tab.id);
  };

  return (
    <li
      className={`tabs__title${isActive === tab.id ? " _active" : ""}`}
      onClick={handleTabClick}
      style={{ flexBasis: tabsWidth, width: tabsWidth }}
    >
      <span>{tab.title}</span>
    </li>
  );
};

export default Title;
