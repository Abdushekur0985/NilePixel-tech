import { Target, Eye, Heart, Lightbulb, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and creative problem-solving.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through ethical practices, transparency, and honest communication.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together as a unified team, valuing diverse perspectives and collective wisdom.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in everything we create and every service we provide.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">NilePixel</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A story of faith, innovation, and the relentless pursuit of technological excellence.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-card p-12 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NilePixel Technologies was founded by six passionate developers united by a common vision: to create technology that matters. Driven by faith, ethical principles, and a deep desire to empower communities, we set out to build more than just software — we aimed to create solutions that inspire progress and promote positive change.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our humble beginnings in Addis Ababa, Ethiopia, we've grown into a team of innovators dedicated to delivering world-class digital solutions. Our journey is guided by the belief that technology, when built with purpose and integrity, has the power to transform lives and communities.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="glass-card p-8 hover-lift animate-fade-in">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 glow-blue">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Build impactful, ethical, and innovative digital solutions that empower communities, promote learning, and inspire progress — guided by faith, collaboration, and creativity.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 hover-lift animate-fade-in animation-delay-200">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 glow-blue">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become a leading African technology brand shaping digital transformation with excellence, mentorship, and innovation that resonates globally.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="glass-card p-12 neon-border animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-4xl">🌍</div>
              <h3 className="text-xl font-semibold">Global Standards, Local Impact</h3>
              <p className="text-muted-foreground text-sm">
                We bring world-class quality while staying rooted in our commitment to African communities.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">🎓</div>
              <h3 className="text-xl font-semibold">Knowledge Sharing</h3>
              <p className="text-muted-foreground text-sm">
                We believe in lifting others through mentorship, courses, and continuous learning initiatives.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">⚡</div>
              <h3 className="text-xl font-semibold">Faith-Driven Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Our work is guided by ethical principles, integrity, and a higher purpose beyond profit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
