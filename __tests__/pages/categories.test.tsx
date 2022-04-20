import { render, screen } from "@testing-library/react";
import Categories from "@/pages/categories";

jest.mock("../../lib/useUser", () => {
  return jest.fn(() => ({
    user: { id: 123 },
  }));
});

jest.mock("../../lib/useCategories", () => {
  return jest.fn(() => ({
    categories: ["Electronics", "jewelery"],
  }));
});

describe("CategoriesPage", () => {
  it("should render the page without exploding", () => {
    render(<Categories />);
    const heading = screen.getByText("Categories");
    expect(heading).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { container } = render(<Categories />);
    expect(container).toMatchSnapshot();
  });
});
