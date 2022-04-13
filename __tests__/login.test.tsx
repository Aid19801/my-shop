import { render, screen } from "@testing-library/react";
import Login from "../pages/login";

describe("LoginPage", () => {
  it("should render the page without exploding", () => {
    render(<Login />);
    const heading = screen.getByText("Login");
    expect(heading).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
