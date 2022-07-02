import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Section from "../components/Section";
import pageConfig from "../config/page";

const {
  pageName,
  subtitle,
  title,
  subHeading,
  subContent,
} = pageConfig.homePage;

const IndexPage = () => {
  return (
    <Layout
      title={pageName}
      description={`${title} - ${subtitle}`}
      divClass="bg-gray-100 dark:bg-gray-900 pb-14 mb-14"
    >
      <PageTitle title={title} subtitle={subtitle} />

      <Section>
        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">{subHeading}</h2>
        <p className="my-2">
          {subContent}
        </p>
      </Section>
    </Layout>
  );
};

export default IndexPage;
