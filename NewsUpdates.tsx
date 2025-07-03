import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Sun Pack Launches New Biodegradable Line",
    excerpt: "Our new line of fully biodegradable packaging products is now available for commercial use.",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?w=600&h=400&fit=crop",
    slug: "/news/biodegradable-line"
  },
  {
    id: 2,
    title: "Expanding Operations to South East Asia",
    excerpt: "We're excited to announce our expansion into the South East Asian market with a new manufacturing facility.",
    date: "May 22, 2023",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600&h=400&fit=crop",
    slug: "/news/asia-expansion"
  },
  {
    id: 3,
    title: "Industry Award for Sustainable Innovation",
    excerpt: "Sun Pack has been recognized with the prestigious GreenPack award for sustainable packaging innovation.",
    date: "April 8, 2023",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&h=400&fit=crop",
    slug: "/news/green-award"
  }
];

export function NewsUpdates() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">News & Updates</h2>
            <p className="text-muted-foreground">
              Stay informed about our latest developments and industry news
            </p>
          </div>
          <Button className="mt-4 md:mt-0" variant="outline">
            <Link to="/news" className="flex items-center">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="card-hover overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="link" className="p-0 h-auto text-primary">
                  <Link to={item.slug} className="flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}