import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Heart } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";

const About = () => {
  const handleJoinNow = () => {
    window.location.href = "/join";
  };

  return (
    <div className="min-h-screen bg-gym-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${gymInterior})` }}
        >
          <div className="absolute inset-0 bg-gym-dark/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-primary font-semibold text-lg mb-4">ABOUT GYMSTER</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              YOUR FITNESS TRANSFORMATION
              <span className="block text-primary">STARTS HERE</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              For over 15 years, GYMSTER has been India's premier fitness destination, 
              transforming lives through expert training, state-of-the-art facilities, 
              and unwavering support for your fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gym-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-primary font-semibold text-lg mb-4">OUR STORY</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                15 Years of Excellence in Fitness
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Founded in 2009 by fitness enthusiasts who believed that every Indian deserves 
                  access to world-class fitness facilities, GYMSTER began as a small gym in Mumbai 
                  with a big vision.
                </p>
                <p>
                  Today, we've grown into one of India's most trusted fitness brands, serving 
                  over 12,000 members across multiple locations. Our commitment to excellence, 
                  innovation, and personalized service has made us the preferred choice for 
                  fitness enthusiasts nationwide.
                </p>
                <p>
                  We combine traditional Indian wellness practices with modern fitness science 
                  to create holistic fitness programs that work for the Indian lifestyle.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={handleJoinNow}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg hover-lift glow-effect"
                >
                  JOIN OUR COMMUNITY
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gym-darker rounded-xl p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              
              <div className="bg-gym-darker rounded-xl p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">12K+</div>
                <div className="text-gray-400">Happy Members</div>
              </div>
              
              <div className="bg-gym-darker rounded-xl p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              
              <div className="bg-gym-darker rounded-xl p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gym-darker">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="gym-card rounded-xl p-8 hover-lift">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">OUR MISSION</h3>
              </div>
              <p className="text-gray-300 text-lg text-center leading-relaxed">
                To empower every Indian to achieve their fitness goals through world-class 
                facilities, expert guidance, and a supportive community that celebrates 
                every milestone on their wellness journey.
              </p>
            </div>
            
            <div className="gym-card rounded-xl p-8 hover-lift">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">OUR VISION</h3>
              </div>
              <p className="text-gray-300 text-lg text-center leading-relaxed">
                To be India's most trusted fitness brand, creating a healthier nation 
                by making fitness accessible, enjoyable, and sustainable for people 
                from all walks of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gym-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-lg mb-4">OUR VALUES</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Makes Us Different
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">EXCELLENCE</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, from our equipment 
                to our service, ensuring you get the best fitness experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">COMMUNITY</h3>
              <p className="text-gray-300">
                We believe in the power of community support and creating 
                lasting friendships through shared fitness goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">RESULTS</h3>
              <p className="text-gray-300">
                We're committed to helping you achieve real, measurable results 
                through proven methods and consistent support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;