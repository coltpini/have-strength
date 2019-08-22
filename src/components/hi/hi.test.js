import React from "react";
import Hi from "./hi";
import { shallow } from "enzyme";

test("<Hi />", () => {
  expect(shallow(<Hi name="bob" />).text() === "bob").toBeTruthy();
});
