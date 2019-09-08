import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Card />, div);
  ReactDom.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
  .create(<Card />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
