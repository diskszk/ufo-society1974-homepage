import React from "react";
import { useDispatch } from "react-redux";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";
import style from "styled-components";
import { Song } from "../types";
import { openLyricNote } from "../store/ModalStatusReducer";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  tableContainer: {
    width: "80%",
    margin: "0 auto",
  },
  table: {},
  songNo: {
    width: "5%",
  },
});

const Anchor = style.a({
  color: "#444",
  cursor: "pointer",
});

type Props = {
  songs: Song[];
};

const SongListTable: React.FC<Props> = ({ songs }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClickSong = (song: Song) => {
    dispatch(openLyricNote(song));
  };

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {songs.map((song) => (
            <StyledTableRow key={song.id}>
              <StyledTableCell
                className={classes.songNo}
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
};

export default SongListTable;
