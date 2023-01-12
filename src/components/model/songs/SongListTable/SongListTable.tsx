// TODO: styled -> emotion 化

import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { Song } from "../../../../types";
import { SongListTableRow } from "../SongListTableRow";

type ComponentProps = {
  songs: Song[];
};

export const SongListTable: React.FC<ComponentProps> = ({ songs }) => (
  // 子コンポーネントにmarginをもたせたくない
  <TableContainer sx={{ width: "80%", m: "0 auto" }} component={Paper}>
    <Table aria-label="customized table">
      <TableBody data-testid="loaded">
        {songs.map((song) => (
          <SongListTableRow song={song} key={song.id} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
