import React from "react";
import { motion } from "framer-motion";
import { SlideButton } from "@/components/ui/slideButton";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/heroSectionBackground_pc.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="object-[70%_center] md:object-center" // Focus more on the person for mobile, center for larger screens
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start pt-16 sm:pt-24 md:pt-32 lg:pt-36 px-4 sm:px-6 md:px-8 lg:px-16 min-h-screen">
        <motion.div
          className="text-left w-full max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-[clamp(2rem,5vw,4rem)] font-roboto font-bold text-white mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Há{" "}
            <motion.span
              className="relative inline-block"
              initial={{ backgroundSize: "0 2px" }}
              animate={
                inView
                  ? { backgroundSize: "100% 2px" }
                  : { backgroundSize: "0 2px" }
              }
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                backgroundImage: "linear-gradient(to right, #EF4444, #EF4444)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
                paddingBottom: "4px",
              }}
            >
              50 anos
            </motion.span>
          </motion.h1>
          <motion.h2
            className="text-[clamp(1.5rem,4vw,3rem)] font-roboto font-bold text-white mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A cuidar do seu automóvel
          </motion.h2>
          <motion.h3
            className="text-[clamp(1rem,2.5vw,2rem)] font-roboto font-bold text-red-600 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="block">Os melhores a nível nacional</span>
            <span className="block">na reparação de discos</span>
          </motion.h3>
          <SlideButton className="text-[clamp(1rem,2vw,1.25rem)] px-4 sm:px-6 py-2 sm:py-3">
            MARQUE JÁ O SEU DIAGNÓSTICO
          </SlideButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
