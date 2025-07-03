import { useParams, Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, FileText, Share2, Facebook, Twitter } from "lucide-react";
import { useEffect } from "react";

// This data would typically come from an API or CMS
const newsArticles = [
  {
    id: 1,
    title: "Sun Pack Launches New Biodegradable Line",
    excerpt: "Our new line of fully biodegradable packaging products is now available for commercial use.",
    content: `<p>Sun Pack is proud to announce the launch of our revolutionary biodegradable packaging solutions, designed to decompose naturally without harming the environment. After years of research and development, our team has created packaging materials that maintain durability during use while breaking down completely within six months under standard composting conditions.</p>
    
    <p>The new product line includes:</p>
    <ul>
      <li>BioWrap™ - Plant-based wrapping film that offers the same protection as traditional plastic wrap</li>
      <li>EarthBoxes™ - Fully compostable containers for food and consumer goods</li>
      <li>GreenCushion™ - Biodegradable packing materials that replace styrofoam and plastic bubble wrap</li>
    </ul>
    
    <p>"This innovation represents a major step forward in our commitment to sustainability," said Maria Chen, Director of Product Innovation at Sun Pack. "We've managed to create packaging that performs as well as conventional materials but without the environmental impact."</p>
    
    <p>The biodegradable line has already been adopted by several major food producers and consumer goods manufacturers who are working to reduce their environmental footprint. Independent testing has verified that all materials in the new line decompose into non-toxic compounds that can actually enhance soil quality.</p>
    
    <p>The new products will be available for commercial orders beginning next month, with consumer-sized packaging options planned for release later this year.</p>`,
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?w=1200&h=600&fit=crop",
    slug: "biodegradable-line",
    category: "Products"
  },
  {
    id: 2,
    title: "Expanding Operations to South East Asia",
    excerpt: "We're excited to announce our expansion into the South East Asian market with a new manufacturing facility.",
    content: `<p>Sun Pack continues its global growth strategy with the opening of a state-of-the-art manufacturing facility in Jakarta, Indonesia. This expansion will allow us to better serve clients throughout the South East Asian region while creating over 200 new jobs.</p>
    
    <p>The 150,000-square-foot facility represents an investment of $45 million and incorporates our latest sustainable production methods, including:</p>
    <ul>
      <li>Solar power generation covering 60% of energy needs</li>
      <li>Water recycling systems that reduce consumption by 80%</li>
      <li>Zero-waste production processes</li>
      <li>Energy-efficient equipment that reduces carbon emissions</li>
    </ul>
    
    <p>"South East Asia represents an important growth market for sustainable packaging solutions," explained David Lim, Sun Pack's Vice President of International Operations. "This facility allows us to produce locally, reducing both shipping costs and environmental impact while meeting the region's increasing demand for eco-friendly packaging."</p>
    
    <p>The Jakarta facility will produce our full line of packaging solutions with reduced shipping times and lower carbon footprint for regional clients. It joins our network of sustainable manufacturing locations in North America, Europe, and Australia.</p>
    
    <p>Production is scheduled to begin in September, with full operational capacity expected by the end of the year.</p>`,
    date: "May 22, 2023",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=1200&h=600&fit=crop",
    slug: "asia-expansion",
    category: "Business"
  },
  {
    id: 3,
    title: "Industry Award for Sustainable Innovation",
    excerpt: "Sun Pack has been recognized with the prestigious GreenPack award for sustainable packaging innovation.",
    content: `<p>We are honored to announce that Sun Pack has received the 2023 GreenPack Award for Excellence in Sustainable Packaging Innovation. This prestigious industry recognition celebrates our commitment to developing environmentally responsible packaging solutions without compromising on quality or performance.</p>
    
    <p>The award specifically recognizes our new plant-based polymer technology that reduces fossil fuel dependency by 87% compared to traditional packaging materials. This innovation was developed through our dedicated R&D program focused on next-generation sustainable materials.</p>
    
    <p>"This recognition validates our team's tireless work to create truly sustainable packaging solutions," said Robert Zhang, Sun Pack's Chief Technology Officer. "We're proving that environmental responsibility and business success can go hand in hand."</p>
    
    <p>The GreenPack Awards are judged by an independent panel of experts in materials science, sustainability, and industrial design. Competition included entries from over 200 companies across 45 countries, making this one of the most competitive years in the award's history.</p>
    
    <p>In addition to the industry recognition, the award includes a research grant that will help fund Sun Pack's ongoing development of compostable packaging alternatives for challenging applications.</p>
    
    <p>We extend our thanks to all Sun Pack team members whose dedication and innovation made this achievement possible.</p>`,
    date: "April 8, 2023",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=1200&h=600&fit=crop",
    slug: "green-award",
    category: "Awards"
  },
  {
    id: 4,
    title: "Sun Pack Partners with Local Schools for Environmental Education",
    excerpt: "Our new educational initiative aims to teach students about sustainable packaging and environmental responsibility.",
    content: `<p>Sun Pack is proud to announce a new partnership with local school districts to provide educational programs focused on sustainability and responsible packaging. This initiative will reach over 5,000 students in its first year, offering hands-on workshops, learning materials, and facility tours to help young people understand the importance of environmental stewardship.</p>
    
    <p>The program, titled "Pack for the Future," includes age-appropriate curriculum for elementary, middle, and high school students covering topics such as:</p>
    <ul>
      <li>The lifecycle of packaging materials</li>
      <li>Recycling processes and challenges</li>
      <li>Innovations in sustainable materials</li>
      <li>Consumer choices and environmental impact</li>
      <li>Career opportunities in sustainable industries</li>
    </ul>
    
    <p>"Today's students will shape tomorrow's environmental practices," noted Sarah Johnson, Sun Pack's Director of Community Engagement. "By engaging young people in understanding packaging sustainability, we're investing in a future where responsible choices become the norm."</p>
    
    <p>In addition to classroom activities, the program includes a competition where student teams will design sustainable packaging solutions for real-world challenges. Winners will receive scholarships and the opportunity to see their designs developed into prototypes at Sun Pack's innovation lab.</p>
    
    <p>The initiative begins this fall semester at 25 schools, with plans to expand to additional districts in the coming years.</p>`,
    date: "March 15, 2023",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    slug: "education-initiative",
    category: "Community"
  },
  {
    id: 5,
    title: "Quarterly Results Show 22% Growth in Eco-Friendly Product Lines",
    excerpt: "Sun Pack's commitment to sustainability continues to drive strong business performance.",
    content: `<p>Sun Pack's Q1 2023 financial results demonstrate the growing market demand for sustainable packaging solutions, with our eco-friendly product lines showing 22% year-over-year growth. Overall company revenue increased by 15%, outpacing industry averages and validating our strategic focus on environmentally responsible packaging innovations.</p>
    
    <p>Key highlights from the quarterly report include:</p>
    <ul>
      <li>Revenue growth of 15% compared to Q1 2022</li>
      <li>Eco-friendly product lines up 22% year-over-year</li>
      <li>Operating margin improved by 2.5 percentage points</li>
      <li>Three major new client acquisitions in food and beverage sector</li>
      <li>R&D investment increased by 18% to support innovation pipeline</li>
    </ul>
    
    <p>"These results clearly demonstrate that sustainability is not just good for the planet—it's good for business," said Elena Torres, Sun Pack's Chief Financial Officer. "Clients across industries are prioritizing environmentally responsible packaging, and our early investments in this area continue to position us as market leaders."</p>
    
    <p>The company also announced that it remains on track to meet its full-year guidance, with expected annual revenue growth of 12-14% and continued margin expansion.</p>
    
    <p>This growth trajectory supports our continued investment in research and development of new sustainable materials and production processes. Sun Pack plans to launch six new eco-friendly product innovations in the coming fiscal year.</p>`,
    date: "February 28, 2023",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=600&fit=crop",
    slug: "quarterly-results",
    category: "Financial"
  },
  {
    id: 6,
    title: "Sun Pack Achieves Carbon Neutral Certification for Headquarters",
    excerpt: "Our corporate headquarters is now officially carbon neutral, marking an important milestone in our sustainability journey.",
    content: `<p>We are pleased to announce that Sun Pack's corporate headquarters has achieved Carbon Neutral Certification following an extensive assessment and implementation of energy efficiency measures. This accomplishment marks a significant milestone in our company-wide sustainability initiative.</p>
    
    <p>The certification process included a comprehensive carbon footprint analysis followed by systematic reductions through:</p>
    <ul>
      <li>Transitioning to 100% renewable energy sources</li>
      <li>Installing high-efficiency HVAC systems and LED lighting</li>
      <li>Implementing smart building technology to optimize energy usage</li>
      <li>Establishing enhanced recycling and composting programs</li>
      <li>Creating incentives for employee use of public transportation and carpooling</li>
    </ul>
    
    <p>The remaining unavoidable emissions were offset through investments in verified carbon sequestration projects, including reforestation initiatives and renewable energy developments in developing nations.</p>
    
    <p>"Achieving carbon neutrality at our headquarters demonstrates our commitment to walking the talk when it comes to sustainability," said Thomas Lee, Sun Pack's CEO. "This is just one step in our broader environmental strategy, but it's an important one that shows what's possible when an organization makes climate action a priority."</p>
    
    <p>This certification represents a significant step in our company-wide goal to achieve carbon neutrality across all operations by 2030. Sun Pack is now working to implement similar measures across our manufacturing facilities and distribution centers worldwide.</p>`,
    date: "January 12, 2023",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&h=600&fit=crop",
    slug: "carbon-neutral",
    category: "Sustainability"
  }
];

export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = newsArticles.find((item) => item.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <MainLayout>
        <div className="container-custom py-24 text-center">
          <h1 className="text-3xl font-bold mb-6">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button>
            <Link to="/news" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container-custom pb-12 text-white">
            <div className="flex items-center text-sm mb-3">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-background py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <div 
                  className="prose max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                
                {/* Share Section */}
                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share This Article
                  </h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline">
                  <Link to="/news" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to News
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-bold mb-4">Recent Articles</h3>
                <div className="space-y-4">
                  {newsArticles
                    .filter(item => item.id !== article.id)
                    .slice(0, 3)
                    .map(item => (
                      <div key={item.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <Link to={`/news/${item.slug}`} className="hover:text-primary">
                          <h4 className="font-medium mb-1">{item.title}</h4>
                        </Link>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Resources
                </h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Link to="/about" className="flex items-center w-full">
                      Company Profile
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Link to="/products" className="flex items-center w-full">
                      Product Catalog
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Link to="/contact" className="flex items-center w-full">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}