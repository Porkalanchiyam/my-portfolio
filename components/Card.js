import React from "react";

const Card = ({
  title,
  description,
  projectUrl,
  githubUrl,
}) => (
  <div className="mb-14 flex flex-col sm:flex-row w-full">
    <div className={`w-full text-gray-500 dark:text-gray-300 sm:w-4/5`}>
      <div className="text-2xl font-bold italic text-gray-600 dark:text-gray-100">{title}</div>
      <p className="font-normal mt-2">{description}</p>
      {
        githubUrl && (
          <a
            className="text-base mt-2 underline text-orange-400 dark:text-yellow-300 font-semibold italic transition-colors"
            href={githubUrl}
          >
            Github URL
          </a>
        )
      }
      {
        (githubUrl && projectUrl) && (
          <>
            &nbsp;
            &nbsp;
          </>
        )
      }
      {
        projectUrl && (
          <a
            className="text-base mt-2 underline text-orange-400 dark:text-yellow-300 font-semibold italic transition-colors"
            href={projectUrl}
          >
            Project URL
          </a>
        )
      }
    </div>
  </div>
);

export default Card;
