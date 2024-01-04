import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  href,
  type = "button",
  disabled,
}) => {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      {...(href
        ? {
            href,
          }
        : {
            type,
            disabled,
          })}
      className={clsx(className, "button")}
    >
      {children}
    </Tag>
  );
};

export default Button;
