import React from "react";
import { useNavigate } from "react-router-dom";
import { Album } from "../types";
import style from "styled-components";
import { MIN_WIDTH } from "../constants";

const List = style.li`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 8px auto;

  @media (min-width: ${MIN_WIDTH}) {
    margin: "0px 16px 32px 16px";
  }
`;
const Img = style.img({
  width: "100%",
  margin: "0 auto",
});
const Title = style.p({
  color: "#fff",
  textAlign: "left",
  paddingTop: "4px",
  margin: 0,
});

type ComponentProps = {
  handleClickAlbum: () => void;
  album: Album;
};
export const Component: React.FC<ComponentProps> = ({
  handleClickAlbum,
  album,
}) => (
  <List onClick={handleClickAlbum}>
    <Img src={album.imageFile.path} alt={album.title} />
    <Title>{album.title}</Title>
  </List>
);

interface Props {
  album: Album;
}
const AlbumListItem: React.FC<Props> = ({ album }) => {
  const navigate = useNavigate();
  const handleClickAlbum = () => {
    navigate(`/detail/${album.id}`);
  };

  // TODO: aタグでリンクするべき
  return <Component handleClickAlbum={handleClickAlbum} album={album} />;
};

export default AlbumListItem;
