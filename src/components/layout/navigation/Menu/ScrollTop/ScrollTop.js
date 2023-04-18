import { useHide } from "./useHide";

const ScrollTop = () => {
  const hidden = useHide();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <span
      className={`menu__scroll-top${hidden ? " _hidden" : ""}`}
      type="button"
      onClick={handleClick}
    >
      <span className="menu__arrow-top"></span>
    </span>
  );
};

export default ScrollTop;
