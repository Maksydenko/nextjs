import Content from "./Content";

function Contents(props) {
  const className = props.className;
  const tabs = props.tabs;
  const active = props.active;

  const contentItems = tabs.map((tab) => (
    <Content key={tab.id} className={className} tab={tab} active={active} />
  ));

  return (
    <div className={`${className}__contents tabs__contents`}>
      {contentItems}
    </div>
  );
}

export default Contents;
