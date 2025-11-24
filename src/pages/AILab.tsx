import { Brain, Cpu, Zap, LineChart, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AILab = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Custom ML models trained on your data for predictive analytics, classification, and pattern recognition.",
      applications: ["Predictive Maintenance", "Demand Forecasting", "Fraud Detection", "Customer Segmentation"],
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Advanced NLP systems for text analysis, sentiment detection, chatbots, and language understanding.",
      applications: ["Sentiment Analysis", "Text Classification", "Chatbots", "Document Q&A"],
    },
    {
      icon: Zap,
      title: "Agentic AI Systems",
      description: "Autonomous AI agents that can reason, plan, and execute complex multi-step tasks independently.",
      applications: ["Workflow Automation", "Virtual Assistants", "Decision Systems", "Task Orchestration"],
    },
    {
      icon: Cpu,
      title: "Computer Vision",
      description: "Image and video analysis for object detection, facial recognition, and visual quality control.",
      applications: ["Object Detection", "Image Classification", "Quality Control", "OCR Systems"],
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Data-driven forecasting and trend analysis to make informed business decisions.",
      applications: ["Sales Forecasting", "Risk Assessment", "Market Analysis", "Performance Prediction"],
    },
    {
      icon: Target,
      title: "Recommendation Systems",
      description: "Intelligent systems that personalize user experiences with relevant content and product suggestions.",
      applications: ["Product Recommendations", "Content Curation", "Personalization", "User Matching"],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI & Innovation <span className="gradient-text">Lab</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pushing the boundaries of artificial intelligence with cutting-edge research and practical applications that solve real-world problems.
          </p>
        </div>

        {/* Introduction */}
        <div className="glass-card p-12 mb-16 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">The Future is Intelligent</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Our AI Lab combines state-of-the-art machine learning techniques with practical engineering to deliver intelligent solutions that learn, adapt, and evolve. From predictive analytics to autonomous agents, we're building the next generation of AI-powered applications.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Capabilities</h2>
          <div className="space-y-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="glass-card p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 glow-blue">
                        <capability.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{capability.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase mb-3">Applications</h4>
                    <ul className="space-y-2">
                      {capability.applications.map((app) => (
                        <li key={app} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass-card p-12 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">Our AI Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI", "LangChain", "FastAPI"].map((tech, index) => (
              <div
                key={tech}
                className="glass-card p-4 text-center hover-lift"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="glass-card p-12 mb-16 neon-border animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold">Discovery</h3>
              <p className="text-sm text-muted-foreground">Understanding your problem and data landscape</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold">Model Development</h3>
              <p className="text-sm text-muted-foreground">Training and fine-tuning AI models</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold">Integration</h3>
              <p className="text-sm text-muted-foreground">Seamlessly embedding AI into your systems</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold">Optimization</h3>
              <p className="text-sm text-muted-foreground">Continuous learning and improvement</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-12 text-center neon-border">
          <h2 className="text-3xl font-bold mb-4">Ready to Harness AI?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Let's explore how artificial intelligence can transform your business operations and create new opportunities.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Discuss Your AI Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AILab;
