import { render, screen } from "@testing-library/react";
import Header from "../Header";

// unit test
it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const HeadingEl = screen.getByText(/my header/i);
  expect(HeadingEl).toBeInTheDocument();
});

// different query
// it("should render same text passed into title prop2", () => {
//   render(<Header title="My Header" />);
//   const HeadingEl = screen.getByRole("heading");
//   expect(HeadingEl).toBeInTheDocument();
// });

// different query
// it("should render same text passed into title prop3", () => {
//   render(<Header title="My Header" />);
//   const HeadingEl = screen.getByRole("heading", { name: "My Header" });
//   expect(HeadingEl).toBeInTheDocument();
// });

// it("should render Cats", () => {
//   render(<Header title="My Header" />);
//   const HeadingEl = screen.getByTitle("Header");
//   expect(HeadingEl).toBeInTheDocument();
// });

// it("should render same text passed into title prop4", () => {
//   render(<Header title="My Header" />);
//   const HeadingEl = screen.getByTestId("Header-1");
//   expect(HeadingEl).toBeInTheDocument();
// });

// // FIND borderStyle:
// it("should render same text passed into title prop5", async () => {
//   render(<Header title="My Header" />);
//   const HeadingEl = await screen.findByText(/my header/i);
//   expect(HeadingEl).toBeInTheDocument();
// });

// // QueryBy
// it("should render same text passed into title prop6", () => {
//   render(<Header title="My Header" />);
//   const HeadingEl = screen.queryByText(/dogs/i);
//   expect(HeadingEl).not.toBeInTheDocument();
// });

// // getAllBy
// it("should render same text passed into title prop7", () => {
//   render(<Header title="My Header" />);
//   const HeadingEls = screen.getAllByRole("heading");
//   expect(HeadingEls.length).toBe(2);
// });
