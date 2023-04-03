import { render, screen, fireEvent } from "@testing-library/react";

import Todo from "./Todo";

describe("Todo test", () => {
  let addBtn, input;
  beforeEach = () => {
    render(<Todo />);
    addBtn=screen.getByText("Add");
    input=screen.getByLabelText("Text")
  };

test('should ', () => {
  expect(addBtn).toBeInTheDocument();
  expect(input).toBeInTheDocument();
})

 
});
