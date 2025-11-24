import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Brain, Palette, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Build responsive, scalable web applications with cutting-edge technologies.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native Android apps that deliver exceptional user experiences.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced machine learning algorithms.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that captivate and convert users.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your brand and reach your audience.",
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Expert guidance to accelerate your tech career journey.",
    },
  ];

  const technologies = [
    "React", "Node.js", "Next.js", "TypeScript", "MongoDB", "MySQL", 
    "Python", "TensorFlow", "Android", "Tailwind CSS", "AWS", "Docker"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Pioneering the Future of{" "}
            <span className="gradient-text">Digital Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            We craft transformative web & mobile experiences, AI-driven solutions, and precision digital strategies for visionary entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Build impactful, ethical, and innovative digital solutions that empower communities, promote learning, and inspire progress — guided by faith, collaboration, and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">Comprehensive solutions for your digital transformation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Why Choose NilePixel?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold">Innovation First</h3>
              <p className="text-muted-foreground">Cutting-edge technology and creative solutions that push boundaries.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold">Ethical Excellence</h3>
              <p className="text-muted-foreground">Guided by integrity, faith, and commitment to societal impact.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-semibold">Community Driven</h3>
              <p className="text-muted-foreground">Empowering communities through mentorship and knowledge sharing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="glass-card px-6 py-3 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto neon-border">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Vision?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build something extraordinary together. Get in touch with our team today.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
