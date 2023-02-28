import Title from "./Title";

function Titles(props) {
  const className = props.className;
  const tabs = props.tabs;
  const active = props.active;
  const setActive = props.setActive;
  const onFilterTextReset = props.onFilterTextReset;

  const tabsWidth = `${100 / tabs.length}%`;

  const tabItems = tabs.map((tab) => (
    <Title
      key={tab.id}
      tab={tab}
      className={className}
      tabsWidth={tabsWidth}
      active={active}
      setActive={setActive}
      onFilterTextReset={onFilterTextReset}
    />
  ));

  return <ul className={`${className}__titles tabs__titles`}>{tabItems}</ul>;
}

export default Titles;
