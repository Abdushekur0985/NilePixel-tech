import { Code, Smartphone, Brain, Database, Palette, TrendingUp, Users, Boxes, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Application Development",
      description: "Full-stack web applications built with modern frameworks like React, Next.js, and Node.js. We create responsive, scalable, and high-performance solutions tailored to your business needs.",
      features: ["Custom Web Apps", "E-commerce Platforms", "Progressive Web Apps", "API Development"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development (Android)",
      description: "Native Android applications that deliver exceptional user experiences. From concept to deployment, we build apps that users love and businesses rely on.",
      features: ["Native Android", "Cross-Platform Solutions", "App Maintenance", "Play Store Optimization"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description: "Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent applications that adapt and learn.",
      features: ["Predictive Analytics", "NLP Systems", "Computer Vision", "Custom ML Models"],
    },
    {
      icon: Zap,
      title: "Agentic AI Integrations",
      description: "Advanced AI agents that can reason, plan, and execute complex tasks autonomously. Perfect for workflow automation and intelligent assistants.",
      features: ["Autonomous Agents", "Workflow Automation", "AI Assistants", "Decision Systems"],
    },
    {
      icon: Database,
      title: "Backend Engineering",
      description: "Robust, secure, and scalable backend systems that power your applications. Expert database design, API development, and cloud infrastructure.",
      features: ["API Design", "Database Architecture", "Cloud Deployment", "System Integration"],
    },
    {
      icon: Boxes,
      title: "Data Analytics & Visualization",
      description: "Transform raw data into actionable insights with custom analytics dashboards, data pipelines, and visualization tools.",
      features: ["Business Intelligence", "Custom Dashboards", "Data Pipelines", "Reporting Systems"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users and drive conversions. We combine aesthetics with usability to create memorable experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Branding",
      description: "Data-driven marketing strategies to grow your brand, reach your audience, and achieve measurable results across digital channels.",
      features: ["SEO Optimization", "Content Strategy", "Social Media", "Brand Identity"],
    },
    {
      icon: Users,
      title: "Courses & Mentorship Programs",
      description: "Expert-led training programs and one-on-one mentorship to accelerate your tech career. Learn from experienced professionals.",
      features: ["Web Development Track", "Mobile Development", "AI/ML Foundation", "Career Guidance"],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your vision into reality. From web development to AI integration, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 glow-blue">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase">Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 text-center mt-16 neon-border">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Let's discuss how we can tailor our services to meet your unique requirements.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
