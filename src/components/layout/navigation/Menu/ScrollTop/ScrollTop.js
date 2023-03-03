import { useState, useEffect } from "react";

function ScrollTop() {
  const [hidden, setHidden] = useState(true);

  const scrollActive = 110;
  function handleScrollTop() {
    if (window.scrollY >= scrollActive) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [hidden]);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <span
      className={`menu__scroll-top${hidden ? " _hidden" : ""}`}
      type="button"
      onClick={handleClick}
    >
      <span className="menu__arrow-top"></span>
    </span>
  );
}

export default ScrollTop;
