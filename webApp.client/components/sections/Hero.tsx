import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
          src="/images/heroSectionBackground.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
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
            className="text-[clamp(2rem,5vw,4rem)] font-bold text-white mb-2 sm:mb-3"
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
            className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A cuidar do seu automóvel
          </motion.h2>
          <motion.h3
            className="text-[clamp(1rem,2.5vw,2rem)] font-bold text-red-600 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="block">Os melhores a nível nacional</span>
            <span className="block">na reparação de discos</span>
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-[clamp(1rem,2vw,1.25rem)] rounded-md hover:bg-red-700 hover:scale-105 transition-all duration-300 ease-in-out">
              ODKRYJ TE TERAZ NOWY
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 sm:p-6 z-20">
        <motion.div
          className="flex justify-between items-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/logo.png" alt="Logo" className="h-8 sm:h-10" />
          <ul className="hidden md:flex space-x-2 lg:space-x-6 text-white text-[clamp(0.75rem,1.5vw,1rem)] uppercase">
            {["Strona główna", "Usługi", "Cennik", "Realizacje", "Kontakt"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <a
                    href="#"
                    className="hover:text-red-600 transition duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </motion.div>
      </nav>
    </section>
  );
};

export default Hero;
