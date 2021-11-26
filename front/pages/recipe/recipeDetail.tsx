import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
const RecipeDetail = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="cont-section">
        <Link href="/recipe/recipeLists">
          <a>recipe list</a>
        </Link>
      </section>
    </Layout>
  );
};
export default RecipeDetail;
