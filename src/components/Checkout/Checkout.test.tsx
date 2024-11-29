import { axe } from "jest-axe";
import { render, screen } from "test-utils";
import { Checkout } from "./";

describe("Checkout component", () => {
  it("opens without exploding", () => {
    render(<Checkout />);

    expect(screen.getByRole("main")).toBeDefined();
  });

  it("passes basic axe compliance", async () => {
    const { container } = render(<Checkout />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
