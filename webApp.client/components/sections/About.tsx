import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 section-gradient from-secondary/40 to-background"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                For half a century, our family-owned business has been at the
                forefront of automotive care in [Your City]. Founded in 1973 by
                [Founder's Name], we started as a small garage with a big dream:
                to provide honest, reliable, and expert car maintenance services
                to our community.
              </p>
              <p>
                Over the years, we've grown from a modest workshop to a
                state-of-the-art facility, equipped with the latest diagnostic
                tools and staffed by certified mechanics. Our journey has been
                marked by a commitment to excellence, continuous learning, and a
                passion for cars that runs in our family's veins.
              </p>
              <p>
                Today, we're proud to be [Your City]'s most trusted name in car
                maintenance, known for our expertise in brake services and our
                special affinity for Mini models. As we celebrate 50 years of
                service, we remain dedicated to our founding principles: quality
                work, fair prices, and customer satisfaction above all.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
