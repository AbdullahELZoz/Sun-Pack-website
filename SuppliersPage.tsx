import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle,
  Building2,
  TruckIcon,
  FileSpreadsheet,
  FileText,
  Download,
  ShieldCheck,
  Scale,
  CheckCheck,
  Users,
  Clock,
  Handshake,
  Leaf
} from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

function SuppliersPage() {
  const [activeStep, setActiveStep] = useState(1);
  const { toast } = useToast();
  
  const handleTabChange = (value: string) => {
    // Find the tab element with the specified value and navigate to it
    const element = document.querySelector(`[data-value="${value}"]`) as HTMLElement | null;
    if (element) {
      element.click();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    // In a real application, we would submit form data to a backend service
  };

  const nextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Supplier Partnership Portal</h1>
            <p className="text-xl mb-8">
              Join our global network of trusted suppliers and become part of our mission to deliver innovative 
              and sustainable packaging solutions worldwide.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100">
              Apply to Become a Supplier
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="opportunities" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="opportunities" className="text-center">Partnership Opportunities</TabsTrigger>
              <TabsTrigger value="logistics" className="text-center">Logistics Information</TabsTrigger>
              <TabsTrigger value="requirements" className="text-center">Material Requirements</TabsTrigger>
              <TabsTrigger value="application" className="text-center">Supplier Application</TabsTrigger>
            </TabsList>

            {/* Partnership Opportunities Tab */}
            <TabsContent value="opportunities">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-primary">Why Partner With Us</h2>
                  <p className="text-gray-600 mb-6">
                    As a global leader in packaging solutions, we offer our suppliers unparalleled opportunities
                    for growth, innovation, and sustainable business practices.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Global Reach</h3>
                        <p className="text-gray-600">Access to international markets through our distribution network spanning 15 countries.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Long-Term Relationships</h3>
                        <p className="text-gray-600">We value sustainable partnerships and work closely with our suppliers for mutual growth.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Innovation Focus</h3>
                        <p className="text-gray-600">Collaborate on cutting-edge packaging technologies and sustainable materials.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Fair Business Practices</h3>
                        <p className="text-gray-600">Transparent pricing, timely payments, and ethical business conduct.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&h=500&fit=crop"
                    alt="Business handshake"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Partnership Programs</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-2 border-primary/10">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="text-primary">Standard Supplier</CardTitle>
                      <CardDescription>For established suppliers</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-primary mt-0.5" />
                          <span className="text-gray-600">Competitive rates</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-primary mt-0.5" />
                          <span className="text-gray-600">30-day payment terms</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-primary mt-0.5" />
                          <span className="text-gray-600">Regular order volumes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-primary mt-0.5" />
                          <span className="text-gray-600">Basic supplier portal access</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-secondary/20">
                    <CardHeader className="bg-secondary/5">
                      <CardTitle className="text-secondary">Preferred Partner</CardTitle>
                      <CardDescription>For strategic relationships</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-secondary mt-0.5" />
                          <span className="text-gray-600">Priority in new projects</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-secondary mt-0.5" />
                          <span className="text-gray-600">15-day payment terms</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-secondary mt-0.5" />
                          <span className="text-gray-600">Forecasting & planning access</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-secondary mt-0.5" />
                          <span className="text-gray-600">Joint development opportunities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-accent/20">
                    <CardHeader className="bg-accent/5">
                      <CardTitle className="text-gray-800">Innovation Alliance</CardTitle>
                      <CardDescription>For pioneering suppliers</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-accent mt-0.5" />
                          <span className="text-gray-600">Co-branding opportunities</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-accent mt-0.5" />
                          <span className="text-gray-600">R&D collaboration</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-accent mt-0.5" />
                          <span className="text-gray-600">Exclusivity agreements</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCheck className="h-5 w-5 text-accent mt-0.5" />
                          <span className="text-gray-600">Strategic business planning</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center">
                <Button onClick={() => handleTabChange("application")}>
                  Apply Now
                </Button>
              </div>
            </TabsContent>

            {/* Logistics Information Tab */}
            <TabsContent value="logistics">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-primary text-center">Supply Chain & Logistics</h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="shadow-md">
                    <CardHeader className="bg-primary/5">
                      <div className="mx-auto bg-primary/10 p-3 rounded-full">
                        <TruckIcon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-center mt-3">Delivery Requirements</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm">
                        Our logistics network operates on precise scheduling to ensure
                        smooth operations across our manufacturing facilities.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md">
                    <CardHeader className="bg-primary/5">
                      <div className="mx-auto bg-primary/10 p-3 rounded-full">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-center mt-3">Warehouse Standards</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm">
                        Our facilities maintain specific requirements for storage,
                        handling, and processing of packaging materials.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md">
                    <CardHeader className="bg-primary/5">
                      <div className="mx-auto bg-primary/10 p-3 rounded-full">
                        <FileSpreadsheet className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-center mt-3">Documentation</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm">
                        Proper documentation is essential for our supply chain integrity,
                        including material certification and origin verification.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-12">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Logistics Specifications</h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="delivery-windows">
                      <AccordionTrigger>Delivery Windows & Scheduling</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">All deliveries must be scheduled at least 48 hours in advance through our supplier portal. Our receiving hours are:</p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Monday - Friday: 7:00 AM - 3:00 PM</li>
                          <li>Special deliveries can be arranged with prior approval</li>
                          <li>All deliveries require a delivery confirmation number</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="packaging-requirements">
                      <AccordionTrigger>Packaging & Palletization Standards</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">To ensure efficient handling and storage, all materials must meet our packaging standards:</p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Standard pallet dimensions: 1200 x 800 mm (Euro pallet)</li>
                          <li>Maximum pallet height: 1.8 meters including pallet</li>
                          <li>All pallets must be wrapped securely with clear stretch film</li>
                          <li>Each pallet must have a clearly visible pallet label with batch information</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="documentation">
                      <AccordionTrigger>Required Documentation</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The following documents must accompany each delivery:</p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Delivery note with purchase order reference</li>
                          <li>Material safety data sheets (MSDS) for applicable materials</li>
                          <li>Certificate of Analysis for raw materials</li>
                          <li>Certificate of Origin for international shipments</li>
                          <li>Sustainability certification (for certified materials)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="quality-control">
                      <AccordionTrigger>Quality Control Processes</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">All deliveries are subject to our quality control procedures:</p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Visual inspection upon receipt</li>
                          <li>Random sampling for detailed quality testing</li>
                          <li>Material properties verification against specifications</li>
                          <li>Contamination checks for food-grade materials</li>
                          <li>Full rejection rights for non-compliant deliveries</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 mb-8">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="sm:w-1/4 flex justify-center">
                      <FileText className="h-16 w-16 text-primary" />
                    </div>
                    <div className="sm:w-3/4">
                      <h3 className="text-xl font-bold mb-3">Download Logistics Manual</h3>
                      <p className="mb-4 text-gray-600">
                        For detailed information about our logistics requirements, download our comprehensive supplier logistics manual.
                      </p>
                      <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                        <Download className="h-4 w-4" />
                        Download Manual
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Material Requirements Tab */}
            <TabsContent value="requirements">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-primary text-center">Material Specifications & Requirements</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card className="shadow-md">
                    <CardHeader className="bg-secondary/5">
                      <div className="mx-auto bg-secondary/10 p-3 rounded-full">
                        <ShieldCheck className="h-8 w-8 text-secondary" />
                      </div>
                      <CardTitle className="text-center mt-3">Quality Standards</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm text-center">
                        We maintain stringent quality requirements to ensure our packaging meets international safety standards.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md">
                    <CardHeader className="bg-secondary/5">
                      <div className="mx-auto bg-secondary/10 p-3 rounded-full">
                        <Leaf className="h-8 w-8 text-secondary" />
                      </div>
                      <CardTitle className="text-center mt-3">Sustainability</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm text-center">
                        We prioritize environmentally responsible materials and production methods in our supply chain.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md">
                    <CardHeader className="bg-secondary/5">
                      <div className="mx-auto bg-secondary/10 p-3 rounded-full">
                        <Scale className="h-8 w-8 text-secondary" />
                      </div>
                      <CardTitle className="text-center mt-3">Compliance</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm text-center">
                        All materials must meet regulatory requirements for their intended use in food or consumer packaging.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold text-gray-800">Material Category Specifications</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 text-left">
                          <th className="px-6 py-4 text-sm font-medium text-gray-500">Material Category</th>
                          <th className="px-6 py-4 text-sm font-medium text-gray-500">Quality Standards</th>
                          <th className="px-6 py-4 text-sm font-medium text-gray-500">Testing Methods</th>
                          <th className="px-6 py-4 text-sm font-medium text-gray-500">Certifications Required</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="px-6 py-4 font-medium">Food-Grade Plastics</td>
                          <td className="px-6 py-4 text-gray-600">ISO 9001, FDA CFR 21</td>
                          <td className="px-6 py-4 text-gray-600">Migration testing, FTIR</td>
                          <td className="px-6 py-4 text-gray-600">FDA, EU 10/2011</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">Paper & Cardboard</td>
                          <td className="px-6 py-4 text-gray-600">ISO 9001, DIN EN 643</td>
                          <td className="px-6 py-4 text-gray-600">Burst strength, GSM</td>
                          <td className="px-6 py-4 text-gray-600">FSC, PEFC</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">Aluminum Foil</td>
                          <td className="px-6 py-4 text-gray-600">ISO 9001, EN 602</td>
                          <td className="px-6 py-4 text-gray-600">Thickness, pinhole</td>
                          <td className="px-6 py-4 text-gray-600">ASI, FDA</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">Bio-based Materials</td>
                          <td className="px-6 py-4 text-gray-600">ISO 9001, ASTM D6400</td>
                          <td className="px-6 py-4 text-gray-600">Compostability, biodegradation</td>
                          <td className="px-6 py-4 text-gray-600">TÜV, BPI</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">Inks & Coatings</td>
                          <td className="px-6 py-4 text-gray-600">ISO 9001, EuPIA</td>
                          <td className="px-6 py-4 text-gray-600">Migration, VOC content</td>
                          <td className="px-6 py-4 text-gray-600">REACH, EuPIA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Sustainability Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Material Sourcing</h4>
                          <p className="text-sm text-gray-600">Preference for responsibly sourced materials with chain of custody certification.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Recycled Content</h4>
                          <p className="text-sm text-gray-600">Minimum 30% recycled content for non-food contact materials where applicable.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Carbon Footprint</h4>
                          <p className="text-sm text-gray-600">Carbon footprint reporting required for all materials (scope 1 & 2).</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <div>
                          <h4 className="font-medium">End-of-Life</h4>
                          <p className="text-sm text-gray-600">Materials must be recyclable, biodegradable, or compostable where applicable.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Compliance Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Food Contact Safety</h4>
                          <p className="text-sm text-gray-600">Compliance with FDA 21 CFR and EU 10/2011 for food-contact materials.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Chemical Safety</h4>
                          <p className="text-sm text-gray-600">REACH compliance and declaration of restricted substances.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Traceability</h4>
                          <p className="text-sm text-gray-600">Batch-level traceability required for all materials.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Testing Documentation</h4>
                          <p className="text-sm text-gray-600">Regular testing reports required for continued qualification.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                    <Download className="h-4 w-4" />
                    Download Full Specifications Document
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Supplier Application Tab */}
            <TabsContent value="application">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-primary text-center">Supplier Application</h2>
                
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <div className={`rounded-full h-10 w-10 flex items-center justify-center ${activeStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                        1
                      </div>
                      <div className={`h-1 w-16 ${activeStep > 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                    </div>
                    <div className="flex items-center">
                      <div className={`rounded-full h-10 w-10 flex items-center justify-center ${activeStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                        2
                      </div>
                      <div className={`h-1 w-16 ${activeStep > 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                    </div>
                    <div className="flex items-center">
                      <div className={`rounded-full h-10 w-10 flex items-center justify-center ${activeStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                        3
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    {activeStep === 1 && (
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-6">Company Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <Label htmlFor="companyName">Company Name*</Label>
                            <Input id="companyName" required />
                          </div>
                          <div>
                            <Label htmlFor="website">Website*</Label>
                            <Input id="website" type="url" required />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <Label htmlFor="yearEstablished">Year Established*</Label>
                            <Input id="yearEstablished" type="number" min="1900" max="2030" required />
                          </div>
                          <div>
                            <Label htmlFor="employees">Number of Employees*</Label>
                            <Input id="employees" type="number" min="1" required />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <Label htmlFor="businessDescription">Brief Business Description*</Label>
                          <Textarea id="businessDescription" rows={4} required />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <Label htmlFor="headquarters">Headquarters Location*</Label>
                            <Input id="headquarters" required />
                          </div>
                          <div>
                            <Label htmlFor="operatingCountries">Countries of Operation*</Label>
                            <Input id="operatingCountries" required />
                          </div>
                        </div>
                        
                        <div className="flex justify-end mt-8">
                          <Button type="button" onClick={nextStep}>Continue</Button>
                        </div>
                      </div>
                    )}
                    
                    {activeStep === 2 && (
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-6">Products & Capabilities</h3>
                        
                        <div className="mb-6">
                          <Label htmlFor="materialCategories">Material Categories (select all that apply)*</Label>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="plastics" className="rounded" />
                              <Label htmlFor="plastics">Plastics</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="paper" className="rounded" />
                              <Label htmlFor="paper">Paper & Cardboard</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="aluminum" className="rounded" />
                              <Label htmlFor="aluminum">Aluminum</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="biobased" className="rounded" />
                              <Label htmlFor="biobased">Bio-based Materials</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="inks" className="rounded" />
                              <Label htmlFor="inks">Inks & Coatings</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="other" className="rounded" />
                              <Label htmlFor="other">Other</Label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <Label htmlFor="productDescription">Key Products/Materials Description*</Label>
                          <Textarea id="productDescription" rows={4} required />
                        </div>
                        
                        <div className="mb-6">
                          <Label htmlFor="manufacturing">Manufacturing Capabilities*</Label>
                          <Textarea id="manufacturing" rows={3} required />
                        </div>
                        
                        <div className="mb-6">
                          <Label htmlFor="certifications">Certifications (ISO, FSC, etc.)</Label>
                          <Input id="certifications" />
                        </div>
                        
                        <div className="mb-6">
                          <Label htmlFor="capacity">Production Capacity*</Label>
                          <Input id="capacity" required />
                        </div>
                        
                        <div className="flex justify-between mt-8">
                          <Button type="button" variant="outline" onClick={prevStep}>Back</Button>
                          <Button type="button" onClick={nextStep}>Continue</Button>
                        </div>
                      </div>
                    )}
                    
                    {activeStep === 3 && (
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <Label htmlFor="contactName">Contact Name*</Label>
                            <Input id="contactName" required />
                          </div>
                          <div>
                            <Label htmlFor="position">Position*</Label>
                            <Input id="position" required />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <Label htmlFor="email">Email Address*</Label>
                            <Input id="email" type="email" required />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number*</Label>
                            <Input id="phone" type="tel" required />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <Label htmlFor="additionalInfo">Additional Information</Label>
                          <Textarea id="additionalInfo" rows={3} placeholder="Any additional details you'd like to share..." />
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="termsAgreement" className="rounded" required />
                            <Label htmlFor="termsAgreement">I agree to the terms and conditions*</Label>
                          </div>
                        </div>
                        
                        <div className="flex justify-between mt-8">
                          <Button type="button" variant="outline" onClick={prevStep}>Back</Button>
                          <Button type="submit" className="bg-primary hover:bg-primary/90">Submit Application</Button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="md:w-1/5 flex justify-center">
                      <Clock className="h-12 w-12 text-primary" />
                    </div>
                    <div className="md:w-4/5 text-center md:text-left">
                      <h3 className="text-lg font-bold mb-2">Application Process Timeline</h3>
                      <p className="text-gray-600 text-sm mb-1">
                        <strong>1. Initial Review:</strong> 3-5 business days after submission
                      </p>
                      <p className="text-gray-600 text-sm mb-1">
                        <strong>2. Detailed Assessment:</strong> 2-3 weeks for evaluation and documentation review
                      </p>
                      <p className="text-gray-600 text-sm mb-1">
                        <strong>3. Facility Audit:</strong> If applicable, scheduled within 1 month
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>4. Decision & Onboarding:</strong> Within 6-8 weeks of initial application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Supplier Partners</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="mb-4">
                <Handshake className="h-12 w-12 mx-auto text-accent" />
              </div>
              <p className="italic mb-4">
                "Working with PackSolutions has been transformative for our business. Their commitment to innovation and sustainability aligns perfectly with our values."
              </p>
              <p className="font-bold">- GreenMaterials Inc.</p>
              <p className="text-sm">Paper & Bio-plastic Supplier</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="mb-4">
                <Handshake className="h-12 w-12 mx-auto text-accent" />
              </div>
              <p className="italic mb-4">
                "The transparent communication and collaborative approach have made PackSolutions our preferred partner for over a decade."
              </p>
              <p className="font-bold">- EcoFilm Technologies</p>
              <p className="text-sm">Packaging Films Manufacturer</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="mb-4">
                <Handshake className="h-12 w-12 mx-auto text-accent" />
              </div>
              <p className="italic mb-4">
                "From our first delivery, PackSolutions has been a reliable partner that values quality and innovation as much as we do."
              </p>
              <p className="font-bold">- PrecisionPack Ltd.</p>
              <p className="text-sm">Specialty Packaging Provider</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to become a supplier?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our network of trusted suppliers and grow your business with us. We look forward to exploring how we can work together.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => handleTabChange("application")}
          >
            Apply Now
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}

export default SuppliersPage;