import React from "react";
import Layout from "../../components/layout";
import useUser from "lib/useUser";
import useCategories from "lib/useCategories";
import Card from "components/card";

export default function Categories() {
  const { user } = useUser({
    redirectTo: "/login",
  });
  const { categories } = useCategories(user);

  if (!user) {
    return <h1>You are not signed in...</h1>;
  } else {
    return (
      <Layout>
        <h1>Categories Page</h1>
        <div className="categories__container">
          {categories?.length &&
            categories.map((each: string) => (
              <Card
                title={each}
                key={each}
                destinationFolder="categories"
                slug={each}
              />
            ))}
        </div>
        <style jsx>{`
          h1 {
            text-align: center;
            font-family: monospace;
            font-size: 50px;
          }
          .categories__container {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
            align-items: stretch;
            gap: 30px;
          }
        `}</style>
      </Layout>
    );
  }
}
