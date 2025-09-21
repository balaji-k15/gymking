import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    // Placeholder for social media links
    alert(`Opening ${platform} page`);
  };

  const handleJoinNow = () => {
    window.location.href = "/join";
  };

  return (
    <footer className="bg-gym-darker pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold text-white">GYMSTER</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Transform your body and mind with India's most advanced fitness center. 
              Join thousands of satisfied members who have achieved their fitness goals with us.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => handleSocialClick("Facebook")}
                className="w-12 h-12 bg-gym-card hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </button>
              <button
                onClick={() => handleSocialClick("Instagram")}
                className="w-12 h-12 bg-gym-card hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </button>
              <button
                onClick={() => handleSocialClick("Twitter")}
                className="w-12 h-12 bg-gym-card hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </button>
            </div>
            <button
              onClick={handleJoinNow}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg hover-lift glow-effect"
            >
              JOIN NOW - 50% OFF
            </button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@gymster.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-300">
                  123 Fitness Street,<br />
                  Mumbai, Maharashtra<br />
                  India - 400001
                </span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">WORKING HOURS</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-primary font-semibold">6AM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-primary font-semibold">7AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-primary font-semibold">8AM - 6PM</span>
              </div>
            </div>
            
            {/* Membership Plans */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">MEMBERSHIP</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Monthly: <span className="text-primary font-semibold">₹2,499</span></div>
                <div className="text-gray-300">Quarterly: <span className="text-primary font-semibold">₹6,999</span></div>
                <div className="text-gray-300">Yearly: <span className="text-primary font-semibold">₹19,999</span></div>
                <div className="text-xs text-primary">*50% OFF on all plans this month!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gym-card pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 GYMSTER. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Designed by <span className="text-primary font-semibold">BALAJI KETHA</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;