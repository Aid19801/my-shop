import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../../components/login-form";

const MOCK_USERNAME = "foo-name";
const MOCK_PASSWORD = "foo-pw12";

describe("LoginForm", () => {
  it("should render the component without exploding", () => {
    render(<LoginForm onSubmit={() => null} errorMsg="foo" />);
    const el = screen.getByTestId("login-form");
    expect(el).toBeInTheDocument();
  });
  // it("should match snapshot", () => {
  //   const { container } = render(
  //     <LoginForm onSubmit={() => null} errorMsg="foo" />
  //   );
  //   expect(container).toMatchSnapshot();
  // });
  it("should capture the user's username as expected", () => {
    render(<LoginForm onSubmit={() => null} errorMsg="foo" />);
    const el = screen.getByPlaceholderText("username");
    // @ts-ignore
    fireEvent.change(el, { target: { value: "my name" } });
    expect(el).toHaveValue("my name");
  });
  // it("should capture the user's password as expected", () => {
  //   //
  // });
});
