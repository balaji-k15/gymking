import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dumbbell, Heart, Users, Apple, Clock, Shield } from "lucide-react";
import fitnessClass from "@/assets/fitness-class.jpg";
import gymEquipment from "@/assets/gym-equipment.jpg";
import nutrition from "@/assets/nutrition.jpg";

const Services = () => {
  const handleBookService = (service: string) => {
    alert(`Booking ${service} service. Contact us for more details!`);
  };

  const handleJoinNow = () => {
    window.location.href = "/join";
  };

  const services = [
    {
      title: "PERSONAL TRAINING",
      description: "One-on-one training sessions with certified trainers customized to your fitness goals and current fitness level.",
      price: "₹2,999/month",
      features: ["Customized workout plans", "Nutritional guidance", "Progress tracking", "Flexible scheduling"],
      icon: <Dumbbell className="w-8 h-8 text-white" />,
      image: gymEquipment
    },
    {
      title: "GROUP FITNESS CLASSES",
      description: "Join our energetic group classes including Zumba, Yoga, HIIT, Aerobics, and more with expert instructors.",
      price: "₹1,499/month",
      features: ["Multiple class options", "All skill levels welcome", "Community support", "Professional instructors"],
      icon: <Users className="w-8 h-8 text-white" />,
      image: fitnessClass
    },
    {
      title: "NUTRITION CONSULTATION",
      description: "Get personalized diet plans and nutrition advice from certified nutritionists to complement your fitness routine.",
      price: "₹999/month",
      features: ["Custom meal plans", "Indian cuisine focus", "Supplement guidance", "Regular follow-ups"],
      icon: <Apple className="w-8 h-8 text-white" />,
      image: nutrition
    }
  ];

  const additionalServices = [
    {
      title: "CARDIO PROGRAMS",
      description: "High-intensity cardio workouts for weight loss and cardiovascular health",
      icon: <Heart className="w-6 h-6 text-white" />
    },
    {
      title: "STRENGTH TRAINING",
      description: "Build muscle and increase strength with our comprehensive weight training programs",
      icon: <Dumbbell className="w-6 h-6 text-white" />
    },
    {
      title: "YOGA & MEDITATION",
      description: "Traditional Indian yoga and meditation practices for mind-body wellness",
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      title: "FLEXIBLE TIMINGS",
      description: "Choose from morning, afternoon, or evening sessions that fit your schedule",
      icon: <Clock className="w-6 h-6 text-white" />
    },
    {
      title: "SAFETY PROTOCOLS",
      description: "Maintaining highest safety standards with regular sanitization and health checks",
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      title: "MEMBER SUPPORT",
      description: "24/7 member support and guidance to help you achieve your fitness goals",
      icon: <Heart className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-gym-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gym-darker">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-primary font-semibold text-lg mb-4">OUR SERVICES</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              COMPREHENSIVE FITNESS
              <span className="block text-primary">SOLUTIONS</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              From personal training to group classes, nutrition consultation to specialized programs - 
              we offer everything you need for your fitness transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gym-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="gym-card rounded-xl overflow-hidden hover-lift group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gym-dark/60"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-primary px-3 py-1 rounded-full">
                    <span className="text-white font-semibold">{service.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => handleBookService(service.title)}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold"
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gym-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-lg mb-4">ADDITIONAL SERVICES</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Everything You Need
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive fitness services designed to support every aspect of your wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gym-darker rounded-xl p-6 hover-lift text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 bg-gym-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-lg mb-4">MEMBERSHIP PLANS</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-gray-300 text-lg">
              All plans include access to basic gym facilities and group classes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="gym-card rounded-xl p-6 text-center hover-lift">
              <h3 className="text-xl font-bold text-white mb-4">BASIC</h3>
              <div className="text-3xl font-bold text-primary mb-2">₹2,499</div>
              <div className="text-gray-400 mb-4">per month</div>
              <div className="text-green-400 font-semibold mb-4">50% OFF - Usually ₹4,999</div>
              <Button
                onClick={handleJoinNow}
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg"
              >
                GET STARTED
              </Button>
            </div>
            
            <div className="gym-card rounded-xl p-6 text-center hover-lift border-2 border-primary glow-effect">
              <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-4">PREMIUM</h3>
              <div className="text-3xl font-bold text-primary mb-2">₹6,999</div>
              <div className="text-gray-400 mb-4">per quarter</div>
              <div className="text-green-400 font-semibold mb-4">50% OFF - Usually ₹13,999</div>
              <Button
                onClick={handleJoinNow}
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg"
              >
                GET STARTED
              </Button>
            </div>
            
            <div className="gym-card rounded-xl p-6 text-center hover-lift">
              <h3 className="text-xl font-bold text-white mb-4">ELITE</h3>
              <div className="text-3xl font-bold text-primary mb-2">₹19,999</div>
              <div className="text-gray-400 mb-4">per year</div>
              <div className="text-green-400 font-semibold mb-4">50% OFF - Usually ₹39,999</div>
              <Button
                onClick={handleJoinNow}
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg"
              >
                GET STARTED
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;