import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HelloWorld from "../HelloWorld";

test("Should render helloworld component", () => {
  render(<HelloWorld />);
  const testEl = screen.getByTestId("hello");
  expect(testEl).toBeInTheDocument();
  expect(testEl).toHaveTextContent("Hello world");
});
