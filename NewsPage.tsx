import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, ChevronLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const newsItems = [
  {
    id: 1,
    title: "Sun Pack Launches New Biodegradable Line",
    excerpt: "Our new line of fully biodegradable packaging products is now available for commercial use.",
    content: "Sun Pack is proud to announce the launch of our revolutionary biodegradable packaging solutions, designed to decompose naturally without harming the environment. After years of research and development, our team has created packaging materials that maintain durability during use while breaking down completely within six months under standard composting conditions. This innovation represents a major step forward in our commitment to sustainability and responsible business practices.",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?w=800&h=500&fit=crop",
    slug: "/news/biodegradable-line",
    category: "Products"
  },
  {
    id: 2,
    title: "Expanding Operations to South East Asia",
    excerpt: "We're excited to announce our expansion into the South East Asian market with a new manufacturing facility.",
    content: "Sun Pack continues its global growth strategy with the opening of a state-of-the-art manufacturing facility in Jakarta, Indonesia. This expansion will allow us to better serve clients throughout the South East Asian region while creating over 200 new jobs. The facility incorporates our latest sustainable production methods and will produce our full line of packaging solutions with reduced shipping times and lower carbon footprint for regional clients.",
    date: "May 22, 2023",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=800&h=500&fit=crop",
    slug: "/news/asia-expansion",
    category: "Business"
  },
  {
    id: 3,
    title: "Industry Award for Sustainable Innovation",
    excerpt: "Sun Pack has been recognized with the prestigious GreenPack award for sustainable packaging innovation.",
    content: "We are honored to announce that Sun Pack has received the 2023 GreenPack Award for Excellence in Sustainable Packaging Innovation. This prestigious industry recognition celebrates our commitment to developing environmentally responsible packaging solutions without compromising on quality or performance. The award specifically recognizes our new plant-based polymer technology that reduces fossil fuel dependency by 87% compared to traditional packaging materials.",
    date: "April 8, 2023",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=500&fit=crop",
    slug: "/news/green-award",
    category: "Awards"
  },
  {
    id: 4,
    title: "Sun Pack Partners with Local Schools for Environmental Education",
    excerpt: "Our new educational initiative aims to teach students about sustainable packaging and environmental responsibility.",
    content: "Sun Pack is proud to announce a new partnership with local school districts to provide educational programs focused on sustainability and responsible packaging. This initiative will reach over 5,000 students in its first year, offering hands-on workshops, learning materials, and facility tours to help young people understand the importance of environmental stewardship and the role innovative packaging solutions play in protecting our planet.",
    date: "March 15, 2023",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    slug: "/news/education-initiative",
    category: "Community"
  },
  {
    id: 5,
    title: "Quarterly Results Show 22% Growth in Eco-Friendly Product Lines",
    excerpt: "Sun Pack's commitment to sustainability continues to drive strong business performance.",
    content: "Sun Pack's Q1 2023 financial results demonstrate the growing market demand for sustainable packaging solutions, with our eco-friendly product lines showing 22% year-over-year growth. Overall company revenue increased by 15%, outpacing industry averages and validating our strategic focus on environmentally responsible packaging innovations. This growth trajectory supports our continued investment in research and development of new sustainable materials and production processes.",
    date: "February 28, 2023",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
    slug: "/news/quarterly-results",
    category: "Financial"
  },
  {
    id: 6,
    title: "Sun Pack Achieves Carbon Neutral Certification for Headquarters",
    excerpt: "Our corporate headquarters is now officially carbon neutral, marking an important milestone in our sustainability journey.",
    content: "We are pleased to announce that Sun Pack's corporate headquarters has achieved Carbon Neutral Certification following an extensive assessment and implementation of energy efficiency measures. This accomplishment includes transitioning to 100% renewable energy sources, optimizing building systems for maximum efficiency, and investing in verified carbon offset projects to neutralize remaining emissions. This certification represents a significant step in our company-wide goal to achieve carbon neutrality across all operations by 2030.",
    date: "January 12, 2023",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=500&fit=crop",
    slug: "/news/carbon-neutral",
    category: "Sustainability"
  }
];

const categories = ["All", "Products", "Business", "Sustainability", "Awards", "Community", "Financial"];

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 4;

  // Filter news items by category and search term
  const filteredItems = newsItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl max-w-2xl">
            Stay informed about Sun Pack's latest developments, industry news, and sustainability initiatives.
          </p>
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-bold mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search news..." 
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1); // Reset to first page on search
                    }}
                  />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category 
                          ? "bg-primary text-white" 
                          : "hover:bg-muted"
                      }`}
                      onClick={() => {
                        setActiveCategory(category);
                        setCurrentPage(1); // Reset to first page on category change
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4">
              {searchTerm && filteredItems.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <p className="text-xl mb-4">No results found for "{searchTerm}"</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchTerm("")}
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {currentItems.map((item) => (
                      <Card key={item.id} className="card-hover overflow-hidden h-full flex flex-col">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6 flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{item.date}</span>
                            </div>
                            <span className="text-xs px-2 py-1 bg-muted rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.excerpt}</p>
                        </CardContent>
                        <CardFooter className="px-6 pb-6 pt-0">
                          <Button variant="link" className="p-0 h-auto text-primary">
                            <Link to={item.slug} className="flex items-center">
                              Read More
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-8 gap-2">
                      <Button 
                        variant="outline" 
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="ml-2">Previous</span>
                      </Button>
                      
                      <div className="flex items-center gap-1 px-4">
                        <span className="text-sm text-muted-foreground">
                          Page {currentPage} of {totalPages}
                        </span>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                      >
                        <span className="mr-2">Next</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}