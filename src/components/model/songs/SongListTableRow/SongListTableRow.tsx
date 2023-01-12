import { useDispatch } from "react-redux";
import { StyledAnchor, StyledTableCell, StyledTableRow } from "./styles";
import { openLyricNote } from "../../../../store/ModalStatusReducer";
import { Song } from "../../../../types";

type Props = {
  song: Song;
};

export const SongListTableRow: React.FC<Props> = ({ song }) => {
  const dispatch = useDispatch();
  const handleClickSong = (song: Song) => {
    dispatch(openLyricNote(song));
  };

  return (
    <StyledTableRow key={song.id}>
      <StyledTableCell
        sx={{ width: "5%" }}
        component="th"
        scope="row"
        align="right"
      >
        {song.id}
      </StyledTableCell>
      <StyledTableCell>
        <StyledAnchor onClick={() => handleClickSong(song)}>
          {song.title}
        </StyledAnchor>
      </StyledTableCell>
      <StyledTableCell>{song.story}</StyledTableCell>
    </StyledTableRow>
  );
};
