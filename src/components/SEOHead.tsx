import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({
  title = "Muhammad Atif - Full Stack Developer | React, Node.js, n8n, WeWeb, Xano Expert",
  description = "Hire Muhammad Atif — Full Stack Developer & AI Automation Expert specializing in React.js, Node.js, Python, WeWeb, Xano, n8n, Make.com, MongoDB, and Supabase. Building scalable SaaS products, workflow automations, and API integrations.",
  keywords = "full stack developer, hire react developer, hire node.js developer, freelance developer, WeWeb developer, Xano developer, n8n automation expert, Make.com developer, AI automation engineer, React.js developer, Node.js developer, Python developer, MongoDB developer, Supabase developer, SaaS developer, API integration specialist, workflow automation, low-code developer, bubble.io developer, Django developer, AI chatbot developer, RAG developer, OpenAI integration, full stack engineer for hire, web developer portfolio, Muhammad Atif developer",
  canonicalUrl = "https://atif-fullstackdev.vercel.app/",
  ogImage = "https://atif-fullstackdev.vercel.app/og-image.png",
}: SEOHeadProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Atif",
    url: canonicalUrl,
    jobTitle: "Full Stack Developer & AI Automation Expert",
    description,
    knowsAbout: [
      "React.js", "Node.js", "Python", "Django", "MongoDB", "PostgreSQL", "Supabase",
      "WeWeb", "Xano", "n8n", "Make.com", "Bubble.io", "OpenAI", "AWS",
      "API Integration", "Workflow Automation", "SaaS Development", "RAG Applications",
      "Full Stack Development", "AI Chatbot Development"
    ],
    sameAs: [
      "https://github.com/ATIF2001",
      "https://www.linkedin.com/in/m-atif-butt/"
    ],
    offers: {
      "@type": "Offer",
      description: "Full Stack Development, AI Automation, SaaS Development, API Integration, and Workflow Automation services",
      areaServed: "Worldwide"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Atif - Full Stack Developer Portfolio",
    url: canonicalUrl,
    description,
    author: {
      "@type": "Person",
      name: "Muhammad Atif"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Muhammad Atif" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Muhammad Atif - Developer Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
