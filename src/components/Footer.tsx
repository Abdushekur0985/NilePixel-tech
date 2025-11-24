import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook, Send } from "lucide-react";
import logo from "@/assets/nilepixel-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/40 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="NilePixel" className="h-10 w-10" />
              <span className="text-xl font-bold gradient-text">NilePixel</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Pioneering the future of digital innovation through transformative web experiences, AI solutions, and ethical technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">AI & ML</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@nilepixel.com" className="hover:text-primary transition-colors">info@nilepixel.com</a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>0928584485</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NilePixel Technologies. Built with faith, ethics, and innovation.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/nilepixel-technologies/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin_dashboard_index%3BKJVMM7QLRvW2%2BAQd%2FhHfMg%3D%3D" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://t.me/+SujF8E-_nqdhN2Q0" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Send className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
