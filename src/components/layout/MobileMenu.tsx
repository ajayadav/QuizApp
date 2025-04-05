
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Search, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; path: string }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    onClose();
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex justify-between items-center p-6">
          <Link to="/" className="text-2xl font-display font-bold" onClick={handleLinkClick}>
            WanderWish
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="flex flex-col px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xl font-medium transition-colors hover:text-accent"
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-6 border-t border-border">
          <div className="flex justify-around mb-6">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Wishlist">
              <Link to="/wishlist" onClick={handleLinkClick}>
                <Heart className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Profile">
              <User className="w-5 h-5" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              Sign Up
            </Button>
            <Button className="w-full">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
