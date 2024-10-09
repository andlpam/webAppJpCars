import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    name: "Jaime Pires",
    role: "Especialista em Mecânica",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jaime Pires",
    role: "Especialista em Embraiagens",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Pedro Macedo",
    role: "Especialista em Minis",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "André Amorim",
    role: "Engenheiro de Software",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="team"
      className="py-20 section-gradient from-secondary/40 to-background"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Our Team
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ scale: 1.15, zIndex: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-full w-32 h-32 mx-auto"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle>{member.name}</CardTitle>
                  <p>{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
