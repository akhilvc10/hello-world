import "@testing-library/jest-dom";

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";

import HelloWorld from "../src/components/HelloWorld";

afterAll(() => {
  cleanup();
});

// test("Should render helloworld component", () => {
//   render(<HelloWorld />);
//   const testEl = screen.getByTestId("hello");
//   expect(testEl).toBeInTheDocument();
//   expect(testEl).toHaveTextContent("Hello world");
// });
test("should upload the file", () => {
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  render(<HelloWorld />);

  const input = screen.getByTestId("element");
  userEvent.upload(input, file);
  wait(5000);
  expect(input.files[0]).toEqual(file);
  expect(input.files).toHaveLength(1);
  expect(screen.getByText(/hello\.png/)).toBeInTheDocument();
});
