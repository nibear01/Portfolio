import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AllMall",
    subtitle: "Full-Stack E-commerce Application",
    description:
      "A comprehensive e-commerce platform built with MERN stack featuring AI-driven smart product recommendations, intelligent search, and seamless shopping experience.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JWT"],
    features: [
      "AI-driven product recommendations",
      "Smart search functionality",
      "Real-time category filtering",
      "JWT Authentication",
      "Responsive product cards with hover effects",
    ],
    github: "https://github.com/nibear01/CSE470-Project-AllMall",
    live: "https://allmall-frontend.onrender.com/",
    image: "/allmall.png",
    featured: true,
  },
  {
    title: "Bookstore App",
    subtitle: "Advanced Full-Stack E-commerce Platform",
    description:
      "A production-ready, multi-role e-commerce solution designed for bookstores. It features advanced administrative workflows including affiliate marketing, author/publisher portals, print-on-demand integration, and a rigorous CI/CD pipeline with E2E testing.",
    tech: [
      "React 19",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Docker",
      "Jenkins",
      "Selenium",
    ],
    features: [
      "Multi-role RBAC (Admin, Author, Affiliate, etc.)",
      "Affiliate marketing & commission tracking",
      "Print-on-Demand (POD) workflow integration",
      "Advanced catalog with rich filtering & SEO",
      "Review system with dynamic rating calculation",
      "CI/CD pipeline with Jenkins & Selenium testing",
    ],
    github: "https://github.com/nibear01",
    live: "#", // Private repo, no live demo
    image: "/bookstore.png",
    featured: true,
  },
  {
    title: "Horizon Homes",
    subtitle: "Full-Stack Real Estate Platform",
    description:
      "A modern real estate marketplace designed to seamlessly connect buyers, sellers, and renters. Currently utilizing the MERN stack with a roadmap for PERN migration, it features secure role-based authentication and a scalable architecture for property management.",
    tech: [
      "React 19",
      "Node.js",
      "Express.js 5",
      "MongoDB",
      "Tailwind CSS 4",
      "JWT",
      "Vite",
    ],
    features: [
      "Secure JWT Authentication with Bcrypt hashing",
      "Role-Based Access Control (Customer & Admin)",
      "Comprehensive User Profile Management",
      "Property Listings (Buy/Rent/Sell) workflows",
      "Planned Cart & Wishlist system for properties",
      "Responsive UI built with Tailwind CSS 4",
    ],
    github: "https://github.com/nibear01/RealState-Website",
    live: "#", // No live URL provided (Localhost setup)
    image: "/housing.png",
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my latest projects and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {project.featured && (
                <div className="absolute top-6 right-6 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                    <Sparkles size={12} />
                    Featured
                  </span>
                </div>
              )}

              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project Info */}
                  <div>
                    <span className="text-primary text-sm font-mono mb-2 block">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-balance">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-secondary/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/nibear01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View more on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
