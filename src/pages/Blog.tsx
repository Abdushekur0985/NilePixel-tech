import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tech <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Articles, tutorials, and insights from our team on the latest in tech, development, and AI.
          </p>
        </div>

        {/* Coming Soon */}
        <div className="glass-card p-16 text-center neon-border max-w-3xl mx-auto">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 glow-blue">
            <span className="text-5xl">📝</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Blog Coming Soon</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're working on creating valuable content about web development, AI, mobile apps, and digital innovation. Stay tuned!
          </p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Subscribe to get notified when we launch:</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-background/50 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button variant="hero">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Placeholder Topics */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Topics We'll Cover</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Web Development", "AI & Machine Learning", "Mobile Development", "UI/UX Design", "DevOps & Cloud", "Career & Growth"].map((topic, index) => (
              <div
                key={topic}
                className="glass-card p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-semibold text-lg">{topic}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
