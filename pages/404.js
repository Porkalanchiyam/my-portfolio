import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "../components/Layout";
import Link from "../components/Link";
import PageTitle from "../components/PageTitle";
import pageConfig from "../config/page";

const {
  subtitle,
  title,
} = pageConfig.notFound;

const NotFound = () => {
  return (
    <AnimatePresence>
      <Layout
        title={title}
        description={`${title} - ${subtitle}`}
        divClass="bg-gray-100 dark:bg-gray-900 pb-12 mb-10"
      >
        <PageTitle
          title={title}
          subtitle={subtitle}
          center
          icons={false}
          marginTop="mt-12 lg:mt-12 font-bold"
        />
        <Link href={"/"}>
          <a className="text-balck dark:text-white mt-5 text-center font-medium text-xl mx-auto">
            Back Home
            <motion.div
              layoutId="navigation-underline"
              className="navigation-underline"
              initial={{
                borderWidth: "0px",
                marginLeft: "0px",
                marginRight: "0px",
              }}
              animate={{
                borderWidth: "1px",
                marginRight: ["2px", "0px", "2px", "0px"],
                marginLeft: ["0px", "2px", "0px", "2px", "0px"],
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              exit={{
                borderWidth: "0px",
                marginLeft: "0px",
                marginRight: "0px",
              }}
            />
          </a>
        </Link>
      </Layout>
    </AnimatePresence>
  );
};

export default NotFound;
