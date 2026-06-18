import { useState, lazy, Suspense } from "react";
import ProjectCard from "./ProjectCard";

const ProjectModal = lazy(() => import("./ProjectModal"));
import { Button } from "@/components/ui/button";

// Import new project images
import luxereplyWorkflowNew from "@/assets/projects/luxereply-workflow-new.png";
import luxereplyDashboard1New from "@/assets/projects/luxereply-dashboard-1-new.jpg";
import luxereplyDashboard2New from "@/assets/projects/luxereply-dashboard-2-new.jpg";
import luxereplyReviewsNew from "@/assets/projects/luxereply-reviews-new.jpg";
import ragOnboardingNew from "@/assets/projects/rag-onboarding-new.jpg";
import emailCampaignNew from "@/assets/projects/email-campaign-new.jpg";
import makeAutomationNew from "@/assets/projects/make-automation-new.jpg";
import extractXtractNew from "@/assets/projects/extractxtract-new.jpg";
import newsWebsite1New from "@/assets/projects/news-website-1-new.jpg";
import newsWebsite2New from "@/assets/projects/news-website-2-new.jpg";
import bookingEngineNew from "@/assets/projects/booking-engine-new.jpg";
import bookingEngine2 from "@/assets/projects/booking-engine-2.jpg";
import felixDashboard1New from "@/assets/projects/felix-dashboard-1-new.jpg";
import felixDashboard2New from "@/assets/projects/felix-dashboard-2-new.jpg";
import quixasLandingNew from "@/assets/projects/quixas-landing-new.jpg";
import quixasDashboard from "@/assets/projects/quixas-dashboard.jpg";
import joveraGroup from "@/assets/projects/jovera-group.png";
import mk4events from "@/assets/projects/mk4events.png";
import vanguardProperties from "@/assets/projects/vanguard-properties.png";
import joveraCrm from "@/assets/projects/jovera-crm.png";
import joveraCrmProperties from "@/assets/projects/jovera-crm-properties.png";
import joveraCrmAgents from "@/assets/projects/jovera-crm-agents.png";
import joveraCrmWeb from "@/assets/projects/jovera-crm-web.png";
import uniqGoldEcommerce from "@/assets/projects/uniqgold-ecommerce.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    // Full Stack Projects (Big Projects First)
    {
      id: "9",
      title: "LuxeReply AI - Review Management SaaS",
      category: "Full Stack Projects",
      description: "Multi-tenant SaaS platform for AI-powered review management across locations",
      challenge: "Businesses needed a centralized platform to manage reviews from multiple locations and channels with AI-powered response generation.",
      solution: "Developed a comprehensive SaaS using WeWeb, Xano, Django, and n8n. Implemented multi-tenancy, role-based access, channel integrations (Google, Facebook, Yelp), and AI response generation.",
      impact: "Secured $250k seed funding, onboarded 50+ businesses, improved review response rates by 72%, and reduced response time by 90%.",
      tools: ["WeWeb", "Xano", "Django", "n8n", "AI Integration", "Multi-tenancy"],
      liveUrl: "https://www.luxereply.com/",
      images: [luxereplyDashboard1New, luxereplyDashboard2New, luxereplyReviewsNew]
    },
    {
      id: "7",
      title: "Felix Rental - Booking Engine",
      category: "Full Stack Projects",
      description: "Custom booking engine for short-term property rentals with payment integration",
      challenge: "Property managers needed a comprehensive booking system to manage multiple properties, automate bookings, and process payments securely.",
      solution: "Developed a full-featured booking engine using WeWeb and Xano with Stripe integration. Implemented property management dashboard, automated booking workflows, and Bed24 API integration.",
      impact: "Increased rental booking revenue by 30%+, reduced manual data entry by 75%, and improved booking conversion rates.",
      tools: ["WeWeb", "Xano", "Node.js", "React.js", "Bed24 API", "Stripe"],
      liveUrl: "https://www.awaystayplay.com/",
      images: [bookingEngineNew, bookingEngine2]
    },
    {
      id: "8",
      title: "Property Management Dashboard",
      category: "Full Stack Projects",
      description: "Comprehensive property management system with automated workflows",
      challenge: "Felix needed tools to streamline property addition, deletion, and synchronization across multiple booking platforms.",
      solution: "Built management tools using WeWeb, Xano, and React with AWS S3 for storage. Integrated n8n and Make.com for automated data synchronization with Bed24 and other platforms.",
      impact: "Reduced manual work by 80%, eliminated data entry costs, and enabled property owners to self-manage listings.",
      tools: ["WeWeb", "Xano", "n8n", "Make.com", "React.js", "AWS S3"],
      liveUrl: "https://www.propertiesgetfelix.com.au/add_general_property_info",
      images: [felixDashboard1New, felixDashboard2New]
    },
    {
      id: "5",
      title: "ExtractXtract AI - Construction Estimation",
      category: "Full Stack Projects",
      description: "RAG-based SaaS for real-time construction cost and duration estimation",
      challenge: "US construction workers needed accurate project estimates from specification documents, but manual estimation was time-consuming and error-prone.",
      solution: "Developed a full-stack application using Django and React with OpenAI integration. Built RAG system trained on construction data to analyze uploaded PDFs and generate accurate estimates.",
      impact: "Reduced estimation time by 50%, improved accuracy by 40%, and enabled instant PDF report generation for project managers.",
      tools: ["Python", "Django", "React.js", "OpenAI", "PDF Processing", "RAG"],
      githubUrl: "https://github.com/quixastechnology/EstimateXtract_AI",
      images: [extractXtractNew]
    },
    {
      id: "6",
      title: "News Aggregator Platform",
      category: "Full Stack Projects",
      description: "Personalized news platform with recommendation engine and social features",
      challenge: "Users wanted a centralized platform to access news from multiple sources with personalized recommendations based on their interests.",
      solution: "Built a MERN stack application with News API integration. Implemented like/unlike functionality, commenting system, and ML-based recommendation algorithm for personalized content delivery.",
      impact: "Achieved 5000+ active users, 85% user retention rate, and 3-minute average session duration.",
      tools: ["React.js", "Node.js", "Express.js", "MongoDB", "News API", "ML Recommendations"],
      githubUrl: "https://github.com/ATIF2001/News-aggregator",
      images: [newsWebsite1New, newsWebsite2New]
    },
    {
      id: "11",
      title: "Jovera Group - Corporate Website",
      category: "Full Stack Projects",
      description: "Fully dynamic corporate website with custom CRM integration for content management",
      challenge: "Jovera Group, a multi-service conglomerate in UAE, needed a professional, fully dynamic bilingual website that could be managed by their team without developer intervention.",
      solution: "Built a dynamic corporate website using React.js, Node.js, and MongoDB. Developed a custom content management module within Jovera's existing CRM system, enabling the team to update all website content — pages, services, media, and announcements — in real-time.",
      impact: "Delivered a fully dynamic website with zero downtime content updates, enabled non-technical staff to manage content, and improved online presence for the group's multiple business divisions.",
      tools: ["React.js", "Node.js", "MongoDB", "Custom CRM", "REST API", "Dynamic CMS"],
      liveUrl: "https://www.jovera.ae/",
      images: [joveraGroup]
    },
    {
      id: "12",
      title: "MK4 Events - Luxury Wedding Planning",
      category: "Full Stack Projects",
      description: "Elegant website for luxury event architecture and bespoke wedding planning services",
      challenge: "MK4 Events needed a sophisticated, visually stunning website to showcase their luxury wedding and event planning services while conveying elegance and professionalism to high-end clients.",
      solution: "Built a modern, responsive website with stunning visuals, service showcases, project galleries, and seamless contact integration. Implemented dynamic content sections for corporate, wedding, and outdoor event categories.",
      impact: "Enhanced online brand presence, improved client engagement, and provided a professional platform for potential clients to explore services and connect directly.",
      tools: ["React.js", "Node.js", "Responsive Design", "Animation", "CMS"],
      liveUrl: "https://www.mk4events.com/",
      images: [mk4events]
    },
    {
      id: "13",
      title: "Vanguard Properties - Multi-Tenant Real Estate Platform",
      category: "Full Stack Projects",
      description: "Multi-website real estate platform with centralized CRM for managing properties, leads, and agents",
      challenge: "Vanguard Properties needed a scalable system to run multiple branded real estate websites in UAE, each fully manageable from a single CRM where super admins could create admins, agents, properties, and capture leads from every site.",
      solution: "Architected a multi-tenant platform powering multiple property websites (like vanguardproperty.ae) from one centralized CRM (crm.joveraits.ae). Built website templates in Next.js/React with dynamic property listings, multilingual support, booking & contact flows, and integrated a custom CRM with role-based dashboards (Super Admin, Admin, Agent) to manage websites, properties, blogs, agents, and inbound leads in real time.",
      impact: "Enabled the company to launch new branded property websites in days instead of weeks, centralized lead capture across all sites, and gave agents and admins a single source of truth for every property and inquiry.",
      tools: ["Next.js", "React.js", "Node.js", "MongoDB", "Multi-Tenant CRM", "REST API", "Role-Based Access"],
      liveUrl: "https://www.vanguardproperty.ae/",
      images: [vanguardProperties]
    },
    {
      id: "14",
      title: "Jovera Real Estate CRM - Multi-Website & Lead Management",
      category: "Full Stack Projects",
      description: "Centralized real estate CRM to manage multiple websites, agents, properties, blogs, and inbound leads",
      challenge: "Jovera needed one CRM to operate multiple branded real estate websites in UAE — managing properties, blogs, agents, lead routing, newsletters, and SEO from a single place, with role-based access for Super Admins, Admins, and Agents.",
      solution: "Built a full real estate CRM (crm.joveraits.ae) using Next.js, Node.js, and MongoDB. Implemented modules for Web Management (multi-site control), Properties, Blogs, Lead Management, Invite Agent, Newsletter, Property Submissions, SEO, and App Management. Each connected website pulls its content dynamically from the CRM and pushes leads back in real time.",
      impact: "Replaced 3+ disjointed tools with one platform, cut new website launch time from weeks to days, centralized lead capture across all properties, and gave agents and admins a single source of truth.",
      tools: ["Next.js", "Node.js", "MongoDB", "Multi-Tenant", "Role-Based Access", "REST API", "CRM"],
      liveUrl: "https://crm.joveraits.ae/",
      images: [joveraCrm, joveraCrmProperties, joveraCrmAgents, joveraCrmWeb]
    },
    {
      id: "15",
      title: "Uniq Gold E-commerce",
      category: "Full Stack Projects",
      description: "Luxury e-commerce platform built and maintained with WooCommerce and WordPress",
      challenge: "Uniq Gold needed a robust e-commerce platform to showcase and sell luxury jewelry, watches, bags, and perfumes across multiple brands with seamless payment processing and customer engagement.",
      solution: "Built and maintained a comprehensive e-commerce solution using WordPress and WooCommerce. Integrated third-party payment gateways for secure transactions, developed custom plugins to extend functionality, and implemented a chatbot for real-time customer interaction and support.",
      impact: "Enabled online sales across five luxury brands, streamlined payment processing with integrated gateways, improved customer engagement through chatbot integration, and provided a scalable platform for future brand expansion.",
      tools: ["WordPress", "WooCommerce", "Custom Plugin", "Payment Integration", "Chatbot"],
      liveUrl: "https://uniqgold.ae/",
      images: [uniqGoldEcommerce]
    },

    // Bubble.io Projects
    {
      id: "10",
      title: "Quixas Technology RAG Chatbot",
      category: "Bubble.io Projects",
      description: "RAG-based AI chatbot integrated into company website for intelligent customer support",
      challenge: "Quixas needed an intelligent chatbot that could answer customer queries about their services using company-specific knowledge.",
      solution: "Built and integrated a RAG-based chatbot into the Bubble.io company website, enabling contextual responses based on company information and services.",
      impact: "Improved customer engagement, reduced support queries by 35%, and provided 24/7 automated assistance.",
      tools: ["Bubble.io", "RAG", "AI Chatbot", "Vector Store"],
      liveUrl: "https://quixasit.com/",
      images: [quixasLandingNew, quixasDashboard]
    },

    // Make.com Projects
    {
      id: "4",
      title: "Cold Email Automation System",
      category: "Make.com Projects",
      description: "Personalized cold email generation with Google Sheets and ClickUp integration",
      challenge: "Sales team needed an efficient way to generate personalized cold emails at scale while tracking them across multiple platforms.",
      solution: "Built a Make.com automation that integrates Google Sheets, OpenAI for personalization, and ClickUp for task management. Automated the entire flow from data input to task creation.",
      impact: "Reduced email creation time by 80%, improved personalization quality, and streamlined task management across teams.",
      tools: ["Make.com", "Google Sheets", "OpenAI", "ClickUp", "API Integration"],
      images: [makeAutomationNew]
    },

    // n8n Projects (Automation - Bottom)
    {
      id: "1",
      title: "AI Review Response Generator - LuxeReply",
      category: "n8n Projects",
      description: "Intelligent workflow for automated review response generation using AI",
      challenge: "LuxeReply needed an automated system to generate contextual, personalized responses to customer reviews across multiple platforms while maintaining brand voice.",
      solution: "Developed an n8n workflow integrating sentiment analysis, keyword generation, and OpenAI models to create intelligent responses. Implemented webhook integration with Xano for seamless data flow.",
      impact: "Reduced response time by 90%, improved customer engagement rates by 40%, and enabled the platform to handle 10x more reviews without additional staff.",
      tools: ["n8n", "OpenAI API", "Xano", "Webhooks", "Sentiment Analysis"],
      liveUrl: "https://www.luxereply.com/",
      images: [luxereplyWorkflowNew, luxereplyDashboard1New, luxereplyDashboard2New, luxereplyReviewsNew]
    },
    {
      id: "2",
      title: "RAG-based Customer Onboarding Agent",
      category: "n8n Projects",
      description: "AI-powered onboarding bot with vector store integration for personalized customer experiences",
      challenge: "Companies struggled with repetitive onboarding questions and needed a scalable solution that could provide accurate, contextual information.",
      solution: "Built a RAG-based agent using n8n with Pinecone vector store integration and OpenAI embeddings. The bot references company information stored in vector databases to provide accurate, contextual responses.",
      impact: "Reduced onboarding time by 60%, decreased support tickets by 45%, and improved customer satisfaction scores by 35%.",
      tools: ["n8n", "Pinecone", "OpenAI", "Vector Store", "Window Buffer Memory"],
      images: [ragOnboardingNew]
    },
    {
      id: "3",
      title: "AI Email Campaign Automation",
      category: "n8n Projects",
      description: "Intelligent email campaign system with automated follow-ups and campaign management",
      challenge: "Manual email campaign management was time-consuming and lacked intelligent follow-up sequencing.",
      solution: "Created an automated workflow that retrieves records from Airtable, applies filtering rules, and manages follow-up sequences. Implemented smart counting logic that sends up to 5 follow-ups every 2 days.",
      impact: "Increased email engagement by 30-40%, automated 100% of follow-up sequences, and improved lead conversion by 25%.",
      tools: ["n8n", "Airtable", "Email API", "Automation Rules"],
      images: [emailCampaignNew]
    }
  ];

  const categories = ["All", "n8n Projects", "Make.com Projects", "Full Stack Projects", "Bubble.io Projects"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my diverse portfolio of projects showcasing expertise in automation, full-stack development, and innovative solutions
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category ? "bg-gradient-primary" : "hover:bg-primary/10 hover:border-primary"}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} onTitleClick={handleProjectClick} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal 
            project={selectedProject}
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Portfolio;
