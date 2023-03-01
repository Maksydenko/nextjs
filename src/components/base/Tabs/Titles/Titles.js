import Title from "./Title";

function Titles(props) {
  const { className, tabs, active, setActive } = props;
  const tabsWidth = `${100 / tabs.length}%`;

  const tabItems = tabs.map((tab) => (
    <Title
      key={tab.id}
      tab={tab}
      className={className}
      tabsWidth={tabsWidth}
      active={active}
      setActive={setActive}
    />
  ));

  return <ul className={`${className}__titles tabs__titles`}>{tabItems}</ul>;
}

export default Titles;
