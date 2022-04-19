import React from "react";
import Layout from "../../components/layout";
import useUser from "lib/useUser";
import useCategories from "lib/useCategories";
import ProductCard from "components/product-card";
import PageTitle from "components/page-title";
import { ContentContainer } from "components/content-container";

export default function ProductsIndexPage() {
  const { user } = useUser({
    redirectTo: "/login",
  });

  const { categories } = useCategories(user);

  if (!user) {
    return <h1>You are not signed in...</h1>;
  } else {
    return (
      <Layout>
        <PageTitle text="All Our Products" />
        {/* <ContentContainer>
          {categories?.length &&
            categories.map((each: string) => (
              <ProductCard
                title={each}
                key={each}
                destinationFolder="categories"
                slug={each}
                height={200}
                width={300}
              />
            ))}
        </ContentContainer> */}
      </Layout>
    );
  }
}
