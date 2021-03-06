import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";

import { isActiveLink } from "../lib/utils";
import Link from "./Link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Timeline",
    href: "/timeline",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

const NavItems = () => {
  const router = useRouter();

  return (
    <AnimateSharedLayout>
      <nav className="flex">
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a className="mr-6 sm:mr-8 flex flex-col relative">
              {name}
              {isActiveLink(href, router.pathname) && (
                <motion.div
                  layoutId="navigation-underline"
                  className="navigation-underline"
                  animate
                />
              )}
            </a>
          </Link>
        ))}
      </nav>
    </AnimateSharedLayout>
  );
};

export default NavItems;
