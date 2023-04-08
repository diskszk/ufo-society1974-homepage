import { Album } from "../../../../types";
import { StyledContainer, StyledImage } from "./styles";

type Props = {
  album: Album;
};

export const AlbumDisplay: React.FC<Props> = ({ album }) => {
  return (
    <StyledContainer>
      <StyledImage src={album.imageFile.path} alt={album.title} />
    </StyledContainer>
  );
};
