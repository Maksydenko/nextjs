import { useState, useEffect } from "react";

import ImgPicture from "./ImgPicture";
import Loader from "@base/Loader/Loader";

function Img(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgItem = document.querySelector("[class*='__img'] img");
    imgItem.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, [isLoading]);

  const { className, img } = props;

  return (
    <div className={`${className}__img`}>
      {isLoading && <Loader />}
      <ImgPicture img={img} />
    </div>
  );
}

export default Img;
