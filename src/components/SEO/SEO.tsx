import { Helmet } from "react-helmet-async";

export type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  url: string;
  image?: string;
  type?: "website" | "article" | string;
  twitterHandle?: string;
};

export default function SEO({
  title,
  description,
  keywords = [],
  url,
  image = "https://legacy54.com/og-image.jpg",
  type = "website",
  twitterHandle = "@Legacy54Sports",
}: SEOProps) {
  const fullTitle = title.includes("Legacy54") ? title : `${title} | Legacy54`;
  const keywordsContent = keywords.join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#01215E" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Legacy54" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Extras */}
      <meta name="application-name" content="Legacy54" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Helmet>
  );
}
