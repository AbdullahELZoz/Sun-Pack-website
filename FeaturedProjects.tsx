import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Eco-Friendly Beverage Containers",
    image: "https://images.unsplash.com/photo-1581541710331-21c8dd8fc1f6?w=800&h=500&fit=crop",
    description: "Developed 100% biodegradable beverage containers using plant-based materials for a major beverage company.",
    testimonial: "The sustainable packaging solutions provided by PackSolutions have helped us reduce our carbon footprint by 35% while maintaining product integrity.",
    clientName: "Sarah Johnson",
    clientPosition: "Sustainability Director, GreenDrink Co."
  },
  {
    id: 2,
    title: "Premium Coffee Packaging",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&h=500&fit=crop",
    description: "Created premium, airtight coffee packaging solutions that preserve freshness and flavor for specialty coffee roasters.",
    testimonial: "Since switching to PackSolutions, our coffee stays fresh twice as long, and customers love the professional look and feel of our packaging.",
    clientName: "Mark Williams",
    clientPosition: "Founder, Artisan Coffee Roasters"
  },
  {
    id: 3,
    title: "Food Safety Packaging Systems",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=500&fit=crop",
    description: "Engineered tamper-evident packaging solutions for food products that ensure safety while maintaining ease of use for consumers.",
    testimonial: "The innovative tamper-evident packaging has improved consumer confidence in our products and helped us meet strict regulatory requirements.",
    clientName: "Elena Martinez",
    clientPosition: "Quality Control Manager, Fresh Foods Inc."
  }
];

export function FeaturedProjects() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="section-spacing bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our innovative packaging solutions and how they've helped our clients succeed.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Navigation */}
          <div className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              onClick={scrollLeft}
              size="icon"
              variant="outline"
              className="rounded-full bg-white border-gray-300 hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>
          
          <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              onClick={scrollRight}
              size="icon"
              variant="outline"
              className="rounded-full bg-white border-gray-300 hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          
          {/* Project Cards */}
          <div 
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          >
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="min-w-[300px] md:min-w-[400px] flex-shrink-0 card-hover snap-start"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex items-start space-x-3">
                      <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="italic text-sm mb-2">{project.testimonial}</p>
                        <p className="font-medium text-sm">{project.clientName}</p>
                        <p className="text-xs text-muted-foreground">{project.clientPosition}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}