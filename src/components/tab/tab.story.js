import React from "react";
import { storiesOf } from "@storybook/react";
import { Tab } from "./tab";
import { StorybookConstants as constants } from "../../stories/utils";

storiesOf(`${constants.components}/Tab`, module)
  .add("default", () => (
    <Tab name="bob">
      <p>something that is here for text</p>
    </Tab>
  ))
  .add("active", () => (
    <Tab name="bob" active>
      <p>something that is here for text</p>
    </Tab>
  ));
