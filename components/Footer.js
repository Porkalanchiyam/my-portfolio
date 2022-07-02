import SocialIcons from "./SocialIcons";
import socialConfig from "../config/social";

const Footer = () => (
  <footer className="w-full flex flex-col items-center">
    <SocialIcons />
    <a
      className="text-sm mb-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
      href={`mailto:${socialConfig.email}?Subject=Hello`}
    >
      {socialConfig.email}
    </a>
    {/* <a
      className="text-sm mb-8 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
      href="https://wallis.dev"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      Inspired From.
    </a> */}
  </footer>
);

export default Footer;
