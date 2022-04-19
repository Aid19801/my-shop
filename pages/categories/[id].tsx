import * as React from "react";
import Layout from "components/layout";
import Card from "components/section-card";
import useUser from "lib/useUser";
import useCategories, { useCategory } from "lib/useCategories";
import { CategoryType } from "../api/category";
import { useRouter } from "next/router";
import PageTitle from "components/page-title";
import { ContentContainer } from "components/content-container";
import ProductCard from "components/product-card";

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
        <PageTitle text={`Products // ${query.id}`} />
        {!category && <p>Loading...</p>}
        <ContentContainer>
          {category &&
            category.map((each: CategoryType) => (
              <ProductCard
                key={each.id}
                title={each.title}
                description={each.description}
                img={each.image}
                height={240}
                width={400}
              />
            ))}
        </ContentContainer>
      </>
    </Layout>
  );
};

export default CategoryProductList;
