import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Car } from "lucide-react";

const Specialty = () => (
  <section
    id="specialty"
    className="py-20 section-gradient from-background to-secondary/40"
  >
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Specialty</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="mr-2 h-6 w-6 text-secondary" />
                Brake Specialists
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team specializes in brake repair and maintenance, ensuring
                your vehicle's safety on the road.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="mr-2 h-6 w-6 text-secondary" />
                Mini Enthusiasts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We have a special passion for Mini models, offering specialized
                services for these iconic vehicles.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Specialty;
