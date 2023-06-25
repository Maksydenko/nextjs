import { FC } from "react";

import { TypeVideo } from "@/types/video.type";

interface ItemProps {
  video: TypeVideo;
}

const Item: FC<ItemProps> = ({ video }) => {
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
    const videos = video.map((videoItem) => (
      <source key={videoItem} src={videoItem} type={getType(videoItem)} />
    ));

    return <>{videos}</>;
  }
  return <source src={video} type={getType(video)} />;
};

export default Item;
