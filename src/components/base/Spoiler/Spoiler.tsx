import { FC } from "react";
import Collapse, { Panel } from "rc-collapse";

import Img from "../Img/Img";

import motion from "./motion.util";
import { handleClassName } from "@/utils/className.util";

import { IPanels } from "./panels.interface";

import "rc-collapse/assets/index.css";

interface SpoilerProps {
  className: string;
  modifier?: string;
  panels: IPanels;
  accordion?: boolean;
  defaultActiveKey?: number;
}

const Spoiler: FC<SpoilerProps> = ({
  className,
  modifier,
  panels,
  accordion,
  defaultActiveKey,
}) => {
  const isArray = Array.isArray(panels);

  const panelItems = isArray ? (
    panels.map((panel) => {
      const { id, header, content } = panel;

      return (
        <Panel key={id} header={header}>
          {content}
        </Panel>
      );
    })
  ) : (
    <Panel key={panels.id} header={panels.header}>
      {panels.content}
    </Panel>
  );

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__spoiler`,
    modifier
  );

  // const img = {
  // src: ,
  // alt: ">",
  // };
  // const expandIcon = () => <Img className="rc-collapse" img={img} resetStyle />;

  return (
    <Collapse
      className={modifiedClassName}
      accordion={accordion}
      openMotion={motion}
      defaultActiveKey={defaultActiveKey}
      // expandIcon={expandIcon}
    >
      {panelItems}
    </Collapse>
  );
};

export default Spoiler;
