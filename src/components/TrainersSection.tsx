import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const TrainersSection = () => {
  const trainers = [
    {
      name: "RAJESH KUMAR",
      specialization: "POWER LIFTING EXPERT",
      image: trainer1,
      experience: "8+ Years",
    },
    {
      name: "PRIYA SHARMA",
      specialization: "YOGA & CARDIO SPECIALIST", 
      image: trainer2,
      experience: "6+ Years",
    },
    {
      name: "AMIT SINGH",
      specialization: "BODYBUILDING COACH",
      image: trainer3,
      experience: "10+ Years",
    },
  ];

  const handleViewTrainer = (trainerName: string) => {
    alert(`View profile for ${trainerName}`);
  };

  return (
    <section className="py-20 bg-gym-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary font-semibold text-lg mb-4">MEET OUR TEAM</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            EXPERT TRAINERS
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our certified trainers bring years of experience and passion to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="gym-card rounded-xl overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gym-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={() => handleViewTrainer(trainer.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold"
                  >
                    VIEW PROFILE
                  </button>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-primary font-semibold mb-2">{trainer.specialization}</p>
                <div className="text-gray-400 text-sm">{trainer.experience} Experience</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.location.href = "/trainers"}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg hover-lift"
          >
            VIEW ALL TRAINERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;