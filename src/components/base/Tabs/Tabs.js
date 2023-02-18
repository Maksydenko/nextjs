import { useState } from "react";

function Tabs(props) {
  const nameClass = props.nameClass;
  const tabs = props.tabs;
  const tabsWidth = `${100 / tabs.length}%`;

  const [active, setActive] = useState(tabs[0].id);

  const titles = tabs.map((item) => (
    <li
      key={item.id}
      className={`${nameClass}__title tabs__title${
        active === item.id ? " _active" : ""
      }`}
      onClick={() => setActive(item.id)}
      style={{ flexBasis: tabsWidth, width: tabsWidth }}
    >
      <span>{item.title}</span>
    </li>
  ));

  const contents = tabs.map((item) => (
    <div
      key={item.id}
      className={`${nameClass}__content tabs__content${
        active === item.id ? " _active" : ""
      }`}
    >
      {item.content}
    </div>
  ));

  return (
    <div className={`${nameClass} tabs`}>
      <ul className={`${nameClass}__titles tabs__titles`}>{titles}</ul>
      <div className={`${nameClass}__contents tabs__contents`}>{contents}</div>
    </div>
  );
}

export default Tabs;
