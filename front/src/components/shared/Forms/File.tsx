import { ChangeEvent, FC, useEffect, useState } from "react";
import clsx from "clsx";

import { TypeSetState } from "@/types/setState.type";

interface FileProps {
  className?: string;
  selectedFile: File | null;
  setSelectedFile: TypeSetState<File | null>;
  accept?: string[];
  maxSize?: number;
}

const File: FC<FileProps> = ({
  className,
  selectedFile,
  setSelectedFile,
  accept,
  maxSize = 10,
}) => {
  const [isActive, setIsActive] = useState(false);

  const defaultSubHint = `${accept ? accept.join(", ") : ""} file${
    maxSize > 0 ? ` up to ${maxSize}MB` : ""
  }`;
  const [subHint, setSubHint] = useState(defaultSubHint);

  useEffect(() => {
    if (selectedFile) {
      const { name } = selectedFile;
      setSubHint(name);
    } else {
      setSubHint(defaultSubHint);
    }
  }, [selectedFile, defaultSubHint]);

  // Handle change file
  interface IHandleChangeFile {
    ({ target }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChangeFile: IHandleChangeFile = ({ target: { files } }) => {
    const file = files?.[0];

    if (file) {
      const { name, size } = file;

      // Checking the type of file
      if (
        accept &&
        !accept.some((type) => name.toLocaleLowerCase().endsWith(type))
      ) {
        alert(`File type must be ${accept.join(", ")}!`);
        setSelectedFile(null);
        return;
      }

      // Checking the size of the file
      if (maxSize > 0 && size > maxSize * 1024 ** 2) {
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

  return (
    <div className={clsx(className, "file")}>
      <div
        className={clsx("file__body", isActive && "file__body_active")}
        onDragOver={handleActivate}
        onDragLeave={handleDeactivate}
        onDrop={handleDeactivate}
      >
        <div className="file__box">
          <input
            className="file__input"
            type="file"
            accept={accept && accept.join(",")}
            onChange={handleChangeFile}
          />
          <span className="file__hint">
            <span>Upload a file</span> or drag and drop
          </span>
          <span className="file__sub-hint">{subHint}</span>
        </div>
      </div>
    </div>
  );
};

export default File;
