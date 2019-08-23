import React from "react";
import Article from "./article";
import { shallow } from "enzyme";

test("<Article />", () => {
  expect(shallow(<Article name="bob" />).text() === "bob").toBeTruthy();
});
