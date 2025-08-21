import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RegionSelector } from "@/components/RegionSelector";
import Home from "./pages/Home";
import MinecraftHosting from "./pages/MinecraftHosting";
import WebHosting from "./pages/WebHosting";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showRegionSelector, setShowRegionSelector] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    // Check if user has already selected a region
    const savedRegion = localStorage.getItem('zestra-region');
    if (!savedRegion) {
      setShowRegionSelector(true);
    } else {
      setSelectedRegion(savedRegion);
    }
  }, []);

  const handleRegionSelect = (region: string) => {
    localStorage.setItem('zestra-region', region);
    setSelectedRegion(region);
    setShowRegionSelector(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-animated flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/minecraft" element={<MinecraftHosting />} />
                <Route path="/web-hosting" element={<WebHosting />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
        <RegionSelector 
          open={showRegionSelector} 
          onRegionSelect={handleRegionSelect} 
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
