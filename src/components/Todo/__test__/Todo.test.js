import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonEl = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputEl, { target: { value: "Go Grocery Shopping" } });
    fireEvent.click(buttonEl);
  });
};

describe("Todo", () => {
  it("Should render same text passed into title prop", () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"]);
    const listEl = screen.getByText(/Go Grocery Shopping/i);
    expect(listEl).toBeInTheDocument();
  });

  it("Should render multiple items", () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping", "Pet my Cats", "Wash my Hands"]);
    const listEls = screen.getAllByTestId("task-container");
    expect(listEls.length).toBe(3);
  });

  it("task should not have completed class when initially rendered", () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"]);
    const listEl = screen.getByText(/Go Grocery Shopping/i);
    expect(listEl).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked", () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"]);
    const listEl = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(listEl);
    expect(listEl).toHaveClass("todo-item-active");
  });
});
