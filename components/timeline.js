import React from "react";

const Timeline = ({
  data: {
    title,
    description,
  },
  icon: Icon,
  year,
}) => {
  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-white rounded-full ring-8 ring-white dark:ring-gray-700 dark:bg-gray-700">
        <Icon className="w-24 h-24 text-orange-400 dark:text-yellow-300" />
      </span>
      <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
        <div className="justify-between items-center mb-3 sm:flex">
          <time className="mb-1 text-md font-bold italic text-orange-400 dark:text-yellow-300 sm:order-last sm:mb-0">
            {year}
          </time>
          {title}
        </div>
        {
          description && (
            <div className="p-3 text-sm italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              {description}
            </div>
          )
        }
      </div>
    </li>
  );
};

export default Timeline;
