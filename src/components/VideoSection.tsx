import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section className="py-20 bg-gym-darker relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${gymInterior})` }}
        >
          <div className="absolute inset-0 bg-gym-darker/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-primary font-semibold text-lg mb-4">SEE US IN ACTION</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              EXPERIENCE GYMSTER
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Watch our virtual tour and see why thousands of Indians choose GYMSTER 
              for their fitness transformation journey.
            </p>

            {/* Video Play Button */}
            <div className="relative inline-block">
              <Button
                onClick={handlePlayVideo}
                className="relative bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full hover-lift glow-effect group"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                WATCH DEMO VIDEO
              </Button>
              
              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12K+</div>
                <div className="text-gray-300">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-300">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="bg-gym-card rounded-xl p-8 text-center">
              <div className="w-full h-64 md:h-96 bg-gym-darker rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-white text-xl mb-2">Demo Video</h3>
                  <p className="text-gray-300">
                    This is a demo placeholder. In a real implementation, 
                    you would embed a YouTube video or use a video player component.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gym-darker rounded-lg p-4">
                  <h4 className="text-primary font-semibold mb-2">🏋️ Modern Equipment</h4>
                  <p className="text-gray-300">State-of-the-art fitness machines and free weights</p>
                </div>
                <div className="bg-gym-darker rounded-lg p-4">
                  <h4 className="text-primary font-semibold mb-2">👥 Expert Trainers</h4>
                  <p className="text-gray-300">Certified professionals guiding your journey</p>
                </div>
                <div className="bg-gym-darker rounded-lg p-4">
                  <h4 className="text-primary font-semibold mb-2">🌟 Premium Facilities</h4>
                  <p className="text-gray-300">Clean, spacious, and well-maintained environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;