import { Shield, Clock, Zap, HardDrive, HeadphonesIcon, TrendingUp, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    name: 'Advanced DDoS Protection',
    description: 'Multi-layered DDoS protection with real-time threat detection and mitigation.',
    color: 'primary',
  },
  {
    icon: HeadphonesIcon,
    name: '24/7 Expert Support',
    description: 'Round-the-clock technical support from our experienced hosting specialists.',
    color: 'secondary',
  },
  {
    icon: Lock,
    name: 'Free SSL Certificates',
    description: 'Automatic SSL certificate provisioning and renewal for all your domains.',
    color: 'accent',
  },
  {
    icon: HardDrive,
    name: 'NVMe SSD Storage',
    description: 'Lightning-fast NVMe SSD storage for maximum performance and reliability.',
    color: 'primary',
  },
  {
    icon: Clock,
    name: '99.9% Uptime Guarantee',
    description: 'Industry-leading uptime SLA with redundant infrastructure and monitoring.',
    color: 'secondary',
  },
  {
    icon: TrendingUp,
    name: 'Scalable Resources',
    description: 'Instantly scale your resources up or down based on your needs.',
    color: 'accent',
  },
  {
    icon: Globe,
    name: 'Global CDN Network',
    description: 'Worldwide content delivery network for faster loading times globally.',
    color: 'primary',
  },
  {
    icon: Zap,
    name: 'Instant Provisioning',
    description: 'Get your servers deployed and running within 60 seconds of ordering.',
    color: 'secondary',
  },
];

const Features = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Core Features</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Enterprise Features
            </span>
            <br />
            <span className="text-foreground">for Everyone</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience professional-grade hosting features designed to power your success. 
            From advanced security to 24/7 support, we've got every aspect covered.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.name} className="card-glow text-center group">
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300
                  ${feature.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : ''}
                  ${feature.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20' : ''}
                  ${feature.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' : ''}
                `}>
                  <feature.icon className={`
                    h-8 w-8 transition-all duration-300
                    ${feature.color === 'primary' ? 'text-primary group-hover:scale-110' : ''}
                    ${feature.color === 'secondary' ? 'text-secondary group-hover:scale-110' : ''}
                    ${feature.color === 'accent' ? 'text-accent group-hover:scale-110' : ''}
                  `} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-glow transition-all duration-300">
                  {feature.name}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-primary">Security</span> at Every Layer
            </h2>
            <p className="text-xl text-muted-foreground mb-16">
              Your data and applications are protected by multiple layers of security measures
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-glow">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Network Security</h3>
                <p className="text-muted-foreground">
                  Advanced firewall protection, intrusion detection, and real-time monitoring of all network traffic.
                </p>
              </div>

              <div className="card-glow">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Encryption</h3>
                <p className="text-muted-foreground">
                  End-to-end encryption for data in transit and at rest, ensuring your information stays secure.
                </p>
              </div>

              <div className="card-glow">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Compliance</h3>
                <p className="text-muted-foreground">
                  GDPR, SOC 2, and ISO 27001 compliant infrastructure meeting the highest security standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Performance That <span className="text-secondary">Exceeds Expectations</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-accent">Lightning-Fast Infrastructure</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-primary">NVMe SSD Storage</div>
                      <div className="text-muted-foreground text-sm">Ultra-fast storage with 3x faster read/write speeds</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-secondary">Global CDN</div>
                      <div className="text-muted-foreground text-sm">Worldwide content delivery for instant loading</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-accent">Optimized Servers</div>
                      <div className="text-muted-foreground text-sm">Latest-generation hardware for maximum performance</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-glow p-8">
                <h4 className="text-xl font-bold mb-6 text-center">Performance Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Server Response Time</span>
                    <span className="font-bold text-primary">&lt; 50ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Page Load Speed</span>
                    <span className="font-bold text-secondary">&lt; 2 seconds</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Network Uptime</span>
                    <span className="font-bold text-accent">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Support Response</span>
                    <span className="font-bold text-primary">&lt; 1 minute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;