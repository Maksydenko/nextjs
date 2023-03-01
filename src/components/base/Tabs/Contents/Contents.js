import Content from "./Content";

function Contents(props) {
  const { className, tabs, active } = props;

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
