import React from "react";
import Nav from "./nav";
import { shallow } from "enzyme";

test("<Nav />", () => {
  expect(shallow(<Nav name="bob" />).text() === "bob").toBeTruthy();
});
