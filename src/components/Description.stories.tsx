/* eslint-disable import/no-default-export */

import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Description } from "./Description";

export default {
  title: "components/Description",
  component: Description,
} as ComponentMeta<typeof Description>;

type Props = ComponentProps<typeof Description>;

export const DefaultDescription: ComponentStoryObj<typeof Description> = {
  args: {
    description: "XXXXXXXXXX",
  } as Props,
};
