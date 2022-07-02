import React from "react";

import Layout from "../components/Layout";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import pageConfig from "../config/page";

const {
  title,
  subtitle,
  getProjects,
} = pageConfig.portfolioPage;

const PortfolioPage = ({
  projects = [],
}) => {
  return (
    <Layout
      title={title}
      description={subtitle}
      divClass="bg-gray-100 dark:bg-gray-900 pb-14 mb-14"
    >
      <PageTitle
        title={title}
        subtitle={subtitle}
        icons={false}
        marginTop="mt-12 lg:mt-12"
      />
      <Section>
        {projects.map(({ title, description, projectUrl, githubUrl }, idx) => (
          <Card
            key={idx}
            title={title}
            description={description}
            projectUrl={projectUrl}
            githubUrl={githubUrl}
          />
        ))}
      </Section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  }
};

export default PortfolioPage;
