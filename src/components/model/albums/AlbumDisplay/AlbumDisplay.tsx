import { Album } from "../../../../types";
import { ServiceList } from "../../../ServiceList";
import { StyledContainer, StyledImage, StyledParagraph } from "./styles";

type Props = {
  album: Album;
};

export const AlbumDisplay: React.FC<Props> = ({ album }) => {
  return (
    <StyledContainer>
      <StyledImage src={album.imageFile.path} alt={album.title} />
      {/* TODO: 不要になる要件 */}
      {album?.publishPlatform && (
        <ServiceList services={album?.publishPlatform} />
      )}
      {album?.description !== "" && (
        <StyledParagraph>{album.description}</StyledParagraph>
      )}
    </StyledContainer>
  );
};
