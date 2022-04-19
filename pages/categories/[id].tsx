import * as React from "react";
import Layout from "components/layout";
import Card from "components/card";
import useUser from "lib/useUser";
import useCategories, { useCategory } from "lib/useCategories";
import { CategoryType } from "../api/category";
import { useRouter } from "next/router";

export const CategoryProductList = () => {
  const { user } = useUser({
    redirectTo: "/login",
  });
  const { query } = useRouter();
  // @ts-ignore
  const { category } = useCategory(user, query.id);

  if (!user) {
    return <h1>You are not signed in...</h1>;
  }
  return (
    <Layout>
      <>
        <h1>Products List</h1>
        {!category && <p>Loading...</p>}
        <div className="productList__container">
          {category &&
            category.map((each: CategoryType) => (
              <Card
                key={each.id}
                title={each.title}
                description={each.description}
                destinationFolder="products"
                slug={each.id.toString()}
                img={each.image}
              />
            ))}
        </div>
      </>
      <style jsx>{`
        h1 {
          text-align: center;
          font-family: monospace;
          font-size: 50px;
        }
        .productList__container {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-around;
          align-items: stretch;
          gap: 30px;
        }
        .productList__container > a.card {
          flex: 1;
          padding: 16px;
          margin-right: 20px;
          color: red;
        }
      `}</style>
    </Layout>
  );
};

export default CategoryProductList;
