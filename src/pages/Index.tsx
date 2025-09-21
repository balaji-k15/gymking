import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WorkingHours from "@/components/WorkingHours";
import TrainersSection from "@/components/TrainersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gym-dark">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <WorkingHours />
      <TrainersSection />
      <Footer />
    </div>
  );
};

export default Index;