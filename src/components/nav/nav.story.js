import React from "react";
import { storiesOf } from "@storybook/react";
import { Nav } from "./nav";
import { StorybookConstants as constants } from "../../stories/utils";

storiesOf(`${constants.components}/Nav`, module).add("Bob", () => (
  <Nav name="bob" />
));
