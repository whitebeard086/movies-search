import { Header, Movies, Search } from "../src/components";
import { Layout } from "../src/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Movies />
      </Layout>
    </>
  );
}
