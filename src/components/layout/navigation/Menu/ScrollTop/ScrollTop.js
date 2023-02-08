import { useState } from "react";

function SrollTop() {
  const scrollName = "menu__scroll-top";

  const [active, setActive] = useState(scrollName);

  const scrollActive = 110;
  window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollActive) {
      setActive(`${scrollName} _active`);
    } else {
      setActive(scrollName);
    }
  });

  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <button className={active} type="button" onClick={handleClick}>
      <span className="menu__scroll-icon"></span>
    </button>
  );
}

export default SrollTop;
