import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter Test", () => {
    let increaseBtn;
    let decreaseBtn;
    let count;

  beforeEach(()=>{
    render(<Counter/>);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0");
  })

  test("increase btn", () => {
    fireEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    fireEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
