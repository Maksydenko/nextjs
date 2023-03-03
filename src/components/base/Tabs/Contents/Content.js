function Content(props) {
  const { className, tab, isActive } = props;

  return (
    <div
      className={`${className}__content tabs__content${
        isActive === tab.id ? " _active" : ""
      }`}
    >
      {tab.content}
    </div>
  );
}

export default Content;
