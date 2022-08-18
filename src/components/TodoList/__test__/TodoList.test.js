import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoList from "../TodoList";

const mockedSetTodos = jest.fn();

const MockTodoList = ({ todos, setTodos }) => {
  return (
    <BrowserRouter>
      <TodoList todos={["Read A Book"]} setTodos={mockedSetTodos} />
    </BrowserRouter>
  );
};

describe("TodoList", () => {
  it("should render TodoList element", () => {});
});
