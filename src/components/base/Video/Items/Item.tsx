import { FC } from "react";

interface ItemProps {
  video: string | string[];
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
    } else {
      return null;
    }
  };

  if (isArray) {
    const videos = video.map((videoItem) => {
      const type = `video/${getExtensionFromPath(videoItem)}`;

      return <source key={videoItem} src={videoItem} type={type} />;
    });

    return <>{videos}</>;
  }
  return <source src={video} type={`video/${getExtensionFromPath(video)}`} />;
};

export default Item;
