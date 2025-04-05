
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-display font-bold tracking-tight">
              WanderWish
            </Link>
            <p className="text-muted-foreground">
              Discover and plan extraordinary experiences around the world with like-minded travelers.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Discover</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/experiences" className="text-muted-foreground hover:text-accent transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/communities" className="text-muted-foreground hover:text-accent transition-colors">
                  Communities
                </Link>
              </li>
              <li>
                <Link to="/influencers" className="text-muted-foreground hover:text-accent transition-colors">
                  Influencers
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-muted-foreground hover:text-accent transition-colors">
                  Your Wishlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest travel experiences and community updates.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-full" 
              />
              <Button className="rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 py-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} WanderWish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
