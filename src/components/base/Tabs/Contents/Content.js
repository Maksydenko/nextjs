function Content(props) {
  const { className, tab, isActive } = props;

  return (
    isActive === tab.id && (
      <div className={`${className}__content tabs__content`}>{tab.content}</div>
    )
  );
}

export default Content;
