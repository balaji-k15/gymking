import { useState } from "react";

const WorkingHours = () => {
  const [selectedDay, setSelectedDay] = useState("MONDAY");

  const schedule = {
    MONDAY: [
      { time: "6.00AM - 8.00AM", class: "POWER LIFTING", trainer: "JOHN DEO" },
      { time: "8.00AM - 10.00AM", class: "BODY BUILDING", trainer: "JAMES TAYLOR" },
      { time: "10.00AM - 12.00PM", class: "CARDIO PROGRAM", trainer: "JACK SPARROW" },
      { time: "12.00PM - 2.00PM", class: "WEIGHT LOOSE", trainer: "ROBERT SMITH" },
      { time: "2.00PM - 4.00PM", class: "FITNESS PROGRAM", trainer: "ADAM PHILLIPS" },
      { time: "4.00PM - 6.00PM", class: "CROSSFIT CLASS", trainer: "JAMES ALIEN" },
      { time: "6.00PM - 8.00PM", class: "MUSCLE BUILDING", trainer: "PETTER JOHN" },
      { time: "8.00PM - 10.00PM", class: "YOGA CLASS", trainer: "JESSY RED" },
    ],
    TUESDAY: [
      { time: "6.00AM - 8.00AM", class: "CARDIO BLAST", trainer: "SARAH WILSON" },
      { time: "8.00AM - 10.00AM", class: "STRENGTH TRAINING", trainer: "MIKE JOHNSON" },
      { time: "10.00AM - 12.00PM", class: "ZUMBA DANCE", trainer: "PRIYA SHARMA" },
      { time: "2.00PM - 4.00PM", class: "PILATES", trainer: "ANNA KUMAR" },
      { time: "6.00PM - 8.00PM", class: "BOXING", trainer: "RAHUL SINGH" },
    ],
    WEDNESDAY: [
      { time: "6.00AM - 8.00AM", class: "POWER YOGA", trainer: "DEEPAK MEHTA" },
      { time: "8.00AM - 10.00AM", class: "BODY SCULPTING", trainer: "KAVYA REDDY" },
      { time: "4.00PM - 6.00PM", class: "FUNCTIONAL TRAINING", trainer: "AMIT PATEL" },
      { time: "7.00PM - 9.00PM", class: "KICKBOXING", trainer: "NEHA GUPTA" },
    ],
    THURSDAY: [
      { time: "6.00AM - 8.00AM", class: "HIIT TRAINING", trainer: "ROHIT SHARMA" },
      { time: "9.00AM - 11.00AM", class: "AEROBICS", trainer: "SUNITA DEVI" },
      { time: "5.00PM - 7.00PM", class: "WEIGHT TRAINING", trainer: "VIKRAM SINGH" },
      { time: "8.00PM - 10.00PM", class: "MEDITATION", trainer: "GURU PRASAD" },
    ],
    FRIDAY: [
      { time: "6.00AM - 8.00AM", class: "CROSSFIT", trainer: "ARJUN KAPOOR" },
      { time: "10.00AM - 12.00PM", class: "SWIMMING", trainer: "POOJA AGARWAL" },
      { time: "6.00PM - 8.00PM", class: "DANCE FITNESS", trainer: "SHREYA GHOSH" },
    ],
    SATURDAY: [
      { time: "7.00AM - 9.00AM", class: "OUTDOOR TRAINING", trainer: "MANOJ KUMAR" },
      { time: "10.00AM - 12.00PM", class: "CIRCUIT TRAINING", trainer: "RAVI TEJA" },
      { time: "4.00PM - 6.00PM", class: "AQUA AEROBICS", trainer: "MEERA NAIR" },
    ],
    SUNDAY: [
      { time: "8.00AM - 10.00AM", class: "GENTLE YOGA", trainer: "SWAMI JI" },
      { time: "6.00PM - 8.00PM", class: "FAMILY FITNESS", trainer: "TEAM GYMSTER" },
    ],
  };

  const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

  return (
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-primary font-semibold text-lg mb-4">CLASS SCHEDULE</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            WORKING HOURS
          </h2>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                selectedDay === day
                  ? "bg-primary text-white"
                  : "bg-gym-card text-gray-300 hover:bg-primary hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {schedule[selectedDay as keyof typeof schedule]?.map((session, index) => (
            <div
              key={index}
              className="gym-card rounded-xl p-6 hover-lift transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-white font-semibold text-lg mb-2">
                  {session.time}
                </div>
                <div className="text-primary font-bold text-xl mb-2">
                  {session.class}
                </div>
                <div className="text-gray-400 text-sm">
                  {session.trainer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⭐</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2 counter-animation">12345</div>
            <div className="text-gray-400 text-sm">EXPERIENCE</div>
          </div>
          <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👥</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2 counter-animation">12345</div>
            <div className="text-gray-400 text-sm">OUR TRAINERS</div>
          </div>
          <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✅</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2 counter-animation">12345</div>
            <div className="text-gray-400 text-sm">COMPLETE PROJECT</div>
          </div>
          <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👍</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2 counter-animation">12345</div>
            <div className="text-gray-400 text-sm">HAPPY CLIENTS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;