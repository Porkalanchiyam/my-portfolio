const Section = ({ children, linebreak = false }) => (
  <section
    className={`text-base sm:text-lg font-light leading-relaxed lg:w-4/5 2xl:w-2/3 text-gray-600 dark:text-gray-300 ${
      linebreak ? "mt-24 md:mt-32 xl:mt-44" : "mt-12"
    }`}
  >
    {children}
  </section>
);

export default Section;
