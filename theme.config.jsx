import { useConfig } from "nextra-theme-docs";
import Footer from "./components/Footer";

export default {
  logo: <span>Zodiac Wiki</span>,
  project: {
    link: "https://github.com/gnosisguild/zodiac-wiki",
  },
  docsRepositoryBase: "https://github.com/gnosisguild/zodiac-wiki",
  darkMode: false,
  nextThemes: {
    defaultTheme: "dark",
  },
  primaryHue: 45,
  primarySaturation: 30,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  head: function useHead() {
    const { title } = useConfig();
    return (
      <>
        <title>{title ? `${title} - Zodiac Wiki` : "Zodiac Wiki"}</title>
        <meta
          name="title"
          content={title ? `${title} - Zodiac Wiki` : "Zodiac Wiki"}
        />
        <meta
          name="description"
          content="An open, living resource for DAOs and documentation of the Zodiac standard."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zodiac.wiki/" />
        <meta
          property="og:title"
          content={title ? `${title} - Zodiac Wiki` : "Zodiac Wiki"}
        />
        <meta
          property="og:description"
          content="An open, living resource for DAOs and documentation of the Zodiac standard."
        />
        <meta
          property="og:image"
          content="https://www.zodiac.wiki/meta_img.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.zodiac.wiki/" />
        <meta
          property="twitter:title"
          content={title ? `${title} - Zodiac Wiki` : "Zodiac Wiki"}
        />
        <meta
          property="twitter:description"
          content="An open, living resource for DAOs and documentation of the Zodiac standard."
        />
        <meta
          property="twitter:image"
          content="https://www.zodiac.wiki/meta_img.jpg"
        />
      </>
    );
  },
  footer: {
    component: <Footer />,
  },
  // ... other theme options
};
