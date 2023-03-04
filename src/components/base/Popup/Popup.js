import React, { useState } from "react";

function Popup(props) {
  const [isActive, setIsActive] = useState(false);

  const body = document.body;
  function handleScrollLock() {
    if (isActive) {
      body.classList.remove("_lock");
    } else {
      body.classList.add("_lock");
    }
  }

  function handlePopupActive() {
    setIsActive(!isActive);
    handleScrollLock();
  }

  const { className, button, children } = props;

  return (
    <>
      <button
        className={`${className}__button popup__button`}
        onClick={handlePopupActive}
      >
        {button}
      </button>
      {isActive && (
        <div className={`${className}__popup popup`}>
          <div className={`${className}__body popup__body`}>
            <div className={`${className}__content popup__content`}>
              <button
                className={`${className}__cross popup__cross`}
                onClick={handlePopupActive}
              ></button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;