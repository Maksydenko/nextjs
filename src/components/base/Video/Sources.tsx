import { FC } from "react";

import { TypeLocalVideo } from "./localVideo.type";

interface SourcesProps {
  video: TypeLocalVideo;
}

const Sources: FC<SourcesProps> = ({ video }) => {
  // Handle extension from path
  interface IHandleExtensionFromPath {
    (path: string): string | null;
  }
  const handleExtensionFromPath: IHandleExtensionFromPath = (path) => {
    const regex = /(?:\.([^.]+))?$/;
    const matches = regex.exec(path);

    if (matches && matches[1]) {
      return matches[1];
    }
    return null;
  };

  // Handle type
  interface IHandleType {
    (path: string): string;
  }
  const HandleType: IHandleType = (path) => {
    return `video/${handleExtensionFromPath(path)}`;
  };

  if ( Array.isArray(video)) {
    return video.map((item) => (
      <source key={item} src={item} type={HandleType(item)} />
    ));
  }
  return <source src={video} type={HandleType(video)} />;
};

export default Sources;
