import { PublishPlatform } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faItunes,
  faSpotify,
  faBandcamp,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  services: PublishPlatform;
};

const Ul = styled.ul({
  maxHeight: "128px",
  backgroundColor: "rgba(20, 20, 20, .5)",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  borderRadius: "4px",
});
const LogoList = styled.li({
  paddingTop: "4px",
  height: "64px",
  width: "20%",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
});
const LogoP = styled.p({
  margin: 0,
  fontSize: "8px",
  color: "#eee",
});

export const ServiceList: React.FC<Props> = ({ services }) => {
  return (
    <Ul>
      {services.iTunes && (
        <LogoList>
          <a href={services.iTunes} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faItunes as IconDefinition} size="2x" />
            <LogoP>iTunes</LogoP>
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
            <FontAwesomeIcon icon={faApple as IconDefinition} size="2x" />
            <LogoP>Apple Music</LogoP>
          </a>
        </LogoList>
      )}
      {services.Spotify && (
        <LogoList>
          <a href={services.Spotify} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify as IconDefinition} size="2x" />
            <LogoP>Spotify</LogoP>
          </a>
        </LogoList>
      )}
      {services.Bandcamp && (
        <LogoList>
          <a href={services.Bandcamp} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBandcamp as IconDefinition} size="2x" />
            <LogoP>BandCamp</LogoP>
          </a>
        </LogoList>
      )}
    </Ul>
  );
};
