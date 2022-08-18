import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

// react-router-dom을 사용하기 위해 wrapping
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  it("Should render task count is visible to users", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphEl = screen.getByText(/1 task left/i);
    expect(paragraphEl).toBeVisible();
  });

  it("Should render the correct amount of imcomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphEl = screen.getByText(/5 tasks left/i);
    expect(paragraphEl).toBeInTheDocument();
  });

  it("Should render 'task' when the number of imcomplete task is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphEl = screen.getByText(/1 task left/i);
    expect(paragraphEl).toBeInTheDocument();
  });
});

// it("TodoFooter should have p tag", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphEl = screen.getByText(/1 task left/i);
//   expect(paragraphEl).toContainHTML("p");
// });

// it("should have a certain text content", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphEl = screen.getByText(/1 task left/i);
//   expect(paragraphEl).toHaveTextContent("task");
// });

// it("should have a certain text content2", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphEl = screen.getByText(/1 task left/i);
//   expect(paragraphEl.textContent).toBe("1 task left");
// });
