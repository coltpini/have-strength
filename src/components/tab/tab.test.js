import React from "react";
import Tab from "./tab";
import { shallow } from "enzyme";

test("<Tab />", () => {
  expect(shallow(<Tab name="bob" />).text() === "bob").toBeTruthy();
});
