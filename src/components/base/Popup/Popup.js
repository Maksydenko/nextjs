import { useEffect, useState } from "react";

const Popup = ({ className, button, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isActive) {
      body.classList.add("_lock");
    } else {
      body.classList.remove("_lock");
    }

    return () => {
      body.classList.remove("_lock");
    };
  }, [isActive]);

  const handlePopupActive = () => {
    setIsActive(!isActive);
  };

  const handlePopupClose = (e) => {
    const { target } = e;
    if (!target.closest(".popup__content")) {
      handlePopupActive();
    }
  };

  return (
    <>
      <button
        className={`${className}__popup-button popup__button`}
        onClick={handlePopupActive}
      >
        {button}
      </button>
      {isActive && (
        <div className={`${className}__popup popup`} onClick={handlePopupClose}>
          <div className="popup__body">
            <div className="popup__content">
              <button
                className="popup__cross"
                onClick={handlePopupActive}
              ></button>
              <div className="popup__box">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
