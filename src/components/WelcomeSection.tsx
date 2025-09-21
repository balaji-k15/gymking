import { Button } from "@/components/ui/button";
import { Play, Dumbbell, Users, Award } from "lucide-react";

const WelcomeSection = () => {
  const handleWatchVideo = () => {
    alert("Video feature coming soon!");
  };

  const handleJoinNow = () => {
    window.location.href = "/join";
  };

  return (
    <section className="py-24 bg-gym-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="text-primary font-semibold text-lg mb-4">WELCOME TO GYMSTER</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                YOUR FITNESS JOURNEY STARTS HERE
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At GYMSTER, we believe fitness is not just about building muscle or losing weight - 
                it's about transforming your entire lifestyle. With over 15 years of experience, 
                we've helped thousands of Indians achieve their fitness goals through personalized 
                training, nutrition guidance, and unwavering support.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Modern Equipment</h3>
                  <p className="text-gray-400">Latest fitness technology from international brands</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Expert Trainers</h3>
                  <p className="text-gray-400">Certified professionals with proven track records</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Proven Results</h3>
                  <p className="text-gray-400">12,000+ satisfied members and counting</p>
                </div>
              </div>
            </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button 
              onClick={handleJoinNow}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-lift glow-effect font-semibold"
            >
              START YOUR JOURNEY
            </Button>
            <Button 
              onClick={handleWatchVideo}
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gym-dark px-8 py-4 text-lg font-semibold flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>WATCH OUR STORY</span>
            </Button>
          </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Service Cards */}
              <div className="space-y-4">
                <div className="bg-gym-darker rounded-xl p-6 hover-lift">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">💪</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">BODY BUILDING</h3>
                    <p className="text-gray-400 text-sm">
                      Professional bodybuilding programs designed to maximize muscle growth and strength.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gym-darker rounded-xl p-6 hover-lift">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">🏃</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">CARDIO PROGRAM</h3>
                    <p className="text-gray-400 text-sm">
                      High-intensity cardio workouts for weight loss and cardiovascular health.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-gym-darker rounded-xl p-6 hover-lift">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">🧘</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">YOGA & WELLNESS</h3>
                    <p className="text-gray-400 text-sm">
                      Traditional yoga and meditation practices for mind-body wellness.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gym-darker rounded-xl p-6 hover-lift">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">🍎</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">NUTRITION PLAN</h3>
                    <p className="text-gray-400 text-sm">
                      Customized Indian diet plans to complement your fitness goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount Badge */}
            <div className="absolute -top-4 -right-4 bg-primary rounded-full w-24 h-24 flex items-center justify-center glow-effect">
              <div className="text-center">
                <div className="text-white font-bold text-2xl">50%</div>
                <div className="text-white text-xs">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;