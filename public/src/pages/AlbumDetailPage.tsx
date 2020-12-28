import React from "react";
import { useLocation } from "react-router";
import style from "styled-components";
import { Link, RouteComponentProps } from "react-router-dom";

const PageHeader = style.h1({
  fontSize: "2em",
});

interface Props extends RouteComponentProps<{}> {}

const AlbumDetailPage: React.FC<Props> = ({ history }) => {
  const location = useLocation();
  const albumId = location.pathname.split("/")[2];

  return (
    <div>
      <PageHeader>detail</PageHeader>
      <p>{albumId}</p>
      <Link to="/">もどる</Link>
    </div>
  );
};

export default AlbumDetailPage;
