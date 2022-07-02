import NextLink from "next/link";
import React from "react";

const Link = ({ children, href, passHref }) => (
  <NextLink
    href={href}
    passHref={passHref}
    scroll={false}
  >
    {children}
  </NextLink>
);

export default Link;
