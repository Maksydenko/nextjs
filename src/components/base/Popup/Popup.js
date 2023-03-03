import React, { useState } from "react";

function Popup(props) {
  const [isActive, setIsActive] = useState(false);

  const root = document.getElementById("root");
  function handleScrollLock() {
    if (isActive) {
      root.classList.remove("_lock");
    } else {
      root.classList.add("_lock");
    }
  }

  function handlePopupActive() {
    setIsActive(!isActive);
    handleScrollLock();
  }

  const { className, button, children } = props;

  return (
    <div className={`${className}__popup popup`}>
      <button
        className={`${className}__button popup__button`}
        onClick={handlePopupActive}
      >
        {button}
      </button>
      {isActive && (
        <div className={`${className}__body popup__body`}>
          <div className="popup__content">
            <button
              className={`${className}__cross popup__cross`}
              onClick={handlePopupActive}
            ></button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
