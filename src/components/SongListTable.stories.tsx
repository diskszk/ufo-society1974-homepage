import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Component } from "./SongListTable";
import { mockSongs } from "../mocks/mockData";

export default {
  title: "components/SongListTable",
  component: Component,
} as ComponentMeta<typeof Component>;

type Props = ComponentProps<typeof Component>;

export const SongListTable: ComponentStoryObj<typeof Component> = {
  args: {
    songs: mockSongs,
    handleClickSong: () => void 0,
  } as Props,
};
