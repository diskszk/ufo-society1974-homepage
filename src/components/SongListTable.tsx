// TODO: styled -> emotion 化
import { useDispatch } from "react-redux";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  tableCellClasses,
} from "@mui/material";
import style from "styled-components";
import { Song } from "../types";
import { openLyricNote } from "../store/ModalStatusReducer";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Anchor = style.a({
  color: "#444",
  cursor: "pointer",
});

type ComponentProps = {
  songs: Song[];
  handleClickSong: (song: Song) => void;
};

export const Component: React.FC<ComponentProps> = ({
  songs,
  handleClickSong,
}) => (
  // 子コンポーネントにmarginをもたせたくない
  <TableContainer sx={{ width: "80%", m: "0 auto" }} component={Paper}>
    <Table aria-label="customized table">
      <TableBody data-testid="loaded">
        {songs.map((song) => (
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
              <Anchor onClick={() => handleClickSong(song)}>
                {song.title}
              </Anchor>
            </StyledTableCell>
            <StyledTableCell>{song.story}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

type Props = {
  songs: Song[];
};

export const SongListTable: React.FC<Props> = ({ songs }) => {
  const dispatch = useDispatch();
  const handleClickSong = (song: Song) => {
    dispatch(openLyricNote(song));
  };

  return <Component songs={songs} handleClickSong={handleClickSong} />;
};
