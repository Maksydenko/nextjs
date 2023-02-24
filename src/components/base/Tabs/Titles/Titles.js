import Title from "./Title";

function Titles(props) {
  const nameClass = props.nameClass;
  const tabs = props.tabs;
  const active = props.active;
  const setActive = props.setActive;

  const tabsWidth = `${100 / tabs.length}%`;

  return (
    <ul className={`${nameClass}__titles tabs__titles`}>
      {tabs.map((tab) => (
        <Title
          key={tab.id}
          tab={tab}
          nameClass={nameClass}
          tabsWidth={tabsWidth}
          active={active}
          setActive={setActive}
        />
      ))}
    </ul>
  );
}

export default Titles;
