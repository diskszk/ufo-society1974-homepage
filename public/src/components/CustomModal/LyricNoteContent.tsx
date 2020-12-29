import React from "react";
import { Content, LyricNote } from "./styles";
import CustomButton from "../CustomButton";

const LyricNoteContent: React.FC = () => {
  return (
    <Content>
      <LyricNote>
        <p>歌詞</p>
      </LyricNote>
      <CustomButton label="とじる" handleClick={() => alert("閉じましたよ")} />
    </Content>
  );
};

export default LyricNoteContent;
