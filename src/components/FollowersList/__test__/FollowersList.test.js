import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("Should render follower items component", async () => {
    render(<MockFollowersList />);
    const follwerDivEl = await screen.findByTestId("follower-item-0");
    screen.debug();
    expect(follwerDivEl).toBeInTheDocument();
  });

  it("Should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const follwerDivEls = await screen.findAllByTestId(/follower-item-/i);
    expect(follwerDivEls.length).toBe(5);
  });
});
