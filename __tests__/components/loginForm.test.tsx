import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../../components/login-form";

const MOCK_USERNAME = "foo-name";
const MOCK_PASSWORD = "foo-pw12";

describe("LoginForm", () => {
  it("should render the component without exploding", () => {
    render(<LoginForm onSubmit={() => null} errorMsg="foo" />);
    const form = screen.getByTestId("login-form");
    expect(form).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { container } = render(
      <LoginForm onSubmit={() => null} errorMsg="foo" />
    );
    expect(container).toMatchSnapshot();
  });
  it("should capture the user's username as expected", () => {
    render(<LoginForm onSubmit={() => null} errorMsg="foo-err" />);
    const input = screen.getByPlaceholderText("username");
    fireEvent.change(input, { target: { value: MOCK_USERNAME } });
    // @ts-ignore
    expect(input.value).toBe(MOCK_USERNAME);
  });
  it("should capture the user's password as expected", () => {
    render(<LoginForm onSubmit={() => null} errorMsg="foo-err" />);
    const input = screen.getByPlaceholderText("password");
    fireEvent.change(input, { target: { value: MOCK_PASSWORD } });
    // @ts-ignore
    expect(input.value).toBe(MOCK_PASSWORD);
  });
});
