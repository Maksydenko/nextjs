import { useState } from "react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

function Tabs(props) {
  const className = props.className;
  const tabs = props.tabs;

  const [active, setActive] = useState(tabs[0].id);

  return (
    <div className={`${className}__tabs tabs`}>
      <Titles
        className={className}
        tabs={tabs}
        active={active}
        setActive={setActive}
      />
      <Contents className={className} tabs={tabs} active={active} />
    </div>
  );
}

export default Tabs;
