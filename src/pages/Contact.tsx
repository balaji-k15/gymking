import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: ""
    });
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:info@gymster.in", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  return (
    <div className="min-h-screen bg-gym-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gym-darker">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-primary font-semibold text-lg mb-4">GET IN TOUCH</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              CONTACT
              <span className="block text-primary">GYMSTER</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Have questions about our services or ready to start your fitness journey? 
              We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gym-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="gym-card rounded-xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gym-darker border-gym-orange text-white placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-gym-darker border-gym-orange text-white placeholder-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gym-darker border-gym-orange text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-gym-darker border border-gym-orange rounded-lg px-3 py-2 text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="membership">General Membership</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="group-classes">Group Classes</option>
                    <option value="nutrition">Nutrition Consultation</option>
                    <option value="corporate">Corporate Membership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-gym-darker border-gym-orange text-white placeholder-gray-400"
                    placeholder="Tell us about your fitness goals or any questions you have..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold hover-lift glow-effect"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="gym-card rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                     <div>
                       <h3 className="text-white font-semibold mb-1">Phone</h3>
                       <p className="text-gray-300">+91 44 2815 4567</p>
                       <p className="text-gray-300">+91 44 2815 4568</p>
                       <Button
                         onClick={handleCall}
                         className="mt-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm"
                       >
                         CALL NOW
                       </Button>
                     </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                     <div>
                       <h3 className="text-white font-semibold mb-1">Email</h3>
                       <p className="text-gray-300">info@gymster-chennai.com</p>
                       <p className="text-gray-300">support@gymster-chennai.com</p>
                       <Button
                         onClick={handleEmail}
                         className="mt-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm"
                       >
                         SEND EMAIL
                       </Button>
                     </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                     <div>
                       <h3 className="text-white font-semibold mb-1">Address</h3>
                       <p className="text-gray-300">
                         No. 45, Anna Salai, T. Nagar,<br />
                         Chennai, Tamil Nadu 600017<br />
                         India
                       </p>
                     </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                      <p className="text-gray-300">Quick support via WhatsApp</p>
                      <Button
                        onClick={handleWhatsApp}
                        className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm"
                      >
                        CHAT ON WHATSAPP
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Working Hours */}
              <div className="gym-card rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Working Hours</h2>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday:</span>
                    <span className="text-primary font-semibold">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday:</span>
                    <span className="text-primary font-semibold">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday:</span>
                    <span className="text-primary font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="mt-4 p-3 bg-gym-darker rounded-lg">
                    <p className="text-sm text-gray-400">
                      <strong className="text-primary">Note:</strong> We're closed on major national holidays. 
                      Call ahead for special holiday hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gym-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-lg mb-4">FREQUENTLY ASKED</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quick Answers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gym-darker rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer free trial sessions?</h3>
              <p className="text-gray-300 text-sm">Yes! We offer a complimentary trial session for new members to experience our facilities and meet our trainers.</p>
            </div>
            
            <div className="bg-gym-darker rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What are your membership plans?</h3>
              <p className="text-gray-300 text-sm">We offer monthly (₹2,499), quarterly (₹6,999), and yearly (₹14,999) plans with 50% discount currently available.</p>
            </div>
            
            <div className="bg-gym-darker rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you provide personal training?</h3>
              <p className="text-gray-300 text-sm">Yes, we have certified personal trainers available for one-on-one sessions and customized workout plans.</p>
            </div>
            
            <div className="bg-gym-darker rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Is parking available?</h3>
              <p className="text-gray-300 text-sm">Yes, we provide free parking for all members with dedicated spaces for cars and two-wheelers.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;