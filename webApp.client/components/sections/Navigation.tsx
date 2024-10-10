import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Início", section: "hero" },
    { name: "Sobre Nós", section: "about" },
    { name: "Especialidade", section: "specialty" },
    { name: "Serviços", section: "service" },
    { name: "Faz a tua Marcação", section: "schedule" },
    { name: "Equipa", section: "team" },
    { name: "Contacte-nos", section: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close the menu immediately
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Adjust this delay as needed
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300",
        isScrolled && scrollDirection === "down"
          ? "-translate-y-full"
          : "translate-y-0",
        isScrolled ? "bg-black/80 backdrop-blur-sm" : ""
      )}
    >
      <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
        <AnimatePresence>
          {(scrollDirection === "up" || !isScrolled) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="ml-auto">
          {isMobile ? (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white z-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.section);
                    }}
                    className="text-white hover:text-red-600 transition duration-300 uppercase text-[clamp(0.75rem,1.5vw,1rem)]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
      {isMobile && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-sm overflow-hidden z-50"
            >
              <ul className="container mx-auto py-4 px-6 flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a
                      href={`#${item.section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.section);
                      }}
                      className="text-white hover:text-red-600 transition duration-300 uppercase text-[clamp(0.75rem,1.5vw,1rem)] block py-2"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};

export default Navigation;
