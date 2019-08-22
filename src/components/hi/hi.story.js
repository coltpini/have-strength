import React from "react";
import { storiesOf } from "@storybook/react";
import { Hi } from "./hi";

storiesOf("Hi", module).add("Bob", () => <Hi name="bob" />);
