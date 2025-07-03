import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  CheckCircle, 
  Award, 
  Users, 
  Leaf, 
  Globe, 
  Milestone, 
  TrendingUp 
} from "lucide-react";

function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PackSolutions</h1>
            <p className="text-xl mb-8">
              A global leader in innovative and sustainable packaging solutions since 1985.
              We're committed to quality, innovation, and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1985, PackSolutions began as a small family business specializing in food packaging.
                Over the decades, we've grown into a global enterprise serving diverse industries while maintaining
                our commitment to quality and personalized service.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been marked by continuous innovation, strategic expansion, and a deep commitment
                to sustainability. Today, we're proud to be at the forefront of the packaging industry,
                developing solutions that meet the evolving needs of businesses and consumers alike.
              </p>
              <p className="text-gray-600">
                With operations in 15 countries and partnerships with leading brands worldwide,
                we continue to push the boundaries of what's possible in packaging technology.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1574717024172-81186a4a125e?w=800&h=600&fit=crop"
                alt="Factory floor with packaging equipment"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Journey</h2>
          <div className="relative">
            {/* Timeline center line */}
            <div className="hidden md:block absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              {/* 1985 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-2">1985</h3>
                    <p className="text-gray-600">Founded as a small family business specializing in basic food packaging solutions.</p>
                  </div>
                </div>
                <div className="hidden md:block z-10 rounded-full bg-primary text-white p-2">
                  <Milestone className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 1995 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="hidden md:block z-10 rounded-full bg-primary text-white p-2">
                  <Milestone className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-2">1995</h3>
                    <p className="text-gray-600">Expanded operations nationally and introduced our first line of eco-friendly packaging.</p>
                  </div>
                </div>
              </div>
              
              {/* 2005 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-2">2005</h3>
                    <p className="text-gray-600">Began international expansion with new facilities in Europe and Asia.</p>
                  </div>
                </div>
                <div className="hidden md:block z-10 rounded-full bg-primary text-white p-2">
                  <Milestone className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 2015 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="hidden md:block z-10 rounded-full bg-primary text-white p-2">
                  <Milestone className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-2">2015</h3>
                    <p className="text-gray-600">Launched our revolutionary sustainable packaging initiative, reducing plastic use by 40%.</p>
                  </div>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-2">2023</h3>
                    <p className="text-gray-600">Achieved carbon neutrality across all operations and expanded to 15 countries worldwide.</p>
                  </div>
                </div>
                <div className="hidden md:block z-10 rounded-full bg-primary text-white p-2">
                  <Milestone className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in all our products, ensuring reliability and customer satisfaction.
              </p>
            </div>
            
            {/* Innovation */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new technologies and methodologies to stay at the forefront of packaging solutions.
              </p>
            </div>
            
            {/* Sustainability */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 rounded-full bg-secondary/10 mb-4">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible practices across all our operations and products.
              </p>
            </div>
            
            {/* Partnership */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 rounded-full bg-secondary/10 mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Partnership</h3>
              <p className="text-gray-600">
                We build strong, lasting relationships with our clients, suppliers, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Company Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Clients */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-5xl font-bold text-primary mb-2">1,200+</h3>
              <p className="text-gray-600 text-lg">Global Clients</p>
            </div>
            
            {/* Countries */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-5xl font-bold text-primary mb-2">15</h3>
              <p className="text-gray-600 text-lg">Countries</p>
            </div>
            
            {/* Team */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-5xl font-bold text-secondary mb-2">2,500+</h3>
              <p className="text-gray-600 text-lg">Team Members</p>
            </div>
            
            {/* Products */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-5xl font-bold text-secondary mb-2">350+</h3>
              <p className="text-gray-600 text-lg">Product Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=350&fit=crop" 
                alt="CEO" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Michael Thompson</h3>
                <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 25 years in the packaging industry, Michael leads our global strategy and operations.
                </p>
              </div>
            </div>
            
            {/* COO */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=350&fit=crop" 
                alt="COO" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Sarah Chen</h3>
                <p className="text-primary font-medium mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Sarah oversees our manufacturing processes and supply chain operations across all facilities.
                </p>
              </div>
            </div>
            
            {/* CTO */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=350&fit=crop" 
                alt="CTO" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">David Rodriguez</h3>
                <p className="text-primary font-medium mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  David leads our innovation initiatives, focusing on sustainable materials and smart packaging solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Global Network</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a potential client, supplier, or team member, we'd love to connect with you and explore how we can work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10">
              Explore Careers
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default AboutPage;