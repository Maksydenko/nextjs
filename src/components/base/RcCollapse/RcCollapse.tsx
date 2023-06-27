import { FC, ReactNode } from "react";
import Collapse, { Panel } from "rc-collapse";

import motion from "./motion.util";
import { handleClassName } from "@/utils/className.util";

import { IPanels } from "@/components/base/RcCollapse/panels.interface";

import "rc-collapse/assets/index.css";

interface RcCollapseProps {
  className: string;
  modifier?: string;
  panels: IPanels;
  expandIcon?: ReactNode;
  accordion?: boolean;
  defaultActiveKey?: number;
}

const RcCollapse: FC<RcCollapseProps> = ({
  className,
  modifier,
  panels,
  expandIcon,
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
    <Panel key={panels.key} header={panels.header}>
      {panels.content}
    </Panel>
  );

  const defaultExpandIcon = <span className="rc-collapse__arrow"></span>;

  // Get expand icon
  interface IGetExpandIcon {
    (): ReactNode;
  }
  const getExpandIcon: IGetExpandIcon = () => {
    if (expandIcon) {
      return expandIcon;
    }
    return defaultExpandIcon;
  };

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__rc-collapse`,
    modifier
  );

  return (
    <Collapse
      className={modifiedClassName}
      accordion={accordion}
      openMotion={motion}
      defaultActiveKey={defaultActiveKey}
      expandIcon={getExpandIcon}
    >
      {panelItems}
    </Collapse>
  );
};

export default RcCollapse;
