import { FC } from "react";

import { IVideo } from "../video.interface";

interface ItemProps {
  video: IVideo | IVideo[];
}

const Item: FC<ItemProps> = ({ video }) => {
  const isArray = Array.isArray(video);

  if (isArray) {
    const videos = video.map((videoItem, index) => (
      <source
        key={index}
        src={videoItem.src}
        type={`video/${videoItem.type}`}
      />
    ));

    return <>{videos}</>;
  }
  return <source src={video.src} type={`video/${video.type}`} />;
};

export default Item;
