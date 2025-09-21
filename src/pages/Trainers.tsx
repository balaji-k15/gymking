import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Clock, Users, Star } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const Trainers = () => {
  const handleBookTrainer = (trainerName: string) => {
    alert(`Booking session with ${trainerName}. Contact us for availability!`);
  };

  const mainTrainers = [
    {
      name: "RAJESH KUMAR",
      title: "HEAD TRAINER & FITNESS DIRECTOR",
      specialization: "Power Lifting & Strength Training",
      experience: "12+ Years",
      certifications: ["NASM-CPT", "ACSM", "Nutrition Specialist"],
      image: trainer1,
      rating: 4.9,
      sessions: 2000,
      bio: "Rajesh is our most experienced trainer specializing in power lifting and strength training. He has helped over 500 members achieve their strength goals and has competed at national level powerlifting competitions."
    },
    {
      name: "PRIYA SHARMA",
      title: "SENIOR WELLNESS COACH",
      specialization: "Yoga, Cardio & Weight Management",
      experience: "8+ Years",
      certifications: ["RYT-500", "ACE-CPT", "Weight Management Specialist"],
      image: trainer2,
      rating: 4.8,
      sessions: 1500,
      bio: "Priya combines traditional Indian yoga with modern fitness techniques. She specializes in helping women achieve their fitness goals through sustainable and holistic approaches."
    },
    {
      name: "AMIT SINGH",
      title: "BODYBUILDING SPECIALIST",
      specialization: "Bodybuilding & Muscle Building",
      experience: "10+ Years",
      certifications: ["IFBB Pro Card", "NSCA-CSCS", "Sports Nutrition"],
      image: trainer3,
      rating: 4.9,
      sessions: 1800,
      bio: "Amit is a professional bodybuilder and our muscle building expert. He has won multiple state-level bodybuilding competitions and specializes in helping members build lean muscle mass."
    }
  ];

  const allTrainers = [
    {
      name: "DEEPAK MEHTA",
      specialization: "Functional Training",
      experience: "6+ Years",
      rating: 4.7
    },
    {
      name: "KAVYA REDDY", 
      specialization: "Pilates & Core Training",
      experience: "5+ Years",
      rating: 4.8
    },
    {
      name: "ROHIT SHARMA",
      specialization: "HIIT & CrossFit",
      experience: "7+ Years", 
      rating: 4.6
    },
    {
      name: "SUNITA DEVI",
      specialization: "Senior Fitness & Rehabilitation",
      experience: "9+ Years",
      rating: 4.9
    },
    {
      name: "ARJUN KAPOOR",
      specialization: "Boxing & Martial Arts",
      experience: "8+ Years",
      rating: 4.7
    },
    {
      name: "MEERA NAIR",
      specialization: "Aqua Fitness & Swimming",
      experience: "4+ Years",
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen bg-gym-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gym-darker">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-primary font-semibold text-lg mb-4">MEET OUR TEAM</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              EXPERT FITNESS
              <span className="block text-primary">TRAINERS</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Our certified trainers bring years of experience and passion to help you 
              achieve your fitness goals safely and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="py-20 bg-gym-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-lg mb-4">FEATURED TRAINERS</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Senior Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainTrainers.map((trainer, index) => (
              <div key={index} className="gym-card rounded-xl overflow-hidden hover-lift group">
                <div className="relative overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gym-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-white fill-current" />
                    <span className="text-white font-semibold text-sm">{trainer.rating}</span>
                  </div>
                  
                  {/* Hover Button */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <Button
                      onClick={() => handleBookTrainer(trainer.name)}
                      className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold"
                    >
                      BOOK SESSION
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{trainer.title}</p>
                  <p className="text-gray-300 mb-3">{trainer.specialization}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-gray-400">{trainer.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-gray-400">{trainer.sessions}+ sessions</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">{trainer.bio}</p>
                  
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500">CERTIFICATIONS:</div>
                    <div className="flex flex-wrap gap-1">
                      {trainer.certifications.map((cert, idx) => (
                        <span key={idx} className="bg-gym-darker px-2 py-1 rounded text-xs text-primary">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Trainers Grid */}
      <section className="py-20 bg-gym-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-lg mb-4">OUR COMPLETE TEAM</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              All Trainers
            </h2>
            <p className="text-gray-300 text-lg">
              Choose from our diverse team of specialized fitness professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTrainers.map((trainer, index) => (
              <div key={index} className="bg-gym-darker rounded-xl p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{trainer.name}</h3>
                    <p className="text-primary text-sm">{trainer.specialization}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold text-sm">{trainer.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-gray-400 text-sm">{trainer.experience}</span>
                  </div>
                  <Button
                    onClick={() => handleBookTrainer(trainer.name)}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-1 text-sm"
                  >
                    BOOK
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gym-darker">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Book a consultation with one of our expert trainers and get a personalized 
              fitness plan designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "/contact"}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg hover-lift"
              >
                BOOK CONSULTATION
              </Button>
              <Button
                onClick={() => window.location.href = "/join"}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gym-dark px-8 py-3 text-lg"
              >
                JOIN NOW - 50% OFF
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trainers;