import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden section-gradient from-background to-secondary/40"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Car workshop"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-secondary/60" />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HÁ{" "}
          <motion.span
            className="text-secondary"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            50 ANOS
          </motion.span>{" "}
          A CUIDAR DO SEU AUTOMÓVEL
        </motion.h1>
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Check className="text-secondary mr-2" />
          <p className="text-xl">Free diagnosis and estimates available</p>
        </motion.div>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
            onClick={() => scrollTo("schedule")}
          >
            Schedule Service
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-secondary/20"
            onClick={() => scrollTo("contact")}
          >
            Our Location
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
