import { GraduationCap, Code, Smartphone, Brain, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Mentorship = () => {
  const tracks = [
    {
      icon: Code,
      title: "Web Development Track",
      duration: "12 weeks",
      description: "Master modern web development from fundamentals to advanced full-stack applications.",
      curriculum: [
        "HTML, CSS & JavaScript Fundamentals",
        "React & Component Architecture",
        "Node.js & Express Backend",
        "Database Design & Integration",
        "Deployment & DevOps Basics",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development Track",
      duration: "12 weeks",
      description: "Build professional Android applications with modern development practices.",
      curriculum: [
        "Kotlin Programming Fundamentals",
        "Android SDK & Architecture",
        "UI/UX Best Practices",
        "API Integration & Data Storage",
        "Play Store Publication",
      ],
    },
    {
      icon: Brain,
      title: "AI & ML Foundation Track",
      duration: "16 weeks",
      description: "Learn machine learning concepts and build intelligent applications from scratch.",
      curriculum: [
        "Python for Data Science",
        "Machine Learning Algorithms",
        "Neural Networks & Deep Learning",
        "NLP & Computer Vision Basics",
        "ML Model Deployment",
      ],
    },
    {
      icon: Users,
      title: "Professional Mentorship Program",
      duration: "Ongoing",
      description: "One-on-one guidance for career growth, technical skills, and industry insights.",
      curriculum: [
        "Personalized Career Roadmap",
        "Technical Interview Preparation",
        "Portfolio & Resume Building",
        "Industry Best Practices",
        "Networking & Personal Branding",
      ],
    },
  ];

  const benefits = [
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from experienced developers who work on real-world projects daily.",
    },
    {
      icon: "🎯",
      title: "Project-Based Learning",
      description: "Build actual applications, not just follow tutorials.",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Join a vibrant community of learners and mentors.",
    },
    {
      icon: "📜",
      title: "Certification",
      description: "Receive certificates upon successful completion of tracks.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Courses & <span className="gradient-text">Mentorship</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accelerate your tech career with expert-led courses, personalized mentorship, and hands-on project experience.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="glass-card p-12 mb-16 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Learn From Practitioners</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Our mentorship programs are designed by developers who are actively building products. We don't just teach theory — we share real-world experience, best practices, and insider knowledge that comes from years in the field.
          </p>
        </div>

        {/* Learning Tracks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Learning Tracks</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div
                key={track.title}
                className="glass-card p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 glow-blue">
                    <track.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{track.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {track.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{track.description}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase mb-3">What You'll Learn</h4>
                  <ul className="space-y-2">
                    {track.curriculum.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Programs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Approach */}
        <div className="glass-card p-12 mb-16 neon-border animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Our Learning Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Interactive Sessions</h3>
              <p className="text-muted-foreground text-sm">
                Live coding sessions, Q&A, and collaborative problem-solving.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Real Projects</h3>
              <p className="text-muted-foreground text-sm">
                Build portfolio-worthy projects that demonstrate your skills.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto glow-blue">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Lifetime Access</h3>
              <p className="text-muted-foreground text-sm">
                Continued support and access to our community even after completion.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-12 text-center neon-border">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Join our next cohort and take the first step toward mastering tech skills that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Request More Info</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
