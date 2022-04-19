import useSWR from "swr";
import type { User } from "pages/api/user";
import type { Categories } from "pages/api/categories";
import type { Category } from "pages/api/category";

export default function useCategories(user: User | undefined) {
  const { data: categories } = useSWR<Categories>(
    user?.isLoggedIn ? `/api/categories` : null
  );

  return { categories };
}

export function useCategory(user: User | undefined, catName: string) {
  const { data: category } = useSWR<Category>(
    user?.isLoggedIn ? `/api/category?catName=${catName}` : null
  );

  return { category };
}
