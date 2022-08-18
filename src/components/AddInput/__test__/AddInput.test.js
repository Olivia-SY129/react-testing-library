import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputEl).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputEl, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputEl.value).toBe("Go Grocery Shopping");
  });

  it("should have empty input when add button is clicked", () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonEl = screen.getByRole("button", { name: /Add/ });
    fireEvent.change(inputEl, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(buttonEl);

    expect(inputEl.value).toBe("");
  });
});
