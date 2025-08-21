import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Globe, Zap, HardDrive, Cpu, Database } from 'lucide-react';
import webHostingImage from '@/assets/web-hosting.jpg';

const plans = [
  {
    name: 'Basic',
    price: '$3.99',
    ram: '1GB',
    cpu: '1 vCore',
    storage: '25GB SSD',
    bandwidth: '250GB',
    features: ['1 Website', 'Free SSL Certificate', 'Daily Backups', 'cPanel Access', '99.9% Uptime'],
    popular: false,
  },
  {
    name: 'Advanced',
    price: '$7.99',
    ram: '2GB',
    cpu: '2 vCores',
    storage: '50GB SSD',
    bandwidth: '500GB',
    features: ['5 Websites', 'Free Domain', 'Advanced Security', 'Email Hosting', 'Premium Support'],
    popular: true,
  },
  {
    name: 'Big',
    price: '$15.99',
    ram: '4GB',
    cpu: '3 vCores',
    storage: '100GB SSD',
    bandwidth: '1TB',
    features: ['15 Websites', 'Advanced Analytics', 'CDN Integration', 'Database Management', 'Priority Support'],
    popular: false,
  },
  {
    name: 'Bigger',
    price: '$29.99',
    ram: '8GB',
    cpu: '4 vCores',
    storage: '200GB SSD',
    bandwidth: '2TB',
    features: ['50 Websites', 'White-label Options', 'Advanced Monitoring', 'Custom Solutions', 'Dedicated Manager'],
    popular: false,
  },
  {
    name: 'GOAT',
    price: '$49.99',
    ram: '16GB',
    cpu: '6 vCores',
    storage: '400GB SSD',
    bandwidth: '5TB',
    features: ['Unlimited Websites', 'Enterprise Security', 'Performance Optimization', 'Custom Development', '24/7 Phone Support'],
    popular: false,
  },
  {
    name: 'GOATED',
    price: '$99.99',
    ram: '32GB',
    cpu: '8 vCores',
    storage: '1TB SSD',
    bandwidth: 'Unlimited',
    features: ['Everything Unlimited', 'Dedicated Resources', 'Custom Infrastructure', 'Personal Account Manager', 'SLA Guarantee'],
    popular: false,
  },
];

const WebHosting = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={webHostingImage}
            alt="Web Hosting Infrastructure"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-8">
            <Globe className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Web Hosting</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Professional Web
            </span>
            <br />
            <span className="text-foreground">Hosting Solutions</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Power your websites with our high-performance hosting platform. 
            From personal blogs to enterprise applications, we've got you covered.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hosting Plans for Every Need</h2>
            <p className="text-xl text-muted-foreground">
              Scale from startup to enterprise with our flexible hosting solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`card-plan relative ${
                  plan.popular ? 'ring-2 ring-secondary shadow-glow-intense' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-secondary text-white">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-secondary mb-1">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-2">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-sm text-muted-foreground">RAM</div>
                    <div className="font-semibold">{plan.ram}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-2">
                      <Cpu className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-sm text-muted-foreground">CPU</div>
                    <div className="font-semibold">{plan.cpu}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                      <HardDrive className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">Storage</div>
                    <div className="font-semibold">{plan.storage}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-2">
                      <Database className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-sm text-muted-foreground">Bandwidth</div>
                    <div className="font-semibold">{plan.bandwidth}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={plan.popular ? 'btn-hero w-full' : 'btn-secondary-glow w-full'}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Web Hosting Features</h2>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade features designed for modern web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global CDN</h3>
              <p className="text-muted-foreground">
                Lightning-fast content delivery with our global network of edge servers worldwide.
              </p>
            </div>

            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HardDrive className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">NVMe SSD Storage</h3>
              <p className="text-muted-foreground">
                Ultra-fast website loading with enterprise NVMe SSD storage and advanced caching.
              </p>
            </div>

            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">99.9% Uptime SLA</h3>
              <p className="text-muted-foreground">
                Guaranteed reliability with our industry-leading uptime commitment and monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebHosting;