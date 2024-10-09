import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const journalEntries = [
  { title: "The Importance of Regular Oil Changes", date: "2023-05-15" },
  { title: "How to Extend the Life of Your Brakes", date: "2023-05-22" },
  { title: "Mini Cooper Maintenance Tips", date: "2023-05-29" },
  { title: "Understanding Your Check Engine Light", date: "2023-06-05" },
];

const Journal = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="journal"
      className="py-20 section-gradient from-background to-secondary/40"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Auto Care Journal
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {journalEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{entry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Published on: {entry.date}</p>
                  <a href="#" className="text-secondary hover:underline">
                    Read more
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
