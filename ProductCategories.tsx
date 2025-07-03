import { Link } from "react-router-dom";
import { Coffee, Utensils, Wine, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Food Essentials",
    icon: <Utensils className="h-10 w-10" />,
    description: "Packaging for essential food items like sugar, salt, and more.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&h=600&fit=crop",
    slug: "/products/food-essentials",
    color: "bg-primary"
  },
  {
    id: 2,
    name: "Beverage Packaging",
    icon: <Wine className="h-10 w-10" />,
    description: "Innovative solutions for all types of beverages.",
    image: "https://images.unsplash.com/photo-1606333259737-23e41a1775fa?w=800&h=600&fit=crop",
    slug: "/products/beverage",
    color: "bg-secondary"
  },
  {
    id: 3,
    name: "Food Accessories",
    icon: <Package className="h-10 w-10" />,
    description: "Packaging for toothpicks, straws, and other accessories.",
    image: "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=800&h=600&fit=crop",
    slug: "/products/accessories",
    color: "bg-accent"
  },
  {
    id: 4,
    name: "Coffee & Creamer",
    icon: <Coffee className="h-10 w-10" />,
    description: "Specialized packaging for coffee, tea, and creamers.",
    image: "https://images.unsplash.com/photo-1565600425662-5ef18d020c18?w=800&h=600&fit=crop",
    slug: "/products/coffee",
    color: "bg-primary"
  }
];

export function ProductCategories() {
  return (
    <section className="section-spacing bg-gradient-to-b from-white to-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of packaging solutions tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg shadow-md h-[320px]">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <div className={`${category.color} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="opacity-90">{category.description}</p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black transition-colors w-full mt-4"
                >
                  <Link to={category.slug} className="w-full">Explore Products</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}