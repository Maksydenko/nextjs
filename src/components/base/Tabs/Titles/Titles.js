import Title from "./Title";

function Titles(props) {
  const className = props.className;
  const tabs = props.tabs;
  const active = props.active;
  const setActive = props.setActive;

  const tabsWidth = `${100 / tabs.length}%`;

  return (
    <ul className={`${className}__titles tabs__titles`}>
      {tabs.map((tab) => (
        <Title
          key={tab.id}
          tab={tab}
          className={className}
          tabsWidth={tabsWidth}
          active={active}
          setActive={setActive}
        />
      ))}
    </ul>
  );
}

export default Titles;
