import React from 'react';
import SEOHead from './SEOHead';
import { pageSEOConfig } from './pageSEOConfig';

interface PageSEOProps {
  page: keyof typeof pageSEOConfig;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
}

const PageSEO: React.FC<PageSEOProps> = ({ 
  page, 
  customTitle, 
  customDescription, 
  customKeywords 
}) => {
  const config = pageSEOConfig[page];
  
  return (
    <SEOHead
      title={customTitle || config.title}
      description={customDescription || config.description}
      keywords={customKeywords || config.keywords}
      url={config.url}
    />
  );
};

export default PageSEO;