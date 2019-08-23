import React from "react";
import Tabs from "./tabs";
import { shallow } from "enzyme";

test("<Tabs />", () => {
  expect(shallow(<Tabs name="bob" />).text() === "bob").toBeTruthy();
});
