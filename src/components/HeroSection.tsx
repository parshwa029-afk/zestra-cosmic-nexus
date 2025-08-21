import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Gamepad2, Globe, Play, Star } from 'lucide-react';
import heroServerImage from '@/assets/hero-server.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-particles">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroServerImage}
          alt="Futuristic Server Infrastructure"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-animated opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-glow">
          <Star className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Powering 50,000+ Servers Worldwide</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-hero mb-6 leading-tight">
          Zestra Hosting
          <br />
          <span className="text-4xl font-normal text-secondary">
            Powering the Future of Hosting
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          <span className="text-primary font-semibold">Affordable.</span> 
          <span className="text-secondary font-semibold"> Reliable.</span> 
          <span className="text-accent font-semibold"> Blazing Fast.</span>
        </p>

        <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto">
          Experience next-generation hosting with our cutting-edge infrastructure, 
          24/7 expert support, and blazing-fast performance for all your projects.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-hero" size="lg" asChild>
            <NavLink to="/minecraft">
              <Gamepad2 className="h-5 w-5 mr-2" />
              Browse Minecraft Hosting
              <Play className="h-4 w-4 ml-2" />
            </NavLink>
          </Button>
          
          <Button className="btn-secondary-glow" size="lg" asChild>
            <NavLink to="/web-hosting">
              <Globe className="h-5 w-5 mr-2" />
              Browse Web Hosting
              <Play className="h-4 w-4 ml-2" />
            </NavLink>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-primary/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Active Servers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Global</div>
            <div className="text-sm text-muted-foreground">Data Centers</div>
          </div>
        </div>
      </div>
    </section>
  );
};