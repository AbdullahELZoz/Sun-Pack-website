import { Award, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  { year: "1995", event: "Company founded with a focus on food packaging" },
  { year: "2002", event: "Expanded to beverage packaging solutions" },
  { year: "2008", event: "Pioneered eco-friendly packaging materials" },
  { year: "2015", event: "Global expansion across three continents" },
  { year: "2020", event: "Launched innovative sustainable packaging line" },
  { year: "Present", event: "Industry leader with cutting-edge solutions" },
];

export function CompanyOverview() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 25 years in the industry, we've established ourselves as a leading provider of innovative packaging solutions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center card-hover">
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Financial Stability</h3>
              <p className="text-muted-foreground">
                Consistent growth at 15% annually for the past 5 years
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-full max-w-[200px] h-4 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                </div>
                <span className="ml-2 font-medium">85%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center card-hover">
            <CardContent className="pt-6">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">
                Serving 1,000+ clients across 35+ countries worldwide
              </p>
              <div className="mt-4 grid grid-cols-5 gap-1 max-w-[200px] mx-auto">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-4 h-4 rounded-sm bg-secondary"
                  ></div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="text-center card-hover">
            <CardContent className="pt-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Industry Recognition</h3>
              <p className="text-muted-foreground">
                Multiple awards for innovation and sustainability
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.585l6.43 3.885-1.705-7.355L20 7.102l-7.412-.631L10 0 7.412 6.471 0 7.102l5.275 5.013-1.705 7.355L10 15.585z"
                    />
                  </svg>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row md:items-center justify-between mb-8 relative ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>
                  
                  {/* Year */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className="bg-primary text-white font-bold px-4 py-2 rounded-md inline-block mb-2 md:mb-0">
                      {item.year}
                    </div>
                  </div>
                  
                  {/* Empty space */}
                  <div className="md:w-2/12"></div>
                  
                  {/* Event */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="card-hover">
                      <CardContent className="p-4">
                        <p className="font-medium">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}