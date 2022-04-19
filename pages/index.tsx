import PageTitle from "components/page-title";
import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <PageTitle text="My Store" />

      <p>Welcome to My Store. A Place to buy things.</p>

      <style jsx>{`
        p {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
}
