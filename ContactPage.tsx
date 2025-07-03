import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2, 
  Globe,
  MessageSquare, 
  Headset,
  SendIcon
} from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function ContactPage() {
  const { toast } = useToast();
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setFormSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll respond within 24-48 hours.",
      });

      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8">
              Get in touch with our team for inquiries, support, or any questions about our packaging solutions.
              We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              {/* Office Location */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span>Headquarters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-gray-700">123 Packaging Ave.</p>
                        <p className="text-gray-700">Suite 500</p>
                        <p className="text-gray-700">Chicago, IL 60601</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-gray-700">(312) 555-7890</p>
                        <p className="text-gray-500 text-sm">Main Office</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-gray-700">info@packsolutions.com</p>
                        <p className="text-gray-500 text-sm">General Inquiries</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-700 font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-700 font-medium">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-700 font-medium">Closed</span>
                    </div>
                    <div className="pt-2 text-sm text-gray-500">
                      <p>All times are Central Time (CT)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* International Offices */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>International Offices</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Europe</h3>
                      <p className="text-gray-600">Amsterdam, Netherlands</p>
                      <p className="text-gray-600">+31 20 555 7123</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Asia Pacific</h3>
                      <p className="text-gray-600">Singapore</p>
                      <p className="text-gray-600">+65 6123 4567</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Latin America</h3>
                      <p className="text-gray-600">Mexico City, Mexico</p>
                      <p className="text-gray-600">+52 55 1234 5678</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Your Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="first_name">First Name*</Label>
                          <Input id="first_name" required />
                        </div>
                        <div>
                          <Label htmlFor="last_name">Last Name*</Label>
                          <Input id="last_name" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address*</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input id="company" />
                      </div>
                    </div>

                    {/* Inquiry Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Inquiry Details</h3>
                      
                      <div>
                        <Label htmlFor="inquiry_type" className="mb-2 block">Inquiry Type*</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="product">Product Information</SelectItem>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label className="mb-2 block">Are you a:*</Label>
                        <RadioGroup defaultValue="consumer" className="flex flex-wrap gap-6">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="consumer" id="consumer" />
                            <Label htmlFor="consumer">Individual Consumer</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="business" id="business" />
                            <Label htmlFor="business">Business Customer</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="supplier" id="supplier" />
                            <Label htmlFor="supplier">Supplier/Vendor</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other_relation" />
                            <Label htmlFor="other_relation">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label htmlFor="message">Message*</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please provide details about your inquiry..." 
                          rows={5} 
                          required 
                        />
                      </div>
                      
                      <div className="flex items-start space-x-2 pt-2">
                        <input type="checkbox" id="privacy" className="rounded mt-1" required />
                        <Label htmlFor="privacy" className="text-sm text-gray-600">
                          I agree to the privacy policy and consent to PackSolutions processing my data for the purpose of responding to this inquiry.*
                        </Label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={formSubmitting}
                    >
                      {formSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <SendIcon className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
          
          <div className="border rounded-lg overflow-hidden shadow-md bg-white">
            <div className="aspect-[16/9] w-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-4">
                <MapPin className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600">Interactive map would be displayed here.</p>
                <p className="text-gray-500 text-sm">Location: 123 Packaging Ave, Chicago, IL 60601</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Additional Ways to Reach Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Customer Support */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <Headset className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Customer Support</CardTitle>
                <CardDescription>For existing customers needing assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our dedicated support team is available to help with any questions about your orders or products.
                </p>
                <p className="font-medium text-gray-900 mb-1">support@packsolutions.com</p>
                <p className="font-medium text-gray-900 mb-4">(312) 555-7891</p>
                <Button variant="outline" className="w-full">
                  Submit Support Ticket
                </Button>
              </CardContent>
            </Card>

            {/* Sales Team */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Sales Team</CardTitle>
                <CardDescription>For product inquiries and quotes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Looking for specific products or bulk pricing? Our sales team will help you find the perfect solution.
                </p>
                <p className="font-medium text-gray-900 mb-1">sales@packsolutions.com</p>
                <p className="font-medium text-gray-900 mb-4">(312) 555-7892</p>
                <Button variant="outline" className="w-full">
                  Request a Quote
                </Button>
              </CardContent>
            </Card>

            {/* Careers */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Careers</CardTitle>
                <CardDescription>Join our growing team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Interested in joining PackSolutions? Explore our current openings and growth opportunities.
                </p>
                <p className="font-medium text-gray-900 mb-1">careers@packsolutions.com</p>
                <p className="font-medium text-gray-900 mb-4">(312) 555-7893</p>
                <Button variant="outline" className="w-full">
                  View Open Positions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <div className="divide-y">
              <div className="py-4">
                <h3 className="font-bold mb-2">What are your business hours?</h3>
                <p className="text-gray-600">
                  Our main office is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 1:00 PM Central Time (CT). We are closed on Sundays and major holidays.
                </p>
              </div>
              <div className="py-4">
                <h3 className="font-bold mb-2">How quickly can I expect a response to my inquiry?</h3>
                <p className="text-gray-600">
                  We strive to respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our main office directly.
                </p>
              </div>
              <div className="py-4">
                <h3 className="font-bold mb-2">Do you offer in-person consultations?</h3>
                <p className="text-gray-600">
                  Yes, we offer in-person consultations for businesses with specific packaging needs. Please contact our sales team to schedule an appointment.
                </p>
              </div>
              <div className="py-4">
                <h3 className="font-bold mb-2">Where are your distribution centers located?</h3>
                <p className="text-gray-600">
                  We have distribution centers in Chicago, IL; Atlanta, GA; Dallas, TX; and Los Angeles, CA in the United States, as well as international facilities in Amsterdam, Singapore, and Mexico City.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest products, industry insights, and company news by following us on social media.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-primary text-primary">Facebook</Button>
            <Button variant="outline" className="border-primary text-primary">LinkedIn</Button>
            <Button variant="outline" className="border-primary text-primary">Twitter</Button>
            <Button variant="outline" className="border-primary text-primary">Instagram</Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ContactPage;

// Required import for the component
import { Users, ShieldCheck } from "lucide-react";