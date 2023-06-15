import { FC, useState, useEffect } from "react";

import { useScrollLock } from "~/hooks/useScrollLock";

interface DragAndDropProps {
  className: string;
  x: number;
  y: number;
  children: JSX.Element | JSX.Element[];
}

const DragAndDrop: FC<DragAndDropProps> = ({ className, x, y, children }) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  !isScrollLocked && setIsScrollLocked(true);

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: `${x}%`, y: `${y}%` });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isDragging) {
      const handleMove = (e: TouchEvent | MouseEvent) => {
        const touch = (e as TouchEvent).touches?.[0] || (e as MouseEvent);
        const clientX = touch.clientX;
        const clientY = touch.clientY;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const newX = ((clientX - offset.x) / windowWidth) * 100;
        const newY = ((clientY - offset.y) / windowHeight) * 100;

        // Make sure that the component does not go outside the window
        if (newX >= 0 && newX <= 99 && newY >= 0 && newY <= 99) {
          setPosition({
            x: `${newX}%`,
            y: `${newY}%`,
          });
        }
      };

      const handleEnd = () => {
        setIsDragging(false);
      };

      window.addEventListener("touchmove", handleMove, { passive: false });
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
  }, [isDragging, offset]);

  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();

    const touch =
      (e as React.TouchEvent).touches?.[0] || (e as React.MouseEvent);
    const clientX = touch.clientX;
    const clientY = touch.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    setIsDragging(true);
    setOffset({
      x: clientX - (parseFloat(position.x) / 100) * windowWidth,
      y: clientY - (parseFloat(position.y) / 100) * windowHeight,
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

    const currentComponent = e.currentTarget as HTMLElement;
    currentComponent.style.zIndex = `${maxZIndex + 1}`;
  };

  return (
    <div
      className={`${className} drag-and-drop`}
      style={{
        position: "absolute",
        zIndex: 1,
        top: position.y,
        left: position.x,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onTouchStart={handleStart}
      onMouseDown={handleStart}
    >
      {children}
    </div>
  );
};

export default DragAndDrop;
