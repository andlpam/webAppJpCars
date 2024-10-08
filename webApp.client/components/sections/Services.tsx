import { Card, CardContent } from "@/components/ui/card";

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

const Services = () => (
  <section
    id="services"
    className="py-20 section-gradient from-secondary/40 to-background"
  >
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <p className="text-center">{service}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
