import Content from "./Content";

function Contents(props) {
  const { className, tabs, isActive } = props;

  const contentItems = tabs.map((tab) => (
    <Content key={tab.id} className={className} tab={tab} isActive={isActive} />
  ));

  return (
    <div className={`${className}__contents tabs__contents`}>
      {contentItems}
    </div>
  );
}

export default Contents;
