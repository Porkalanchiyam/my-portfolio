const seoConfig = (url) => ({
  titleTemplate: "%s - Porkalanchiyam",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url,
    description: "The personal website for Porkalanchiyam, Developer.",
    site_name: `Porkalanchiyam | ${process.env.DOMAIN}`,
    images: [],
  },
});

export default seoConfig;
