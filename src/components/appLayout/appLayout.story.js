import React from "react";
import { storiesOf } from "@storybook/react";
import { AppLayout } from "./appLayout";
import { StorybookConstants as constants } from "../../stories/utils";

storiesOf(`${constants.templates}/AppLayout`, module).add("Default", () => (
  <AppLayout />
));
