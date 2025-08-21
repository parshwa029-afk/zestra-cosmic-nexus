import { Badge } from '@/components/ui/badge';
import { Award, Users, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Zestra Hosting</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Powering Digital
            </span>
            <br />
            <span className="text-foreground">Dreams Since 2020</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From a small team of passionate developers to a global hosting powerhouse, 
            Zestra Hosting has been at the forefront of next-generation hosting solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Story</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">The Beginning</h3>
                <p className="text-muted-foreground mb-6">
                  Founded in 2020 by a group of passionate developers and system administrators, 
                  Zestra Hosting was born from frustration with overpriced, underperforming hosting services. 
                  We believed that powerful, reliable hosting should be accessible to everyone.
                </p>
                <p className="text-muted-foreground">
                  Starting with just a single server in a data center, we focused on delivering 
                  exceptional performance and customer service that the hosting industry was missing.
                </p>
              </div>
              
              <div className="card-glow p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                  <div className="text-muted-foreground">Servers Deployed</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to democratizing powerful hosting technology and making it accessible to creators worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for perfection in every aspect of our service, from infrastructure to support.
              </p>
            </div>

            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-muted-foreground">
                Building strong relationships with our customers and supporting their success.
              </p>
            </div>

            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly pushing the boundaries of hosting technology and performance.
              </p>
            </div>

            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-muted-foreground">
                Making premium hosting affordable and accessible to creators everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the passionate individuals driving Zestra Hosting forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-glow text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AK</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Alex Kumar</h3>
              <Badge className="mb-4">CEO & Founder</Badge>
              <p className="text-muted-foreground text-sm">
                Former tech lead at major cloud providers, passionate about democratizing hosting technology.
              </p>
            </div>

            <div className="card-glow text-center">
              <div className="w-24 h-24 bg-gradient-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SJ</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <Badge className="mb-4">CTO</Badge>
              <p className="text-muted-foreground text-sm">
                Infrastructure architect with 15+ years experience building scalable hosting platforms.
              </p>
            </div>

            <div className="card-glow text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MC</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mike Chen</h3>
              <Badge className="mb-4">Head of Engineering</Badge>
              <p className="text-muted-foreground text-sm">
                Full-stack engineer focused on performance optimization and security infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;