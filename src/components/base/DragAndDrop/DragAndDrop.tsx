import { FC, ReactNode, useState, useEffect, useCallback, useRef } from "react";
import clsx from "clsx";

interface DragAndDropProps {
  className?: string;
  x: number;
  y: number;
  children: ReactNode;
}

const DragAndDrop: FC<DragAndDropProps> = ({ className, x, y, children }) => {
  const [position, setPosition] = useState({
    x: `${x}px`,
    y: `${y}px`,
  });
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const dragAndDropRef = useRef(null);

  // Handle move
  interface IHandleMove {
    (e: TouchEvent | MouseEvent): void;
  }
  const handleMove: IHandleMove = useCallback(
    (e) => {
      const dragAndDropElement = dragAndDropRef?.current;

      if (dragAndDropElement) {
        const touch = (e as TouchEvent).touches?.[0] || (e as MouseEvent);

        const { clientX, clientY } = touch;
        const { innerWidth, innerHeight } = window;

        const newX = clientX - offset.x;
        const newY = clientY - offset.y;

        // Calculate maximum values for newX and newY based on window dimensions
        const maxX =
          innerWidth - (dragAndDropElement as HTMLElement).offsetWidth;
        const maxY =
          innerHeight - (dragAndDropElement as HTMLElement).offsetHeight;

        // Ensure the new position stays within the bounds of the window
        const clampedX = Math.max(0, Math.min(newX, maxX));
        const clampedY = Math.max(0, Math.min(newY, maxY));

        setPosition({
          x: `${clampedX}px`,
          y: `${clampedY}px`,
        });
      }
    },
    [offset]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
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
  }, [isDragging, handleMove, handleEnd]);

  interface IHandleClick {
    (e: React.TouchEvent | React.MouseEvent): void;
  }
  const handleStart: IHandleClick = (e) => {
    const touch =
      (e as React.TouchEvent).touches?.[0] || (e as React.MouseEvent);

    const { clientX, clientY } = touch;

    setIsDragging(true);
    setOffset({
      x: clientX - parseFloat(position.x),
      y: clientY - parseFloat(position.y),
    });

    const draggableComponents = document.querySelectorAll(".drag-and-drop");
    let maxZIndex = 0;
    draggableComponents.forEach((component) => {
      const zIndex = parseInt(
        window.getComputedStyle(component).getPropertyValue("z-index"),
        10
      );

      if (zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    const { currentTarget } = e;
    (currentTarget as HTMLElement).style.zIndex = `${maxZIndex + 1}`;
  };

  return (
    <div
      className={clsx(className, "drag-and-drop")}
      style={{
        top: position.y,
        left: position.x,
        zIndex: 10,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onTouchStart={handleStart}
      onMouseDown={handleStart}
      ref={dragAndDropRef}
    >
      {children}
    </div>
  );
};

export default DragAndDrop;
