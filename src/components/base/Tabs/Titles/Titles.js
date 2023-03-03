import Title from "./Title";

function Titles(props) {
  const { className, tabs, isActive, setIsActive } = props;
  const tabsWidth = `${100 / tabs.length}%`;

  const tabItems = tabs.map((tab) => (
    <Title
      key={tab.id}
      tab={tab}
      className={className}
      tabsWidth={tabsWidth}
      isActive={isActive}
      setIsActive={setIsActive}
    />
  ));

  return <ul className={`${className}__titles tabs__titles`}>{tabItems}</ul>;
}

export default Titles;
