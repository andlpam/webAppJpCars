import { Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.footer
      ref={ref}
      className="bg-gradient-to-b from-black to-gray-900 text-secondary-foreground py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Wrench className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Auto Care</span>
        </div>
        <div className="text-sm">© 2023 Auto Care. All rights reserved.</div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
