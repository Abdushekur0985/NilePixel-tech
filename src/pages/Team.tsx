import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const team = [
    {
      name: "Abdushekur Mohammed",
      role: "Full-stack Developer",
      bio: "Passionate about building scalable web applications with modern technologies. Expert in React, Node.js, and cloud architecture.",
      expertise: ["React", "Node.js", "AWS", "System Design"],
    },
    {
      name: "Abdurehman Kero",
      role: "Full-stack ML Engineer",
      bio: "Specializes in machine learning and AI integration. Experienced in building intelligent systems that learn and adapt.",
      expertise: ["Python", "TensorFlow", "ML Ops", "Data Science"],
    },
    {
      name: "Harun Suleiman",
      role: "Frontend & UI/UX Specialist",
      bio: "Creates beautiful, intuitive interfaces that users love. Master of modern frontend frameworks and design principles.",
      expertise: ["React", "UI/UX", "Figma", "Animation"],
    },
    {
      name: "Miftah Ibrahim",
      role: "Agentic AI & Marketing Specialist",
      bio: "Expert in autonomous AI systems and digital marketing strategies. Bridges the gap between technology and business growth.",
      expertise: ["AI Agents", "LLMs", "SEO", "Content Strategy"],
    },
    {
      name: "Fuad Aman",
      role: "Backend Specialist",
      bio: "Builds robust, secure backend systems that power modern applications. Expert in database design and API development.",
      expertise: ["Node.js", "PostgreSQL", "API Design", "Security"],
    },
    {
      name: "Anwar Ibrahim",
      role: "Data Specialist",
      bio: "Transforms raw data into actionable insights. Specializes in data analytics, visualization, and business intelligence.",
      expertise: ["Python", "SQL", "Data Viz", "Analytics"],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six passionate developers united by faith, innovation, and the mission to create technology that empowers communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="glass-card p-6 hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 mx-auto mb-4 flex items-center justify-center group-hover:glow-blue transition-all duration-300">
                <span className="text-4xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Link */}
              <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="glass-card p-12 text-center neon-border">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're always looking for talented individuals who share our passion for innovation and ethical technology.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Team;
