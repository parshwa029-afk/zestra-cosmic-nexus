import { NavLink } from 'react-router-dom';
import { Globe, Twitter, Facebook, Instagram, Github, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-glow">Zestra Hosting</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Powering the future of hosting with premium Minecraft and web hosting solutions. 
              Reliable, fast, and affordable for creators worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </NavLink>
              <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </NavLink>
              <NavLink to="/features" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Core Features
              </NavLink>
              <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact Us
              </NavLink>
            </nav>
          </div>

          {/* Hosting Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Hosting Services</h3>
            <nav className="flex flex-col space-y-3">
              <NavLink to="/minecraft" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                Minecraft Hosting
              </NavLink>
              <NavLink to="/web-hosting" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                Web Hosting
              </NavLink>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                VPS Hosting
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                Dedicated Servers
              </a>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">support@zestra.hosting</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-muted-foreground">24/7 Live Chat</span>
              </div>
              <nav className="flex flex-col space-y-2 mt-4">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Help Center
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  System Status
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Terms of Service
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Zestra Hosting. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="text-primary text-sm font-medium">99.9% Uptime SLA</span>
            <span className="text-secondary text-sm font-medium">24/7 Support</span>
            <span className="text-accent text-sm font-medium">Global Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
};