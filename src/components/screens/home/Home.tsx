import UploadFile from "@/components/shared/UploadFile/UploadFile";
import { FC } from "react";

interface IHome {}

const Home: FC<IHome> = () => {
  return (
    <div>
      <div className="undefined__container">
        <UploadFile />
      </div>
    </div>
  );
};

export default Home;
