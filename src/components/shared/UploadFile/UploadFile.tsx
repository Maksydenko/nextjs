import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import Img from "@/components/base/Img/Img";

import { handleClassName } from "@/utils/className.util";

interface FileProps {
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
}

const UploadFile: FC<FileProps> = ({ selectedFile, setSelectedFile }) => {
  const [isActive, setIsActive] = useState(false);

  const maxSize = 10;
  const defaultSubHint = `.csv or .numbers file up to ${maxSize}MB`;
  const [subHint, setSubHint] = useState(defaultSubHint);

  useEffect(() => {
    if (selectedFile) {
      setSubHint(selectedFile.name);
    } else {
      setSubHint(defaultSubHint);
    }
  }, [selectedFile]);

  // Handle change file
  interface IHandleChangeFile {
    ({ target }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChangeFile: IHandleChangeFile = ({ target: { files } }) => {
    const file = files && files[0];

    if (file) {
      const { name, size, type } = file;

      // Checking the type of file
      if (!["text/csv"].includes(type) && !name.endsWith(".numbers")) {
        alert("File type must be CSV, XLSX or NUMBERS!");
        setSelectedFile(null);
        return;
      }

      // Checking the size of the file
      if (size > maxSize * 1024 * 1024) {
        alert(`File size should not exceed ${maxSize}MB!`);
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
    }
  };

  const handleActivate = () => {
    setIsActive(true);
  };

  const handleDeactivate = () => {
    setIsActive(false);
  };

  const modifiedClassName = handleClassName(isActive, "upload-file__body");

  return (
    <div className="upload-file">
      <div
        className={modifiedClassName}
        onDragOver={handleActivate}
        onDragLeave={handleDeactivate}
        onDrop={handleDeactivate}
      >
        <div className="upload-file__box">
          <input
            className="upload-file__input"
            type="file"
            accept=".csv, .numbers"
            onChange={handleChangeFile}
          />
          <span className="upload-file__hint">
            <span>Upload a file</span> or drag and drop
          </span>
          <span className="upload-file__sub-hint">{subHint}</span>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
