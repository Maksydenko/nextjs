import { FC, useState, useEffect } from "react";

import { useScrollLock } from "@/hooks/useScrollLock";

interface DraggableComponentProps {
  className: string;
  x: number;
  y: number;
  children: JSX.Element | JSX.Element[];
}

const DraggableComponent: FC<DraggableComponentProps> = ({
  className,
  x,
  y,
  children,
}) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  !isScrollLocked && setIsScrollLocked(true);

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: `${x}%`, y: `${y}%` });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isDragging) {
      const handleMove = (event: TouchEvent | MouseEvent) => {
        const touch =
          (event as TouchEvent).touches?.[0] || (event as MouseEvent);
        const clientX = touch.clientX;
        const clientY = touch.clientY;

        const newX = ((clientX - offset.x) / window.innerWidth) * 100;
        const newY = ((clientY - offset.y) / window.innerHeight) * 100;

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

      document.addEventListener("touchmove", handleMove, { passive: false });
      document.addEventListener("touchend", handleEnd);
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleEnd);

      return () => {
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("touchend", handleEnd);
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleEnd);
      };
    }
  }, [isDragging, offset]);

  const handleStart = (event: React.TouchEvent | React.MouseEvent) => {
    event.preventDefault();

    const touch =
      (event as React.TouchEvent).touches?.[0] || (event as React.MouseEvent);
    const clientX = touch.clientX;
    const clientY = touch.clientY;

    setIsDragging(true);
    setOffset({
      x: clientX - (parseFloat(position.x) / 100) * window.innerWidth,
      y: clientY - (parseFloat(position.y) / 100) * window.innerHeight,
    });

    const draggableComponents = document.querySelectorAll(
      ".draggable-component_active"
    );
    draggableComponents.forEach((component) =>
      component.classList.remove("draggable-component_active")
    );

    const currentComponent = event.currentTarget as HTMLElement;
    currentComponent.classList.add("draggable-component_active");
  };

  return (
    <div
      className={`${className} draggable-component`}
      style={{
        position: "absolute",
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

export default DraggableComponent;
