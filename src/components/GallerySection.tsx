import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import fitnessClass from "@/assets/fitness-class.jpg";
import gymEquipment from "@/assets/gym-equipment.jpg";
import nutrition from "@/assets/nutrition.jpg";

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: heroGym,
      title: "Modern Gym Facility",
      description: "State-of-the-art equipment and spacious workout areas"
    },
    {
      src: gymInterior,
      title: "Interior Design",
      description: "Premium interiors with motivational atmosphere"
    },
    {
      src: fitnessClass,
      title: "Group Classes",
      description: "Energetic group fitness sessions with expert instructors"
    },
    {
      src: gymEquipment,
      title: "Professional Equipment",
      description: "Latest fitness technology from international brands"
    },
    {
      src: nutrition,
      title: "Nutrition Center",
      description: "Healthy supplements and nutrition guidance"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gym-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary font-semibold text-lg mb-4">OUR FACILITIES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            GYMSTER GALLERY
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Take a virtual tour of our premium facilities and see why thousands choose GYMSTER for their fitness journey.
          </p>
        </div>

        {/* Main Image Display */}
        <div className="relative max-w-5xl mx-auto mb-8">
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gym-dark/80 to-transparent"></div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                {images[currentImage].title}
              </h3>
              <p className="text-gray-300">
                {images[currentImage].description}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-4 h-4 rounded-full transition-colors ${
                currentImage === index ? "bg-primary" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gym-darker rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏋️</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Modern Equipment</h3>
            <p className="text-gray-400 text-sm">Latest fitness technology and machines</p>
          </div>

          <div className="bg-gym-darker rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏃</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Cardio Zone</h3>
            <p className="text-gray-400 text-sm">Dedicated cardio area with premium machines</p>
          </div>

          <div className="bg-gym-darker rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🧘</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Yoga Studio</h3>
            <p className="text-gray-400 text-sm">Peaceful space for yoga and meditation</p>
          </div>

          <div className="bg-gym-darker rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🥤</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Nutrition Bar</h3>
            <p className="text-gray-400 text-sm">Healthy shakes and supplements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;