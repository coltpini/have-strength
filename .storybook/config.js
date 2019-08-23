import { addParameters, configure } from "@storybook/react";
import "../src/index.css";

addParameters({
  options: {
    name: "Be Strong",
    sortStoriesByKind: true
  }
});

configure(() => {
  require("../src/stories");

  const req = require.context("../src/components", true, /.story.js$/);
  req.keys().forEach(filename => req(filename));
}, module);
