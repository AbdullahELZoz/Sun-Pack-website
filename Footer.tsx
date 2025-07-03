import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  // SVG version of the Sun Pack logo for the footer
  const SunPackLogo = () => (
    <div className="flex items-center">
      <div className="mr-3">
        <svg 
          viewBox="0 0 100 100" 
          width="36" 
          height="36" 
          className="text-amber-400"
          aria-hidden="true"
        >
          <g fill="currentColor">
            <path d="M50,25 C52.5,25 55,27.5 55,30 C55,32.5 52.5,35 50,35 C47.5,35 45,32.5 45,30 C45,27.5 47.5,25 50,25 Z" />
            <path d="M65,30 C67.5,30 70,32.5 70,35 C70,37.5 67.5,40 65,40 C62.5,40 60,37.5 60,35 C60,32.5 62.5,30 65,30 Z" />
            <path d="M70,45 C72.5,45 75,47.5 75,50 C75,52.5 72.5,55 70,55 C67.5,55 65,52.5 65,50 C65,47.5 67.5,45 70,45 Z" />
            <path d="M65,60 C67.5,60 70,62.5 70,65 C70,67.5 67.5,70 65,70 C62.5,70 60,67.5 60,65 C60,62.5 62.5,60 65,60 Z" />
            <path d="M50,65 C52.5,65 55,67.5 55,70 C55,72.5 52.5,75 50,75 C47.5,75 45,72.5 45,70 C45,67.5 47.5,65 50,65 Z" />
            <path d="M35,60 C37.5,60 40,62.5 40,65 C40,67.5 37.5,70 35,70 C32.5,70 30,67.5 30,65 C30,62.5 32.5,60 35,60 Z" />
            <path d="M30,45 C32.5,45 35,47.5 35,50 C35,52.5 32.5,55 30,55 C27.5,55 25,52.5 25,50 C25,47.5 27.5,45 30,45 Z" />
            <path d="M35,30 C37.5,30 40,32.5 40,35 C40,37.5 37.5,40 35,40 C32.5,40 30,37.5 30,35 C30,32.5 32.5,30 35,30 Z" />
            <path d="M50,40 C55.5,40 60,44.5 60,50 C60,55.5 55.5,60 50,60 C44.5,60 40,55.5 40,50 C40,44.5 44.5,40 50,40 Z" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white">SUN PACK</span>
        <span className="text-xs text-gray-300">PACKING & CATERING</span>
      </div>
    </div>
  );

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <SunPackLogo />
            </Link>
            <p className="text-gray-200 mb-4">
              Providing innovative and sustainable packaging solutions for businesses worldwide since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-200 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-200 hover:text-accent transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/suppliers" className="text-gray-200 hover:text-accent transition-colors">Suppliers Portal</Link>
              </li>
              <li>
                <Link to="/consumers" className="text-gray-200 hover:text-accent transition-colors">Consumer Information</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-200 hover:text-accent transition-colors">News & Updates</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">123 Packaging Way, Industrial District, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-gray-200">+123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-gray-200">info@sunpack.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-200 mb-4">
              Subscribe to receive updates on new products and industry news.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 placeholder:text-gray-300 text-white"
              />
              <Button className="w-full bg-accent hover:bg-accent/90 text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-white/20 text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Sun Pack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}