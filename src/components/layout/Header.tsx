import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, ChevronDown, User } from 'lucide-react';
import swastikLogo from '@/assets/swastik-logo.png';
import threeMangoLogo from '@/assets/three-mango-logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const categories = [
  { name: 'Pure Grounded Spices', path: '/collections/pure-grounded-spices' },
  { name: 'Blended Spices', path: '/collections/blended-spices' },
  { name: 'Condiment & Cooking Pastes', path: '/collections/condiment-cooking-pastes' },
  { name: 'Hing & Asafoetida', path: '/collections/hing-asafoetida' },
  { name: 'Whole Spices', path: '/collections/whole-spices' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Bulk Enquiry', path: '/bulk-enquiry' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Careers', path: '/careers' },
];

import { useCart } from '@/context/CartContext';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { getItemCount } = useCart();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent) => {
    if ((e.type === 'keydown' && (e as React.KeyboardEvent).key === 'Enter') || e.type === 'click') {
      if (searchQuery.trim()) {
        navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
        setMobileMenuOpen(false);
        setSearchQuery('');
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Header */}
      <div className="border-b border-border">
        <div className="swaraz-container px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between py-2 sm:py-3 gap-3 sm:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img src={swastikLogo} alt="Swaraz Spices" className="h-12 sm:h-16 md:h-20 w-auto" />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-4 md:mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-3 sm:px-4 py-2 border border-border rounded-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
                <button
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors p-1"
                  onClick={handleSearch}
                  aria-label="Search"
                >
                  <Search className="h-4 sm:h-5 w-4 sm:w-5" />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button 
                className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 sm:h-6 w-5 sm:w-6" /> : <Menu className="h-5 sm:h-6 w-5 sm:w-6" />}
              </button>

              <Link to="/cart" className="flex items-center gap-2 cursor-pointer p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Shopping cart">
                <div className="relative">
                  <ShoppingCart className="h-5 sm:h-6 w-5 sm:w-6" />
                  {getItemCount() > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                      {getItemCount()}
                    </span>
                  )}
                </div>
              </Link>

              <div className="hidden sm:flex items-center gap-3 sm:gap-4">
                {/* wishlist removed */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-border hidden sm:block">
        <div className="swaraz-container px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between py-2">
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 text-sm">
                  <Menu className="h-4 w-4" />
                  <span className="hidden md:inline">All Categories</span>
                  <span className="md:hidden">Categories</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 md:w-64">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.path} asChild>
                    <Link to={category.path} className="w-full cursor-pointer text-sm py-2">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Nav Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium text-sm transition-colors ${location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/combo-box" className="text-primary font-semibold text-sm">
                Combo Box
              </Link>
            </nav>

            {/* Free Shipping Notice */}
            <div className="hidden md:block text-xs lg:text-sm text-muted-foreground">
              Free shipping on orders above ₹499
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="swaraz-container px-3 sm:px-4 py-4 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium py-2 px-2 text-sm rounded-lg transition-colors ${location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-muted'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/combo-box"
                className="text-primary font-semibold py-2 px-2 text-sm rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Combo Box
              </Link>
            </nav>
            {/* Categories for mobile */}
            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm mb-2">Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="block py-2 px-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
