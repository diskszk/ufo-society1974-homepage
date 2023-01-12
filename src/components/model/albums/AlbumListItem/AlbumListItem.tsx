import { Link } from "react-router-dom";
import { AltImageFile } from "../../../../constants";
import { Album } from "../../../../types";
import { StyledList, StyledImage, StyledParagraph } from "./styles";

type ComponentProps = {
  handleClickAlbum: () => void;
  album: Album;
};
export const Component: React.FC<ComponentProps> = ({
  handleClickAlbum,
  album,
}) => (
  <StyledList onClick={handleClickAlbum} data-testid="loaded">
    <Link to={`/detail/${album.id}`}>
      <StyledImage src={album.imageFile.path} alt={album.title} />
      <StyledParagraph>{album.title}</StyledParagraph>
    </Link>
  </StyledList>
);

type Props = {
  album: Album;
};
export const AlbumListItem: React.FC<Props> = (props) => {
  let album: Album;

  if (props.album.imageFile === null) {
    album = { ...props.album, imageFile: AltImageFile };
  } else {
    album = { ...props.album };
  }

  // const navigate = useNavigate();
  const handleClickAlbum = () => {
    // navigate(`/detail/${album.id}`);
  };

  // TODO: aタグでリンクするべき
  return <Component handleClickAlbum={handleClickAlbum} album={album} />;
};
