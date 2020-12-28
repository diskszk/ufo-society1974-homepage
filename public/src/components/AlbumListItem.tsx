import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";
import { Album } from "../types";
import style from "styled-components";

interface Props extends RouteComponentProps<{}> {
  album: Album;
}
const List = style.li({
  display: "flex",
  flexDirection: "column",
  margin: "0px 16px 32px 16px",
});
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

const AlbumListItem: React.FC<Props> = ({ album, history }) => {
  const handleClickAlbum = () => {
    history.push(`/detail/${album.id}`);
  };

  return (
    <List onClick={handleClickAlbum}>
      <Img src={album.imageFile.path} alt={album.title} />
      <Title>{album.title}</Title>
    </List>
  );
};

export default withRouter(AlbumListItem);
