import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, Clock, MapPin, Building } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Track Order', path: '/track-order' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Careers', path: '/careers' },
];

const products = [
  { name: 'Pure Grounded Spices', path: '/collections/pure-grounded-spices' },
  { name: 'Blended Spices', path: '/collections/blended-spices' },
  { name: 'Condiment & Cooking Pastes', path: '/collections/condiment-cooking-pastes' },
  { name: 'Hing & Asafoetida', path: '/collections/hing-asafoetida' },
  { name: 'Whole Spices', path: '/collections/whole-spices' },
];

const policies = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Shipping Policy', path: '/shipping-policy' },
  { name: 'Cancellations', path: '/cancellations' },
  { name: 'Terms & Conditions', path: '/terms-conditions' },
];

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="swaraz-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.path}>
                  <Link
                    to={product.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Policies</h3>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.path}>
                  <Link
                    to={policy.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Office */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Corporate Office</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Building className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span># Plot No.9 & 10 Alapati Enclave Road No. 1, Sai Nagar, Nagole Hyderabad Telengana 500068 India</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+9140 24741036</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span>10 am to 6 pm from Monday to Saturday</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@swarazspices.com</span>
              </li>
            </ul>
          </div>

          {/* Store Address */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Store Address</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span># 15-6-519, Begum Bazar, Hyderabad-500012</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 SWARAZ MIRCH STORE . All Rights Reserved
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Designed and Developed by Wingman Brandworks LLP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
