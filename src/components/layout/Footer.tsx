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
    <footer className="bg-foreground text-background">
      <div className="swaraz-container px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-background">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path} className="min-h-[44px] flex items-center">
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-background">Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.path} className="min-h-[44px] flex items-center">
                  <Link
                    to={product.path}
                    className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors font-medium"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-background">Policies</h3>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.path} className="min-h-[44px] flex items-center">
                  <Link
                    to={policy.path}
                    className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors font-medium"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Office */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-background">Corporate Office</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-background/80 text-xs sm:text-sm min-h-[44px]">
                <Building className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="font-medium"># Plot No.9 & 10 Alapati Enclave Road No. 1, Sai Nagar, Nagole Hyderabad Telengana 500068 India</span>
              </li>
              <li className="flex items-center gap-2 text-background/80 text-xs sm:text-sm min-h-[44px]">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+914024741036" className="hover:text-background transition-colors font-medium">+91 9100478999</a>
              </li>
              <li className="flex items-center gap-2 text-background/80 text-xs sm:text-sm min-h-[44px]">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium">10 am to 6 pm Mon-Sat</span>
              </li>
              <li className="flex items-center gap-2 text-background/80 text-xs sm:text-sm min-h-[44px]">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@swarazspices.com" className="hover:text-background transition-colors font-medium break-all">info@swarazspices.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-background/80 font-medium">
              © 2026 SWARAZ SPICES. All Rights Reserved
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity min-h-[44px] min-w-[44px]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors min-h-[44px] min-w-[44px]"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-background/80 font-medium">
  Designed and Developed by{" "}
  <a
    href="https://staffarc.in"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-background transition-colors"
  >
    Staffarc
  </a>
</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
