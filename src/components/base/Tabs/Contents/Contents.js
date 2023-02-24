import Content from "./Content";

function Contents(props) {
  const nameClass = props.nameClass;
  const tabs = props.tabs;
  const active = props.active;

  return (
    <div className={`${nameClass}__contents tabs__contents`}>
      {tabs.map((tab) => (
        <Content key={tab.id} nameClass={nameClass} tab={tab} active={active} />
      ))}
    </div>
  );
}

export default Contents;
