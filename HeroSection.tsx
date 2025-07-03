import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=1500&h=900&fit=crop')] bg-cover bg-center"></div>
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Innovative Packaging Solutions for Every Need
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            From food essentials to premium beverages, we provide sustainable, high-quality packaging solutions for businesses and consumers worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-black">
              <Link to="/products" className="flex items-center">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/suppliers" className="flex items-center">
                Become a Supplier
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
}