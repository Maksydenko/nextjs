import { FC } from "react";

import { TypeVideo } from "./video.type";

interface SourcesProps {
  video: TypeVideo;
}

const Sources: FC<SourcesProps> = ({ video }) => {
  const isArray = Array.isArray(video);

  // Get extension from path
  interface IGetExtensionFromPath {
    (path: string): string | null;
  }
  const getExtensionFromPath: IGetExtensionFromPath = (path) => {
    const regex = /(?:\.([^.]+))?$/;
    const matches = regex.exec(path);

    if (matches && matches[1]) {
      return matches[1];
    }
    return null;
  };

  // Get type
  interface IGetType {
    (path: string): string;
  }
  const getType: IGetType = (path) => {
    return `video/${getExtensionFromPath(path)}`;
  };

  if (isArray) {
    return video.map((item) => (
      <source key={item} src={item} type={getType(item)} />
    ));
  }
  return <source src={video} type={getType(video)} />;
};

export default Sources;
