import React from "react";
import Landing from "./landing";
import { shallow } from "enzyme";

test("<Landing />", () => {
  expect(shallow(<Landing name="bob" />).text() === "bob").toBeTruthy();
});
