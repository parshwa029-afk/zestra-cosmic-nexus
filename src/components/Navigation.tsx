import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Gamepad2, Globe, Menu, X } from 'lucide-react';
import zestraLogo from '@/assets/zestra-logo.png';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          isActive ? 'bg-primary/20 text-primary shadow-glow' : ''
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="border-b border-primary/20 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img 
              src={zestraLogo}
              alt="Zestra Hosting Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-bold text-glow">Zestra Hosting</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About Us</NavItem>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="nav-link flex items-center gap-1">
                  Browse Plans <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-lg border-primary/30 shadow-glow">
                <DropdownMenuItem asChild>
                  <NavLink to="/minecraft" className="flex items-center gap-2 cursor-pointer">
                    <Gamepad2 className="h-4 w-4" />
                    Minecraft Hosting
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/web-hosting" className="flex items-center gap-2 cursor-pointer">
                    <Globe className="h-4 w-4" />
                    Web Hosting
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <NavItem to="/features">Core Features</NavItem>
            <NavItem to="/contact">Contact Us</NavItem>
          </div>

          {/* Top Right Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="btn-ghost-glow" asChild>
              <NavLink to="/minecraft">
                <Gamepad2 className="h-4 w-4 mr-2" />
                Minecraft
              </NavLink>
            </Button>
            <Button className="btn-secondary-glow" asChild>
              <NavLink to="/web-hosting">
                <Globe className="h-4 w-4 mr-2" />
                Website
              </NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4">
            <div className="flex flex-col space-y-2">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About Us</NavItem>
              <NavItem to="/minecraft">Minecraft Hosting</NavItem>
              <NavItem to="/web-hosting">Web Hosting</NavItem>
              <NavItem to="/features">Core Features</NavItem>
              <NavItem to="/contact">Contact Us</NavItem>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};