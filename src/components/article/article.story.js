import React from "react";
import { storiesOf } from "@storybook/react";
import { Article } from "./article";
import { StorybookConstants as constants } from "../../stories/utils";

storiesOf(`${constants.templates}/article`, module).add("Bob", () => (
  <Article name="bob" />
));
