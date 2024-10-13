import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    category: "Engine Repair",
    title: "Oil Change",
    description: "Extend the life of your engine with regular oil changes.",
  },
  {
    category: "Brake Service",
    title: "Brake Pad Replacement",
    description:
      "Improve your vehicle's safety with regular brake maintenance.",
  },
  {
    category: "Tire Service",
    title: "Tire Rotation",
    description: "Ensure even wear and extend the life of your tires.",
  },
  {
    category: "Diagnostics",
    title: "Engine Diagnostics",
    description:
      "Identify and resolve issues before they become major problems.",
  },
  {
    category: "Transmission",
    title: "Transmission Repair",
    description:
      "Keep your vehicle running smoothly with expert transmission service.",
  },
  {
    category: "Suspension",
    title: "Suspension Repair",
    description:
      "Improve handling and ride comfort with suspension maintenance.",
  },
  // Add more services as needed
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-roboto font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-transparent border border-red-500 text-red-500 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-red-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
