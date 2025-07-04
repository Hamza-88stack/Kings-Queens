import ServiceCard from "../card/card";
import Phone from "@/Kings & Queens/Group 40.svg"
import Car from "@/Kings & Queens/Group-3.svg"
import Cup from "@/Kings & Queens/Group-2.svg"
import Face from "@/Kings & Queens/Group 41.svg"
const HowItWorksSection: React.FC = () => {
  // Steps data with icons and content
  const steps = [
    {
      id: 1,
      title: "1. You Book",
      description: "Schedule a pickup online or by phone, including everything from ordinary items to any luxury garments.",
      icon: Phone
    },
    {
      id: 2,
      title: "2. We collect",
      description: "We'll come to your door to collect & confirm what you want done with your items.",
      icon: Car
    },
    {
      id: 3,
      title: "3. You relax",
      description: "We take care of everything from washing to pressing. Items are carefully steamed with love.",
      icon: Cup
    },
    {
      id: 4,
      title: "4. Smile delivered",
      description: "We'll deliver your clothes back to you clean, pressed, ready to brighten your day and make life easier.",
      icon: Face
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-white text-sm font-[400] mb-2">
            How It Works
          </h4>
          <h2 className="text-white text-3xl md:text-4xl font-extralight">
            Fresh laundry with zero hassle.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <ServiceCard
              key={step.id}
              title={step.title}
              description={step.description}
              icon={step.icon}
              showButton={false}

            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;