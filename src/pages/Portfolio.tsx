import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Smart Inventory Platform",
      description: "A comprehensive inventory management system with real-time tracking, analytics, and automated reporting for retail businesses.",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      category: "Web Application",
    },
    {
      title: "AI-Powered Chat Assistant",
      description: "Intelligent chatbot using NLP and machine learning to provide 24/7 customer support with context-aware responses.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "AI & ML",
    },
    {
      title: "E-commerce Mobile App",
      description: "Feature-rich Android shopping app with seamless checkout, product recommendations, and order tracking.",
      tech: ["Android", "Kotlin", "Firebase", "Stripe"],
      category: "Mobile Development",
    },
    {
      title: "Corporate Brand Redesign",
      description: "Complete brand identity overhaul including logo design, color palette, typography, and comprehensive style guide.",
      tech: ["Figma", "Adobe XD", "Illustrator"],
      category: "UI/UX Design",
    },
    {
      title: "Marketing Automation System",
      description: "End-to-end marketing automation platform with email campaigns, social media scheduling, and analytics dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      category: "Digital Marketing",
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Real-time data visualization and analytics dashboard providing actionable insights for executive decision-making.",
      tech: ["React", "D3.js", "Python", "MySQL"],
      category: "Data Analytics",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of successful projects that showcase our expertise, creativity, and commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center group-hover:glow-blue transition-all duration-300">
                <Code className="h-16 w-16 text-primary opacity-50" />
              </div>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                {project.category}
              </span>

              {/* Project Info */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-xs rounded border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Button */}
              <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                View Case Study <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 text-center neon-border">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Let's collaborate to bring your vision to life with innovative solutions.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
