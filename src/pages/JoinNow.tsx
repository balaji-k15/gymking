import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const JoinNow = () => {
  const [selectedPlan, setSelectedPlan] = useState("quarterly");
  const { toast } = useToast();

  const plans = [
    {
      id: "monthly",
      name: "MONTHLY",
      originalPrice: 4999,
      discountedPrice: 2499,
      features: [
        "Access to all gym equipment",
        "Group fitness classes",
        "Locker facility",
        "Free fitness assessment",
        "Nutritional guidance"
      ]
    },
    {
      id: "quarterly",
      name: "QUARTERLY",
      originalPrice: 13999,
      discountedPrice: 6999,
      popular: true,
      features: [
        "All Monthly features",
        "Personal trainer sessions (2/month)",
        "Diet plan customization",
        "Progress tracking",
        "Guest passes (2/month)",
        "Free protein shake"
      ]
    },
    {
      id: "yearly",
      name: "YEARLY",
      originalPrice: 29999,
      discountedPrice: 14999,
      features: [
        "All Quarterly features",
        "Unlimited personal training",
        "Premium supplements discount",
        "Priority class booking",
        "Free guest passes (unlimited)",
        "Spa & massage sessions",
        "Home workout plans"
      ]
    }
  ];

  const handleJoinPlan = (planId: string) => {
    const plan = plans.find(p => p.id === planId);
    toast({
      title: "Membership Selected!",
      description: `You've selected the ${plan?.name} plan. Redirecting to payment...`,
    });
    
    // Simulate payment redirect
    setTimeout(() => {
      alert(`Proceeding to payment for ${plan?.name} plan - ₹${plan?.discountedPrice}`);
    }, 1500);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gym-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gym-darker">
        <div className="container mx-auto px-4">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 text-gray-300 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-primary font-semibold text-lg mb-4">2025 NEW YEAR SPECIAL</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              JOIN GYMSTER TODAY
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Get 50% OFF on all membership plans! Transform your body with India's premier fitness center.
            </p>
            <div className="bg-primary/20 border border-primary rounded-lg p-4 inline-block">
              <span className="text-primary font-bold text-xl">⏰ Offer ends in 7 days!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`gym-card rounded-xl p-8 relative hover-lift ${
                  plan.popular ? "border-2 border-primary glow-effect" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl text-gray-400 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    ₹{plan.discountedPrice.toLocaleString()}
                  </div>
                  <div className="text-green-400 font-semibold">
                    Save ₹{(plan.originalPrice - plan.discountedPrice).toLocaleString()}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleJoinPlan(plan.id)}
                  className={`w-full py-3 text-lg font-semibold rounded-lg transition-all ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white glow-effect"
                      : "bg-gym-card border border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  JOIN NOW
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gym-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              WHY CHOOSE GYMSTER?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏋️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Latest Equipment</h3>
              <p className="text-gray-300">State-of-the-art fitness equipment from top brands</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Trainers</h3>
              <p className="text-gray-300">Certified trainers with years of experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🍎</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Nutrition Support</h3>
              <p className="text-gray-300">Personalized diet plans and nutrition guidance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🕐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Hours</h3>
              <p className="text-gray-300">Open 7 days a week with extended hours</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinNow;