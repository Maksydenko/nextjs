import { useHide } from "./useHide";

const ScrollTop = () => {
  const isHidden = useHide();
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const classHidden = (className) =>
    `${className}${isHidden ? ` _hidden` : ""}`;

  return (
    <span
      className={classHidden("menu__scroll-top")}
      type="button"
      onClick={handleClick}
    >
      <span className="menu__arrow-top"></span>
    </span>
  );
};

export default ScrollTop;
