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
  { name: 'Pickles', path: '/collections/pickles' },
  { name: 'Blended Spices', path: '/collections/blended-spices' },
  { name: 'Condiment & Cooking Pastes', path: '/collections/condiment-cooking-pastes' },
  { name: 'Hing & Asafoetida', path: '/collections/hing-asafoetida' },
  { name: 'Whole Spices', path: '/collections/whole-spices' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Bulk Enquiry', path: '/bulk-enquiry' },
  {
    name: 'About Us',
    path: '/about',
    children: [
      { name: 'Overview', path: '/about' },
      { name: 'TV Commercials', path: '/pages/tv-commercials' },
      { name: 'Recipe Videos', path: '/pages/recipe-videos' },
    ]
  },
  
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
        <div className="swaraz-container">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={swastikLogo} alt="Swaraz Spices" className="h-20 w-auto" />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={handleSearch}
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              <div className="hidden sm:flex items-center gap-4">

                <Link to="/cart" className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <ShoppingCart className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {getItemCount()}
                    </span>
                  </div>
                </Link>

                {/* wishlist removed */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-border">
        <div className="swaraz-container">
          <div className="flex items-center justify-between py-2">
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Menu className="h-4 w-4" />
                  All Categories
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.path} asChild>
                    <Link to={category.path} className="w-full cursor-pointer">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Nav Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                link.children ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className={`flex items-center gap-1 font-medium transition-colors hover:text-primary focus:outline-none ${location.pathname.startsWith(link.path) ? 'text-primary' : 'text-foreground'
                      }`}>
                      {link.name} <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link
                            to={child.path}
                            className={`w-full cursor-pointer ${location.pathname === child.path ? 'text-primary' : ''}`}
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium transition-colors ${location.pathname === link.path
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link to="/combo-box" className="text-primary font-semibold">
                Combo Box
              </Link>
            </nav>

            {/* Free Shipping Notice */}
            <div className="hidden md:block text-sm text-muted-foreground">
              Free shipping on orders above ₹499/- across India
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="swaraz-container py-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium py-2 ${location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/combo-box"
                className="text-primary font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Combo Box
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
