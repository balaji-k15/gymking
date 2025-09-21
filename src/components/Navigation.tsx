import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleJoinNow = () => {
    // Navigate to join page
    window.location.href = "/join";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gym-dark/95 backdrop-blur-sm border-b border-gym-orange/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-2xl font-bold text-white">GYMSTER</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors">
              HOME
            </Link>
            <Link to="/about" className="text-white hover:text-primary transition-colors">
              ABOUT
            </Link>
            <Link to="/services" className="text-white hover:text-primary transition-colors">
              SERVICES
            </Link>
            <Link to="/trainers" className="text-white hover:text-primary transition-colors">
              TRAINERS
            </Link>
            <Link to="/contact" className="text-white hover:text-primary transition-colors">
              CONTACT
            </Link>
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-primary font-semibold">+91 98765 43210</span>
            <Button onClick={handleJoinNow} className="bg-primary hover:bg-primary/90 text-white px-6">
              JOIN NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gym-card border-t border-gym-orange/20">
            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block py-2 text-white hover:text-primary transition-colors">
                HOME
              </Link>
              <Link to="/about" className="block py-2 text-white hover:text-primary transition-colors">
                ABOUT
              </Link>
              <Link to="/services" className="block py-2 text-white hover:text-primary transition-colors">
                SERVICES
              </Link>
              <Link to="/trainers" className="block py-2 text-white hover:text-primary transition-colors">
                TRAINERS
              </Link>
              <Link to="/contact" className="block py-2 text-white hover:text-primary transition-colors">
                CONTACT
              </Link>
              <div className="pt-2">
                <span className="block text-primary font-semibold mb-2">+91 98765 43210</span>
                <Button onClick={handleJoinNow} className="w-full bg-primary hover:bg-primary/90 text-white">
                  JOIN NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;