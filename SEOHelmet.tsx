import React from 'react';
import { BRAND_NAME } from './constants';

const SEOHelmet = () => {
  const title = `About ${BRAND_NAME} | Financial Clarity for India`;
  const description = `${BRAND_NAME} is an education-first financial platform designed for Indian professionals and MSMEs. We simplify tax, compliance, and personal finance through neutral frameworks and precision tools.`;
  const url = "https://monitize.in"; 
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Geo-tagging for India focus */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
    </>
  );
};

export default SEOHelmet;