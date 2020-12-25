import React from "react";
import { Album } from "../../types";

type Props = {
  album: Album;
};

const AlbumItem: React.FC<Props> = ({ album }) => {
  return <li>{album.title}</li>;
};

export default AlbumItem;
