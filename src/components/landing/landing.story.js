import React from "react";
import { storiesOf } from "@storybook/react";
import { Landing } from "./landing";
import { StorybookConstants as constants } from "../../stories/utils";

storiesOf(`${constants.templates}/Landing`, module).add("Bob", () => (
  <Landing name="bob" />
));
