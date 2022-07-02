import React from "react";

import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Timeline from "../components/timeline";
import pageConfig from "../config/page";

const {
  subtitle,
  title,
  timelineData,
} = pageConfig.timelinePage;

const TimelinePage = () => {
  return (
    <Layout
      title={title}
      description={`${title} - ${subtitle}`}
      divClass="bg-gray-100 dark:bg-gray-900 pb-14 mb-14"
    >
      <PageTitle
        icons={false}
        title={title}
        marginTop="mt-12 lg:mt-12"
      />
      <ol className="relative border-l mt-20 border-gray-200 dark:border-gray-700">
        {
          timelineData.map((item, index) => (
            <Timeline
              key={index}
              data={item.data}
              icon={item.icon}
              year={item.year}
            />
          ))
        }
      </ol>
    </Layout>
  );
};

export default TimelinePage;
