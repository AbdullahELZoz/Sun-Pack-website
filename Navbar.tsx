import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
    submenu: [
      { label: "Food Essentials", href: "/products/food-essentials" },
      { label: "Beverage Packaging", href: "/products/beverage" },
      { label: "Food Accessories", href: "/products/accessories" },
      { label: "Coffee & Creamer Solutions", href: "/products/coffee" },
    ],
  },
  {
    label: "Suppliers",
    href: "/suppliers",
  },
  {
    label: "Consumers",
    href: "/consumers",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setActiveSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  // SVG version of the Sun Pack logo
  const SunPackLogo = () => (
    <div className="flex items-center">
      <div className="mr-3">
        <svg 
          viewBox="0 0 100 100" 
          width="36" 
          height="36" 
          className="text-amber-500"
          aria-hidden="true"
        >
          <g fill="currentColor">
            {/* Stylized sun/flower based on the provided logo */}
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
        <span className="text-xl font-bold text-primary">SUN PACK</span>
        <span className="text-xs text-muted-foreground">PACKING & CATERING</span>
      </div>
    </div>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <SunPackLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-primary rounded-md font-medium"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-primary rounded-md font-medium"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md overflow-hidden z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/products">
            <Button className="hidden md:flex bg-accent hover:bg-accent/90 text-black">
              Shop Now
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-500 hover:text-primary focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t mt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      {activeSubmenu === item.label && (
                        <div className="mt-1 ml-4 border-l-2 border-primary pl-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              onClick={toggleMenu}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={toggleMenu}
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/products" onClick={toggleMenu}>
                <Button className="bg-accent hover:bg-accent/90 text-black mt-2 w-full">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}