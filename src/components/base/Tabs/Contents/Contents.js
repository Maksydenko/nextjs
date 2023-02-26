import Content from "./Content";

function Contents(props) {
  const className = props.className;
  const tabs = props.tabs;
  const active = props.active;

  return (
    <div className={`${className}__contents tabs__contents`}>
      {tabs.map((tab) => (
        <Content key={tab.id} className={className} tab={tab} active={active} />
      ))}
    </div>
  );
}

export default Contents;
