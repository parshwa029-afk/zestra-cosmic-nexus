import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Gamepad2, Users, Zap, HardDrive, Cpu } from 'lucide-react';
import minecraftServerImage from '@/assets/minecraft-server.jpg';

const plans = [
  {
    name: 'Starter',
    price: '$4.99',
    ram: '2GB',
    cpu: '2 vCores',
    storage: '25GB SSD',
    players: '20 slots',
    features: ['Basic DDoS Protection', 'Daily Backups', 'Modpack Support', 'Free Subdomain'],
    popular: false,
  },
  {
    name: 'Gamer',
    price: '$9.99',
    ram: '4GB',
    cpu: '3 vCores',
    storage: '50GB SSD',
    players: '50 slots',
    features: ['Advanced DDoS Protection', 'Automatic Backups', 'All Modpack Support', 'Free Domain', 'Priority Support'],
    popular: true,
  },
  {
    name: 'Pro',
    price: '$19.99',
    ram: '8GB',
    cpu: '4 vCores',
    storage: '100GB SSD',
    players: '100 slots',
    features: ['Enterprise DDoS Protection', 'Real-time Backups', 'Custom Plugins', 'Free Migration', 'Dedicated Support'],
    popular: false,
  },
  {
    name: 'Enterprise',
    price: '$39.99',
    ram: '16GB',
    cpu: '8 vCores',
    storage: '250GB SSD',
    players: 'Unlimited',
    features: ['Maximum DDoS Protection', 'Instant Backups', 'Full Admin Access', 'White-label Option', '24/7 Phone Support'],
    popular: false,
  },
];

const MinecraftHosting = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={minecraftServerImage}
            alt="Minecraft Server"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
            <Gamepad2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Minecraft Hosting</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Premium Minecraft
            </span>
            <br />
            <span className="text-foreground">Server Hosting</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Launch your Minecraft server instantly with our optimized hosting platform. 
            Supporting all versions, mods, and plugins with blazing-fast performance.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground">
              All plans include instant setup, free migrations, and 24/7 support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`card-plan relative ${
                  plan.popular ? 'ring-2 ring-primary shadow-glow-intense' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">RAM</div>
                    <div className="font-semibold">{plan.ram}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-2">
                      <Cpu className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-sm text-muted-foreground">CPU</div>
                    <div className="font-semibold">{plan.cpu}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-2">
                      <HardDrive className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-sm text-muted-foreground">Storage</div>
                    <div className="font-semibold">{plan.storage}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">Players</div>
                    <div className="font-semibold">{plan.players}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
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
            <h2 className="text-4xl font-bold mb-4">Why Choose Zestra for Minecraft?</h2>
            <p className="text-xl text-muted-foreground">
              Optimized specifically for Minecraft with features that matter to gamers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Setup</h3>
              <p className="text-muted-foreground">
                Get your Minecraft server running in under 60 seconds with our automated deployment system.
              </p>
            </div>

            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gamepad2 className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Full Mod Support</h3>
              <p className="text-muted-foreground">
                Compatible with all popular modpacks including Forge, Fabric, and custom configurations.
              </p>
            </div>

            <div className="card-glow text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HardDrive className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">NVMe SSD Storage</h3>
              <p className="text-muted-foreground">
                Lightning-fast world loading and chunk generation with enterprise-grade NVMe drives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinecraftHosting;