import { useState } from "react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

const Tabs = ({ className, tabs }) => {
  const [isActive, setIsActive] = useState(tabs[0].id);

  return (
    <div className={`${className}__tabs tabs`}>
      <Titles tabs={tabs} isActive={isActive} setIsActive={setIsActive} />
      <Contents tabs={tabs} isActive={isActive} />
    </div>
  );
};

export default Tabs;
