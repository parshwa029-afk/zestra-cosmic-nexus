import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Globe, MapPin } from 'lucide-react';

interface RegionSelectorProps {
  open: boolean;
  onRegionSelect: (region: string) => void;
}

const regions = [
  { id: 'na', name: 'North America', description: 'US East & West Coast', flag: '🇺🇸' },
  { id: 'eu', name: 'Europe', description: 'Amsterdam & London', flag: '🇪🇺' },
  { id: 'asia', name: 'Asia Pacific', description: 'Singapore & Tokyo', flag: '🌏' },
  { id: 'india', name: 'India', description: 'Mumbai & Bangalore', flag: '🇮🇳' },
  { id: 'oceania', name: 'Oceania', description: 'Sydney & Auckland', flag: '🇦🇺' },
];

export const RegionSelector = ({ open, onRegionSelect }: RegionSelectorProps) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegion(regionId);
    setTimeout(() => {
      onRegionSelect(regionId);
    }, 500);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="bg-gradient-card border-primary/30 max-w-2xl">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Globe className="h-12 w-12 text-primary animate-glow" />
          </div>
          <DialogTitle className="text-2xl font-bold text-glow">
            Select Your Region
          </DialogTitle>
          <p className="text-muted-foreground">
            Choose the data center closest to you for optimal performance
          </p>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {regions.map((region) => (
            <Button
              key={region.id}
              variant="outline"
              className={`
                h-auto p-6 flex flex-col items-start gap-2 text-left transition-all duration-300
                ${selectedRegion === region.id 
                  ? 'bg-primary/20 border-primary shadow-glow' 
                  : 'bg-card/50 border-primary/20 hover:bg-primary/10 hover:border-primary/40'
                }
              `}
              onClick={() => handleRegionSelect(region.id)}
            >
              <div className="flex items-center gap-3 w-full">
                <span className="text-2xl">{region.flag}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{region.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {region.description}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
        
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Don't worry, you can change this later in your account settings
        </div>
      </DialogContent>
    </Dialog>
  );
};