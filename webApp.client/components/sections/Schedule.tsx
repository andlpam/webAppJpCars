import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScheduleProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  isNewClient: boolean | null;
  setIsNewClient: (isNewClient: boolean) => void;
}

const Schedule: React.FC<ScheduleProps> = ({
  date,
  setDate,
  isNewClient,
  setIsNewClient,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="schedule"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Schedule Service
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Book Your Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label>Are you a new client?</Label>
                  <div className="flex space-x-4 mt-2">
                    <Button
                      variant={isNewClient === true ? "default" : "outline"}
                      onClick={() => setIsNewClient(true)}
                    >
                      Yes
                    </Button>
                    <Button
                      variant={isNewClient === false ? "default" : "outline"}
                      onClick={() => setIsNewClient(false)}
                    >
                      No
                    </Button>
                  </div>
                </div>
                {isNewClient === true && (
                  <>
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Contact Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="carModel">Car Model</Label>
                      <Input id="carModel" placeholder="e.g., Mini Cooper" />
                    </div>
                    <div>
                      <Label htmlFor="carYear">Year of the Car</Label>
                      <Input id="carYear" placeholder="e.g., 2020" />
                    </div>
                  </>
                )}
                {isNewClient === false && (
                  <div>
                    <Label htmlFor="phone">Contact Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                    />
                  </div>
                )}
                <div>
                  <Label>Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Select>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => i + 9).map(
                        (hour) => (
                          <SelectItem
                            key={hour}
                            value={`${hour}:00`}
                          >{`${hour}:00`}</SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
