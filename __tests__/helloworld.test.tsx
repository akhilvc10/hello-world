import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import * as React from "react";

import HelloWorld from "../src/components/HelloWorld";

test("Should render helloworld component", () => {
  render(<HelloWorld />);
  const testEl = screen.getByTestId("hello");
  expect(testEl).toBeInTheDocument();
  expect(testEl).toHaveTextContent("Hello world");
});
