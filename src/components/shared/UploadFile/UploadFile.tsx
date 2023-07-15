import { ChangeEvent, FC, useEffect, useState } from "react";

import { handleClassName } from "@/utils/className.util";

import { TypeSetState } from "@/types/setState.type";

interface FileProps {
  className: string;
  modifier?: string;
  selectedFile: File | null;
  setSelectedFile: TypeSetState<File | null>;
  typeFile?: string;
  maxSize?: number;
}

const UploadFile: FC<FileProps> = ({
  className,
  modifier,
  selectedFile,
  setSelectedFile,
  typeFile,
  maxSize = 10,
}) => {
  const [isActive, setIsActive] = useState(false);

  const defaultSubHint = `${typeFile ? typeFile : ""} file${
    maxSize ? ` up to ${maxSize}MB` : ""
  }`;
  const [subHint, setSubHint] = useState(defaultSubHint);

  useEffect(() => {
    if (selectedFile) {
      const { name } = selectedFile;
      setSubHint(name);
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
      const { name, size } = file;

      // Checking the type of file
      if (typeFile && !name.toLocaleLowerCase().endsWith(typeFile)) {
        alert(`File type must be ${typeFile}!`);
        setSelectedFile(null);
        return;
      }

      // Checking the size of the file
      if (maxSize && size > maxSize * 1024 ** 2) {
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

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__upload-file`,
    modifier
  );

  const activeClassName = handleClassName(isActive, "upload-file__body");

  return (
    <div className={modifiedClassName}>
      <div
        className={activeClassName}
        onDragOver={handleActivate}
        onDragLeave={handleDeactivate}
        onDrop={handleDeactivate}
      >
        <div className="upload-file__box">
          <input
            className="upload-file__input"
            type="file"
            accept={typeFile}
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