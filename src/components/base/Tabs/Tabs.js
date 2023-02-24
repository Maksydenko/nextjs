import { useState } from "react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

function Tabs(props) {
  const nameClass = props.nameClass;
  const tabs = props.tabs;

  const [active, setActive] = useState(tabs[0].id);

  return (
    <div className={`${nameClass}__tabs tabs`}>
      <Titles
        nameClass={nameClass}
        tabs={tabs}
        active={active}
        setActive={setActive}
      />
      <Contents nameClass={nameClass} tabs={tabs} active={active} />
    </div>
  );
}

export default Tabs;
