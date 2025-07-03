import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Leaf, 
  ThumbsUp, 
  Package,
  Coffee,
  UtensilsCrossed,
  Wine,
  ShoppingCart,
  Heart,
  Star
} from "lucide-react";

// Product types
type Product = {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  image: string;
  description: string;
  price: string;
  material: string;
  dimensions: string;
  sustainability: number;
  featured?: boolean;
};

// Product data
const products: Product[] = [
  {
    id: "p1",
    name: "Premium Sugar Packaging",
    category: "food-essentials",
    subCategory: "Sugar",
    image: "https://images.unsplash.com/photo-1597528662465-55a3b1b31b8a?w=800&h=600&fit=crop",
    description: "High-quality food-grade packaging for sugar with moisture resistance properties.",
    price: "$120-$300",
    material: "Food-grade PE/PP",
    dimensions: "Various sizes available",
    sustainability: 4,
    featured: true
  },
  {
    id: "p2",
    name: "Salt Packaging Solutions",
    category: "food-essentials",
    subCategory: "Salt",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&h=600&fit=crop",
    description: "Anti-caking packaging solutions for salt with humidity control.",
    price: "$100-$250",
    material: "Laminated paper with PE barrier",
    dimensions: "Standard and custom sizes",
    sustainability: 3
  },
  {
    id: "p3",
    name: "Eco PET Beverage Bottles",
    category: "beverage",
    subCategory: "Bottles",
    image: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=800&h=600&fit=crop",
    description: "Recyclable PET bottles for soft drinks and water with excellent clarity.",
    price: "$80-$200",
    material: "Recycled PET",
    dimensions: "330ml, 500ml, 1L, 2L",
    sustainability: 5,
    featured: true
  },
  {
    id: "p4",
    name: "Premium Wooden Toothpicks",
    category: "accessories",
    subCategory: "Toothpicks",
    image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?w=800&h=600&fit=crop",
    description: "High-quality wooden toothpicks with individual paper wrapping.",
    price: "$60-$150",
    material: "Sustainable birch wood",
    dimensions: "65mm standard length",
    sustainability: 5
  },
  {
    id: "p5",
    name: "Biodegradable Straws",
    category: "accessories",
    subCategory: "Straws",
    image: "https://images.unsplash.com/photo-1613243555772-839aa3d8edb3?w=800&h=600&fit=crop",
    description: "Eco-friendly paper straws that decompose naturally within 45-60 days.",
    price: "$40-$100",
    material: "Food-grade paper",
    dimensions: "197mm length, 6mm diameter",
    sustainability: 5,
    featured: true
  },
  {
    id: "p6",
    name: "Coffee Bean Valve Bags",
    category: "coffee",
    subCategory: "Coffee Packaging",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&h=600&fit=crop",
    description: "One-way valve bags that allow coffee to degas while preventing oxygen exposure.",
    price: "$150-$350",
    material: "Kraft paper with PE lining",
    dimensions: "250g, 500g, 1kg options",
    sustainability: 4
  },
  {
    id: "p7",
    name: "Non-Dairy Creamer Packets",
    category: "coffee",
    subCategory: "Creamer Packaging",
    image: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?w=800&h=600&fit=crop",
    description: "Individual serving creamer packets with easy-tear opening.",
    price: "$90-$200",
    material: "Aluminum/PE laminate",
    dimensions: "4g individual servings",
    sustainability: 2
  },
  {
    id: "p8",
    name: "Wine Bottle Packaging",
    category: "beverage",
    subCategory: "Premium Packaging",
    image: "https://images.unsplash.com/photo-1566060475410-2693136aede6?w=800&h=600&fit=crop",
    description: "Premium packaging solutions for wine bottles with foam inserts for protection.",
    price: "$200-$500",
    material: "Corrugated cardboard with recycled content",
    dimensions: "Fits standard wine bottles",
    sustainability: 4,
    featured: true
  }
];

// Filter options
const categories = ["All", "food-essentials", "beverage", "accessories", "coffee"];
const sustainabilityLevels = [1, 2, 3, 4, 5];

function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [minSustainability, setMinSustainability] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Handle adding/removing favorites
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter products based on tab, search query, and sustainability
  const filteredProducts = products.filter(product => {
    // Filter by category
    if (activeTab !== "all" && product.category !== activeTab) return false;
    
    // Filter by search query
    if (
      searchQuery && 
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
      !product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    
    // Filter by sustainability
    if (minSustainability > 0 && product.sustainability < minSustainability) return false;
    
    return true;
  });

  // Get category display name
  const getCategoryDisplayName = (category: string) => {
    switch(category) {
      case "food-essentials": return "Food Essentials";
      case "beverage": return "Beverage Packaging";
      case "accessories": return "Food Accessories";
      case "coffee": return "Coffee Solutions";
      default: return category;
    }
  };

  // Render sustainability stars
  const renderSustainabilityStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating ? "text-secondary fill-secondary" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Catalog</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Browse our comprehensive range of high-quality packaging solutions designed for various
            industries and applications.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 bg-white text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <Filter className="text-white" />
              <span>Eco-friendly:</span>
              <select
                className="bg-primary border border-white rounded-md py-2 px-3 focus:outline-none"
                value={minSustainability}
                onChange={(e) => setMinSustainability(Number(e.target.value))}
              >
                <option value="0">Any</option>
                {sustainabilityLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}+ stars
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue="all" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span>All Products</span>
                </TabsTrigger>
                <TabsTrigger value="food-essentials" className="flex items-center gap-2">
                  <UtensilsCrossed className="h-4 w-4" />
                  <span>Food Essentials</span>
                </TabsTrigger>
                <TabsTrigger value="beverage" className="flex items-center gap-2">
                  <Wine className="h-4 w-4" />
                  <span>Beverage</span>
                </TabsTrigger>
                <TabsTrigger value="accessories" className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Accessories</span>
                </TabsTrigger>
                <TabsTrigger value="coffee" className="flex items-center gap-2">
                  <Coffee className="h-4 w-4" />
                  <span>Coffee Solutions</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-6">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-10">
                  <Package className="h-16 w-16 mx-auto text-gray-400" />
                  <h3 className="text-xl font-bold mt-4">No products found</h3>
                  <p className="text-gray-600 mt-2">Try adjusting your filters or search query</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col">
                      <div className="relative h-56">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {product.featured && (
                          <Badge className="absolute top-3 right-3 bg-accent text-black">
                            Featured
                          </Badge>
                        )}
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md"
                        >
                          <Heart
                            className={`h-5 w-5 ${
                              favorites.includes(product.id)
                                ? "text-red-500 fill-red-500"
                                : "text-gray-400"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-1">
                          <Badge variant="outline" className="text-xs font-normal bg-primary/5 text-primary border-primary/20">
                            {getCategoryDisplayName(product.category)}
                          </Badge>
                          <Badge variant="outline" className="text-xs font-normal ml-2 bg-gray-100 text-gray-700 border-gray-200">
                            {product.subCategory}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mt-2 flex-grow">{product.description}</p>
                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Material:</span>
                            <span className="font-medium text-gray-800">{product.material}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Dimensions:</span>
                            <span className="font-medium text-gray-800">{product.dimensions}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Sustainability:</span>
                            {renderSustainabilityStars(product.sustainability)}
                          </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                          <span className="font-bold text-primary">{product.price}</span>
                          <Button size="sm" className="bg-accent hover:bg-accent/90 text-black flex items-center gap-2">
                            <ShoppingCart className="h-4 w-4" />
                            <span>Request Quote</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5 border-t border-b border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Need Custom Packaging Solutions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Our team of packaging experts can help you develop tailored solutions for your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90">Request Consultation</Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ProductsPage;