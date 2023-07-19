import { FC, ReactNode, useState, useEffect, useCallback } from "react";

import { useScrollLock } from "@/hooks/useScrollLock";

import { handleClassName } from "@/utils/className.util";

interface DragAndDropProps {
  className: string;
  modifier?: string;
  children: ReactNode;
  x: number;
  y: number;
}

const DragAndDrop: FC<DragAndDropProps> = ({
  className,
  modifier,
  children,
  x,
  y,
}) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();

  const [position, setPosition] = useState({ x: `${x}%`, y: `${y}%` });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Handle move
  interface IHandleMove {
    (e: TouchEvent | MouseEvent): void;
  }
  const handleMove: IHandleMove = useCallback(
    (e) => {
      const touch = (e as TouchEvent).touches?.[0] || (e as MouseEvent);

      const { clientX, clientY } = touch;
      const { innerWidth, innerHeight } = window;

      const newX = ((clientX - offset.x) / innerWidth) * 100;
      const newY = ((clientY - offset.y) / innerHeight) * 100;

      // Make sure that the component does not go outside the window
      if (newX >= 0 && newX <= 99 && newY >= 0 && newY <= 99) {
        setPosition({
          x: `${newX}%`,
          y: `${newY}%`,
        });
      }
    },
    [offset]
  );

  const handleEnd = useCallback(() => {
    setIsScrollLocked(false);
  }, [setIsScrollLocked]);

  useEffect(() => {
    if (isScrollLocked) {
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleEnd);
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);

      return () => {
        window.removeEventListener("touchmove", handleMove);
        window.removeEventListener("touchend", handleEnd);
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleEnd);
      };
    }
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "";
    };
  }, [isScrollLocked, handleMove, handleEnd]);

  // Handle start
  interface IHandleStart {
    (e: React.TouchEvent | React.MouseEvent): void;
  }
  const handleStart: IHandleStart = (e) => {
    setIsScrollLocked(true);

    const touch =
      (e as React.TouchEvent).touches?.[0] || (e as React.MouseEvent);

    const { clientX, clientY } = touch;
    const { innerWidth, innerHeight } = window;

    setOffset({
      x: clientX - (parseFloat(position.x) / 100) * innerWidth,
      y: clientY - (parseFloat(position.y) / 100) * innerHeight,
    });

    const draggableComponents = document.querySelectorAll(".drag-and-drop");
    let maxZIndex = 0;
    draggableComponents.forEach((component) => {
      const zIndex = parseInt(
        window.getComputedStyle(component).getPropertyValue("z-index")
      );

      if (zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    const { currentTarget } = e;
    (currentTarget as HTMLElement).style.zIndex = `${maxZIndex + 1}`;
  };

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__drag-and-drop`,
    modifier
  );

  return (
    <div
      className={`${modifiedClassName} drag-and-drop`}
      style={{
        position: "absolute",
        zIndex: 1,
        top: position.y,
        left: position.x,
        cursor: isScrollLocked ? "grabbing" : "grab",
      }}
      onTouchStart={handleStart}
      onMouseDown={handleStart}
    >
      {children}
    </div>
  );
};

export default DragAndDrop;
