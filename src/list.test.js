import React from "react";
import ReactDom from "react-dom";
import List from "./List";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<List />, div);
  ReactDom.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(<List />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
