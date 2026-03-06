import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://lungdiseasespecialists.com/sitemap.xml",
    host: "https://lungdiseasespecialists.com",
  };
}
