import { render, screen } from "@testing-library/react";
import { LoginForm } from "./";

describe("LoginForm", () => {
  it("should render the component without exploding", () => {
    render(<LoginForm />);
    const form = screen.getByTestId("login-form");
    expect(form).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });
  it("should capture the user's username as expected", () => {
    render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });
});
