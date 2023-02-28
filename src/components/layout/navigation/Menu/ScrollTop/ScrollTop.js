import { useState } from "react";

function ScrollTop() {
  const defaultClassName = "menu__scroll-top";

  const [className, setClassName] = useState(defaultClassName);

  const scrollActive = 110;
  window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollActive) {
      setClassName(defaultClassName);
    } else {
      setClassName(`${defaultClassName} _hidden`);
    }
  });

  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <button className={className} type="button" onClick={handleClick}>
      <span className="menu__arrow-top"></span>
    </button>
  );
}

export default ScrollTop;
