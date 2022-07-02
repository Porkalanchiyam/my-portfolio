import SocialIcons from "./SocialIcons";

const PageTitle = ({
  title,
  subtitle = "",
  center = false,
  icons = true,
  marginTop = "mt-14 lg:mt-32",
}) => (
  <div className={`${marginTop} font-light w-full text-black dark:text-white`}>
    <h1 className={`text-4xl sm:text-5xl lg:text-6xl mb-2 ${center && "text-center"}`}>
      {title}
    </h1>
    {subtitle && (
      <p className={`text-2xl ${center && "text-center mx-auto"} sm:text-3xl lg:text-4xl w-11/12 sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-3/5`}>
        {subtitle}
      </p>
    )}
    {icons && <SocialIcons />}
  </div>
);

export default PageTitle;
