import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Check,
  ShoppingBag,
  FileQuestion,
  Star,
  Info,
  BookOpen,
  Download,
  ThumbsUp,
  ShieldCheck,
  Leaf
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

function ConsumersPage() {
  const handleTabChange = (value: string) => {
    // Find the tab element with the specified value and navigate to it
    const element = document.querySelector(`[data-value="${value}"]`) as HTMLElement | null;
    if (element) {
      element.click();
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consumer Information</h1>
            <p className="text-xl mb-8">
              Everything you need to know about our packaging products for individual use, 
              including bulk purchases, usage instructions, and product information.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100">
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="products" className="text-center">Product Information</TabsTrigger>
              <TabsTrigger value="purchases" className="text-center">Bulk Purchases</TabsTrigger>
              <TabsTrigger value="faq" className="text-center">FAQ</TabsTrigger>
              <TabsTrigger value="guides" className="text-center">Usage Guides</TabsTrigger>
            </TabsList>

            {/* Product Information Tab */}
            <TabsContent value="products">
              <div className="grid gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Our Product Categories</CardTitle>
                    <CardDescription>
                      Browse our range of packaging solutions designed for individual consumers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Food Essentials */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120&h=120&fit=crop" 
                            alt="Food Essentials" 
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Food Essentials</h3>
                          <p className="text-gray-600 text-sm mb-3">
                            High-quality packaging for everyday kitchen staples like sugar, salt, 
                            and other food essentials.
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                              Food-grade
                            </Badge>
                            <Badge variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                              Eco-friendly
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      {/* Beverage Packaging */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=120&h=120&fit=crop" 
                            alt="Beverage Packaging" 
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Beverage Packaging</h3>
                          <p className="text-gray-600 text-sm mb-3">
                            Premium bottles and containers for water, juices, and other beverages, 
                            designed for freshness and convenience.
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                              BPA-free
                            </Badge>
                            <Badge variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                              Recyclable
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      {/* Food Accessories */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1614632537190-23e4146777db?w=120&h=120&fit=crop" 
                            alt="Food Accessories" 
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Food Accessories</h3>
                          <p className="text-gray-600 text-sm mb-3">
                            Essential dining accessories including toothpicks, straws, and other 
                            food serving items for home and events.
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                              Food-safe
                            </Badge>
                            <Badge variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                              Biodegradable
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      {/* Coffee Solutions */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=120&h=120&fit=crop" 
                            alt="Coffee Solutions" 
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Coffee Solutions</h3>
                          <p className="text-gray-600 text-sm mb-3">
                            Specialized packaging for coffee beans, grounds, and creamers, 
                            designed to preserve freshness and flavor.
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                              Aroma-lock
                            </Badge>
                            <Badge variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                              One-way valve
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Product Features & Benefits</CardTitle>
                    <CardDescription>
                      Key features that make our packaging solutions stand out
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Food Safety */}
                      <div className="p-6 border rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-bold">Food Safety</h3>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">FDA-approved food-grade materials</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">BPA-free plastics for all food contact</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Rigorous testing for chemical leaching</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Sustainability */}
                      <div className="p-6 border rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-secondary/10 p-2 rounded-full">
                            <Leaf className="h-6 w-6 text-secondary" />
                          </div>
                          <h3 className="text-lg font-bold">Sustainability</h3>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Recycled and recyclable materials</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Biodegradable options for accessories</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Reduced plastic content where possible</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Convenience */}
                      <div className="p-6 border rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-accent/10 p-2 rounded-full">
                            <ThumbsUp className="h-6 w-6 text-accent" />
                          </div>
                          <h3 className="text-lg font-bold">Convenience</h3>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Easy-open designs for all ages</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Resealable options for extended freshness</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Stackable designs for efficient storage</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => handleTabChange("purchases")}
                >
                  Learn About Bulk Purchases
                </Button>
              </div>
            </TabsContent>

            {/* Bulk Purchases Tab */}
            <TabsContent value="purchases">
              <div className="max-w-4xl mx-auto">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Bulk Purchase Options</CardTitle>
                    <CardDescription>
                      Save money and reduce packaging waste with our bulk purchase options for individuals and small businesses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Small Bulk */}
                      <div className="border rounded-lg p-6 relative">
                        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                          Popular
                        </div>
                        <h3 className="text-xl font-bold mb-2">Small Bulk</h3>
                        <p className="text-sm text-gray-500 mb-4">Ideal for households</p>
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-primary">$50-$150</span>
                          <span className="text-gray-500 ml-2">per order</span>
                        </div>
                        <ul className="mb-8 space-y-3">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">25-50 units per product</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">5% discount on retail prices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">Standard delivery options</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">Minimum order: $50</span>
                          </li>
                        </ul>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Order Now
                        </Button>
                      </div>
                      
                      {/* Medium Bulk */}
                      <div className="border rounded-lg p-6 border-accent bg-accent/5 relative">
                        <div className="absolute top-0 right-0 bg-accent text-black px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                          Best Value
                        </div>
                        <h3 className="text-xl font-bold mb-2">Medium Bulk</h3>
                        <p className="text-sm text-gray-500 mb-4">Perfect for small businesses</p>
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-primary">$150-$500</span>
                          <span className="text-gray-500 ml-2">per order</span>
                        </div>
                        <ul className="mb-8 space-y-3">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">100-250 units per product</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">15% discount on retail prices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">Free standard shipping</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">Customization options available</span>
                          </li>
                        </ul>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-black">
                          Order Now
                        </Button>
                      </div>
                      
                      {/* Large Bulk */}
                      <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Large Bulk</h3>
                        <p className="text-sm text-gray-500 mb-4">For larger operations</p>
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-primary">$500+</span>
                          <span className="text-gray-500 ml-2">per order</span>
                        </div>
                        <ul className="mb-8 space-y-3">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">500+ units per product</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">25% discount on retail prices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">Priority shipping & handling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span className="text-gray-600">Dedicated account manager</span>
                          </li>
                        </ul>
                        <Button variant="outline" className="w-full border-primary text-primary">
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">How Bulk Ordering Works</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center p-4">
                        <div className="bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary">1</span>
                        </div>
                        <h4 className="font-bold mb-2">Select Products</h4>
                        <p className="text-sm text-gray-600">
                          Browse our catalog and select the products you want to order in bulk
                        </p>
                      </div>
                      
                      <div className="text-center p-4">
                        <div className="bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary">2</span>
                        </div>
                        <h4 className="font-bold mb-2">Choose Quantity</h4>
                        <p className="text-sm text-gray-600">
                          Select the quantity for each product based on your needs
                        </p>
                      </div>
                      
                      <div className="text-center p-4">
                        <div className="bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary">3</span>
                        </div>
                        <h4 className="font-bold mb-2">Submit Order</h4>
                        <p className="text-sm text-gray-600">
                          Review your selections and submit your order with payment details
                        </p>
                      </div>
                      
                      <div className="text-center p-4">
                        <div className="bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary">4</span>
                        </div>
                        <h4 className="font-bold mb-2">Receive Delivery</h4>
                        <p className="text-sm text-gray-600">
                          Your bulk order will be delivered to your specified address
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-primary/5 p-6 rounded-lg shadow-sm mb-8">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="md:w-1/5 flex justify-center">
                      <ShoppingBag className="h-12 w-12 text-primary" />
                    </div>
                    <div className="md:w-4/5 text-center md:text-left">
                      <h3 className="text-lg font-bold mb-2">Need Help With Your Bulk Order?</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Our customer service team is ready to assist with any questions about bulk ordering, 
                        special requirements, or custom orders.
                      </p>
                      <Button className="bg-primary hover:bg-primary/90">
                        Contact Sales Team
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq">
              <div className="max-w-4xl mx-auto">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Frequently Asked Questions</CardTitle>
                    <CardDescription>
                      Find answers to common questions about our products and services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="q1">
                        <AccordionTrigger className="text-left">
                          Are your packaging products food-safe?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Yes, all our food packaging products are made with food-grade materials that meet or exceed FDA standards. 
                            We regularly test our products to ensure they are safe for direct food contact and free from harmful chemicals.
                          </p>
                          <p>
                            Our food-grade products are clearly labeled in their descriptions and are certified for food safety compliance.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="q2">
                        <AccordionTrigger className="text-left">
                          What sustainable options do you offer?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            We offer several sustainable packaging options including:
                          </p>
                          <ul className="list-disc pl-6 mb-2 space-y-1">
                            <li>Recyclable PET bottles and containers</li>
                            <li>Biodegradable paper straws and toothpicks</li>
                            <li>Compostable food containers</li>
                            <li>Packaging with recycled content</li>
                          </ul>
                          <p>
                            Look for our "Eco-friendly" badge on products to identify sustainable options. We're continuously expanding our 
                            sustainable product line to reduce environmental impact.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="q3">
                        <AccordionTrigger className="text-left">
                          What is the minimum order quantity?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Our minimum order quantities vary by product category:
                          </p>
                          <ul className="list-disc pl-6 mb-2 space-y-1">
                            <li>Standard retail purchases: No minimum</li>
                            <li>Small bulk orders: Generally 25-50 units per item with a $50 minimum total order</li>
                            <li>Medium bulk orders: Generally 100-250 units per item</li>
                            <li>Large bulk orders: Generally 500+ units per item</li>
                          </ul>
                          <p>
                            Specific minimum quantities are listed on each product page. If you need a custom quantity, please contact our sales team.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="q4">
                        <AccordionTrigger className="text-left">
                          How long does shipping take?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Standard shipping within the continental United States typically takes:
                          </p>
                          <ul className="list-disc pl-6 mb-2 space-y-1">
                            <li>Retail orders: 3-5 business days</li>
                            <li>Small bulk orders: 5-7 business days</li>
                            <li>Medium bulk orders: 7-10 business days</li>
                            <li>Large bulk orders: 10-15 business days</li>
                          </ul>
                          <p>
                            Expedited shipping options are available at checkout for most products. International shipping times vary by destination.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="q5">
                        <AccordionTrigger className="text-left">
                          Do you offer customization for individual orders?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Yes, we offer various customization options depending on order size:
                          </p>
                          <ul className="list-disc pl-6 mb-2 space-y-1">
                            <li>Color variations: Available on select products with minimum order of 100 units</li>
                            <li>Size customization: Available on select products with minimum order of 250 units</li>
                            <li>Custom printing: Available on orders of 500+ units</li>
                            <li>Custom designs: Available for large bulk orders, subject to engineering review</li>
                          </ul>
                          <p>
                            For customization requests, please contact our sales team through the "Contact Sales Team" button in the Bulk Purchase section.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="q6">
                        <AccordionTrigger className="text-left">
                          What is your return policy?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Our return policy varies by order type:
                          </p>
                          <ul className="list-disc pl-6 mb-2 space-y-1">
                            <li>Retail orders: 30-day return period for unused products in original packaging</li>
                            <li>Bulk orders: 15-day inspection period for quality issues only</li>
                            <li>Custom orders: Non-returnable unless defective</li>
                          </ul>
                          <p className="mb-2">
                            All returns must be approved by our customer service department before shipping. Damaged or defective items will be replaced 
                            at no additional cost.
                          </p>
                          <p>
                            For detailed return instructions, please contact our customer service team.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
                
                <div className="bg-primary/5 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="md:w-1/5 flex justify-center">
                      <FileQuestion className="h-12 w-12 text-primary" />
                    </div>
                    <div className="md:w-4/5 text-center md:text-left">
                      <h3 className="text-lg font-bold mb-2">Still Have Questions?</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        If you couldn't find the answer to your question, our customer service team is ready to help you.
                      </p>
                      <Button className="bg-primary hover:bg-primary/90">
                        Contact Customer Service
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Usage Guides Tab */}
            <TabsContent value="guides">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-primary text-center">Product Usage Guides</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Food Packaging Guide */}
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle>Food Packaging Guide</CardTitle>
                      <CardDescription>Best practices for food storage and preservation</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <img 
                        src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=500&h=300&fit=crop"
                        alt="Food Storage"
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-1">Temperature Considerations</h4>
                          <p className="text-sm text-gray-600">
                            Different packaging materials have ideal temperature ranges for safe food storage.
                            Follow our temperature guide for optimal food safety and freshness.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Sealing Techniques</h4>
                          <p className="text-sm text-gray-600">
                            Learn proper sealing methods for different container types to maximize freshness
                            and prevent contamination of stored food items.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Button variant="outline" className="border-primary text-primary flex items-center gap-2 w-full">
                        <Download className="h-4 w-4" />
                        Download Complete Guide
                      </Button>
                    </div>
                  </Card>

                  {/* Beverage Container Guide */}
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle>Beverage Container Guide</CardTitle>
                      <CardDescription>Optimal use of our beverage packaging solutions</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <img 
                        src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=300&fit=crop"
                        alt="Beverage Containers"
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-1">Beverage Type Compatibility</h4>
                          <p className="text-sm text-gray-600">
                            Different beverages require specific container properties. Learn which of our 
                            containers work best for water, juices, carbonated drinks, and hot beverages.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Maintenance & Cleaning</h4>
                          <p className="text-sm text-gray-600">
                            Proper cleaning techniques to extend the life of your reusable beverage containers
                            and ensure they remain safe for continued use.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Button variant="outline" className="border-primary text-primary flex items-center gap-2 w-full">
                        <Download className="h-4 w-4" />
                        Download Complete Guide
                      </Button>
                    </div>
                  </Card>

                  {/* Sustainable Packaging Guide */}
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle>Sustainable Packaging Guide</CardTitle>
                      <CardDescription>Making the most of eco-friendly packaging options</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <img 
                        src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2f?w=500&h=300&fit=crop"
                        alt="Eco-friendly Packaging"
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-1">Proper Disposal</h4>
                          <p className="text-sm text-gray-600">
                            Learn how to properly dispose of or recycle our various packaging types
                            to minimize environmental impact and support circular economy.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Biodegradable Product Care</h4>
                          <p className="text-sm text-gray-600">
                            Special handling instructions for biodegradable products to maintain their
                            integrity while maximizing their useful life before composting.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Button variant="outline" className="border-primary text-primary flex items-center gap-2 w-full">
                        <Download className="h-4 w-4" />
                        Download Complete Guide
                      </Button>
                    </div>
                  </Card>

                  {/* Coffee Packaging Guide */}
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle>Coffee Packaging Guide</CardTitle>
                      <CardDescription>Preserving coffee freshness and flavor</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <img 
                        src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500&h=300&fit=crop"
                        alt="Coffee Packaging"
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-1">One-Way Valve Function</h4>
                          <p className="text-sm text-gray-600">
                            Understanding how our one-way valve coffee bags work to release CO2 while
                            preventing oxygen exposure for maximum coffee freshness.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Storage Recommendations</h4>
                          <p className="text-sm text-gray-600">
                            Best practices for storing coffee in our packaging, including environmental
                            factors to consider for maintaining flavor and aroma.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Button variant="outline" className="border-primary text-primary flex items-center gap-2 w-full">
                        <Download className="h-4 w-4" />
                        Download Complete Guide
                      </Button>
                    </div>
                  </Card>
                </div>
                
                {/* Video Guides */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" /> 
                      <span>Video Tutorial Library</span>
                    </CardTitle>
                    <CardDescription>
                      Watch our product demonstration videos for visual instructions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="aspect-video bg-gray-100 flex items-center justify-center">
                          <Info className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold mb-1">Food Storage Basics</h4>
                          <p className="text-xs text-gray-500 mb-3">Duration: 4:35</p>
                          <Button size="sm" variant="ghost" className="w-full border">Watch Video</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="aspect-video bg-gray-100 flex items-center justify-center">
                          <Info className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold mb-1">Eco-Packaging Guide</h4>
                          <p className="text-xs text-gray-500 mb-3">Duration: 5:22</p>
                          <Button size="sm" variant="ghost" className="w-full border">Watch Video</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="aspect-video bg-gray-100 flex items-center justify-center">
                          <Info className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold mb-1">Coffee Freshness Tips</h4>
                          <p className="text-xs text-gray-500 mb-3">Duration: 3:48</p>
                          <Button size="sm" variant="ghost" className="w-full border">Watch Video</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Customer Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="mb-3 flex justify-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
              </div>
              <p className="italic mb-6">
                "I've been using PackSolutions' food storage containers for my small catering business, 
                and the quality is outstanding. My clients always comment on how professional everything looks."
              </p>
              <p className="font-bold">- Sarah T.</p>
              <p className="text-sm">Small Business Owner</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="mb-3 flex justify-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
              </div>
              <p className="italic mb-6">
                "The biodegradable straws and utensils are perfect for our family gatherings. 
                It feels good to use products that don't harm the environment while still being practical."
              </p>
              <p className="font-bold">- Michael R.</p>
              <p className="text-sm">Eco-conscious Consumer</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="mb-3 flex justify-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star, idx) => (
                    <Star 
                      key={star} 
                      className={`h-5 w-5 ${idx < 4 ? "text-accent fill-accent" : "text-accent"}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="italic mb-6">
                "I purchase coffee packaging in bulk for my roastery, and the quality control is consistently 
                excellent. The one-way valve bags keep my coffee fresh longer than any other packaging I've tried."
              </p>
              <p className="font-bold">- David L.</p>
              <p className="text-sm">Coffee Shop Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to explore our products?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete range of packaging solutions for individuals and small businesses.
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            View Product Catalog
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}

export default ConsumersPage;