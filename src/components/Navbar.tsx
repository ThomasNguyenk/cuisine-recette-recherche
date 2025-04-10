
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-cuisine-burgundy" />
          <span className="font-playfair text-xl font-bold text-cuisine-burgundy">GourmeTrouve</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-cuisine-burgundy hover:text-cuisine-green transition-colors">
            Accueil
          </Link>
          <Link to="/about" className="text-cuisine-burgundy hover:text-cuisine-green transition-colors">
            À propos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
