import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  "Oil Changes",
  "Brake Services",
  "Tire Rotation and Balancing",
  "Engine Diagnostics",
  "Transmission Services",
  "Suspension Repair",
  "Exhaust System Repair",
  "Electrical System Diagnosis",
  "Air Conditioning Service",
  "Battery Replacement",
  "Wheel Alignment",
  "Fuel System Cleaning",
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
      className="py-20 section-gradient from-secondary/40 to-background"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center">{service}</p>
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
