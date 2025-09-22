import { Button } from "@/components/ui/button";
import heroGym from "@/assets/hero-gym.jpg"; 

const HeroSection = () => {
  const handleJoinNow = () => {
    window.location.href = "/join";
  };

  const handleWatchVideo = () => {
    // Placeholder for video modal
    alert("Video feature coming soon!");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroGym})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="text-primary font-semibold text-lg mb-4 animate-fade-in-up">
            JOIN OUR COMMUNITY
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            BUILD YOUR BODY STRONG
            <span className="block text-primary">WITH GYMSTER</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-up">
            Transform your body and mind with India's most advanced fitness center. 
            Professional trainers, state-of-the-art equipment, and a community that supports your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up">
            <Button 
              onClick={handleJoinNow}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-lift glow-effect font-semibold"
            >
              JOIN NOW - 50% OFF
            </Button>
            <Button 
              onClick={handleWatchVideo}
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gym-dark px-8 py-4 text-lg font-semibold"
            >
              WATCH VIDEO
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gym-card/80 backdrop-blur-sm rounded-lg p-4 text-center hover-lift">
              <div className="text-2xl md:text-3xl font-bold text-primary counter-animation">12</div>
              <div className="text-white text-sm">YEARS EXPERIENCE</div>
            </div>
            <div className="bg-gym-card/80 backdrop-blur-sm rounded-lg p-4 text-center hover-lift">
              <div className="text-2xl md:text-3xl font-bold text-primary counter-animation">20</div>
              <div className="text-white text-sm">OUR TRAINERS</div>
            </div>
            <div className="bg-gym-card/80 backdrop-blur-sm rounded-lg p-4 text-center hover-lift">
              <div className="text-2xl md:text-3xl font-bold text-primary counter-animation">100+</div>
              <div className="text-white text-sm">COMPLETE PROJECTS</div>
            </div>
            <div className="bg-gym-card/80 backdrop-blur-sm rounded-lg p-4 text-center hover-lift">
              <div className="text-2xl md:text-3xl font-bold text-primary counter-animation">1000+</div>
              <div className="text-white text-sm">HAPPY CLIENTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;