import { FaSchool } from "react-icons/fa";
import { IoLogoJavascript, IoMdSchool } from "react-icons/io";

import Link from "../../components/Link";

const config = {
  title: "Timeline ⌛",
  subtitle: "The timeline of my life.",
  timelineData: [
    {
      year: `Oct 2022 - Present`,
      icon: IoLogoJavascript,
      data: {
        title: (
          <div className="text-md font-bold text-gray-500 lex dark:text-gray-300">
            Worked at{" "}
            <Link href="https://botvfx.com/">
              <a className="text-orange-400 dark:text-yellow-300 italic">
               Botvfx
              </a>
            </Link>{" "}
            as Full-Stack Developer.
          </div>
        ),
        description: `Joined Botvfx as a Full-Stack Developer.
        Worked primarily on developing Business Management Platform.
        Worked closely with the Senior Executives to design and develop the platform.`,
      },
    },
    {
      year: `Dec 2020 - Oct 2022`,
      icon: IoLogoJavascript,
      data: {
        title: (
          <div className="text-md font-bold text-gray-500 lex dark:text-gray-300">
            Worked at{" "}
            <Link href="https://crayond.com">
              <a className="text-orange-400 dark:text-yellow-300 italic">
                Crayon&apos;d
              </a>
            </Link>{" "}
            as Full-Stack Developer.
          </div>
        ),
        description: `Joined Crayon'd as a Full-Stack Developer.
        Worked primarily on a end to end health care platform.
        Worked closely with the client to design and develop the platform.`,
      },
    },
    {
      year: 2020,
      icon: IoMdSchool,
      data: {
        title: (
          <div className="text-md font-bold text-gray-500 lex dark:text-gray-300">
            Graduated{" "}
            <Link href="http://www.adhiyamaan.ac.in/anew/">
              <a className="text-orange-400 dark:text-yellow-300 italic">
                College
              </a>
            </Link>
          </div>
        ),
        description: "Graduated College with a Degree in Chemical Engineering.",
      },
    },
    {
      year: 2016,
      icon: FaSchool,
      data: {
        title: (
          <div className="text-md font-bold text-gray-500 lex dark:text-gray-300">
            Graduated{" "}
            <Link href="http://www.nationalschoolrm.com/">
              <a className="text-orange-400 dark:text-yellow-300 italic">
                School
              </a>
            </Link>
          </div>
        ),
        description: "Graduated School.",
      },
    },
  ],
};

export default config;
