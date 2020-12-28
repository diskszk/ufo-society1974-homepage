import React from "react";
import { Services } from "../types";
import Itunes from "react-svg-loader!../../assets/images/apple-itunes.svg";
import AppleMusic from "react-svg-loader!../../assets/images/apple-music.svg";
import Spotify from "react-svg-loader!../../assets/images/spotify-logo.svg";
import BandCamp from "react-svg-loader!../../assets/images/bandcamp.svg";
import styled from "styled-components";

type Props = {
  services: Services;
};

const Ul = styled.ul({
  maxHeight: "64px",
  backgroundColor: "rgba(238, 238, 238, .85)",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  borderRadius: "4px",
});
const LogoList = styled.li({
  height: "60px",
  margin: "auto 2px",
  cursor: "pointer",
});

const ServiceList: React.FC<Props> = ({ services }) => {
  return (
    <Ul>
      {services.iTunes && (
        <LogoList>
          <a href={services.iTunes} target="_blank" rel="noopener noreferrer">
            <Itunes width={100} height={"100%"} />
          </a>
        </LogoList>
      )}
      {services.AppleMusic && (
        <LogoList>
          <a
            href={services.AppleMusic}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleMusic width={100} height={"100%"} />
          </a>
        </LogoList>
      )}
      {services.Spotify && (
        <LogoList>
          <a href={services.Spotify} target="_blank" rel="noopener noreferrer">
            <Spotify width={100} height={"100%"} />
          </a>
        </LogoList>
      )}
      {services.Bandcamp && (
        <LogoList>
          <a href={services.Bandcamp} target="_blank" rel="noopener noreferrer">
            <BandCamp width={100} height={"100%"} />
          </a>
        </LogoList>
      )}
    </Ul>
  );
};

export default ServiceList;
