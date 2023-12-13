import {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import clsx from 'clsx';

import { TypeSetState } from '~/types/setState.type';

interface FileProps {
  className?: string;
  modifier?: string;
  selectedFile: File | null;
  setSelectedFile: TypeSetState<File | null>;
  types?: string[];
  maxSize?: number;
}

const UploadFile: FC<FileProps> = ({
  className,
  modifier,
  selectedFile,
  setSelectedFile,
  types,
  maxSize = 10,
}) => {
  const [ isActive, setIsActive ] = useState(false);

  const defaultSubHint = `${ types ? types.join(', ') : '' } file${
    maxSize > 0 ? ` up to ${ maxSize }MB` : ''
  }`;
  const [ subHint, setSubHint ] = useState(defaultSubHint);

  useEffect(() => {
    if (selectedFile) {
      const { name } = selectedFile;
      setSubHint(name);
    } else {
      setSubHint(defaultSubHint);
    }
  }, [ selectedFile, defaultSubHint ]);

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
        types
        && !types.some((type) => name.toLocaleLowerCase().endsWith(type))
      ) {
        alert(`File type must be ${ types.join(', ') }!`);
        setSelectedFile(null);
        return;
      }

      // Checking the size of the file
      if (maxSize > 0 && size > maxSize * 1024 ** 2) {
        alert(`File size should not exceed ${ maxSize }MB!`);
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
    <div className={ clsx(`${ className }__upload-file`, modifier, 'upload-file') }>
      <div
        className={ clsx(
          'upload-file__body',
          isActive && 'upload-file__body_active',
        ) }
        onDragOver={ handleActivate }
        onDragLeave={ handleDeactivate }
        onDrop={ handleDeactivate }
      >
        <div className="upload-file__box">
          <input
            className="upload-file__input"
            type="file"
            accept={ types && types.join(',') }
            onChange={ handleChangeFile }
          />
          <span className="upload-file__hint">
            <span>Upload a file</span>
            {' '}
            or drag and drop
          </span>
          <span className="upload-file__sub-hint">{subHint}</span>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
