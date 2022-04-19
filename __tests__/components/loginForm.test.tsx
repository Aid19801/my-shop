import { fireEvent, render, screen } from "@testing-library/react";
import { LoginForm } from "@/components/login-form";

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
    screen.getByLabelText("username");
  });
  // it("should capture the user's password as expected", () => {
  //   // render(<LoginForm />);
  //   // const el = screen.getByTestId("password");
  //   // el.simul
  //   // expect(container).toMatchSnapshot();
  // });
});
