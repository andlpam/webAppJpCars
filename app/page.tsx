'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Wrench, Car, Clock, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Check } from 'lucide-react'

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isNewClient, setIsNewClient] = useState<boolean | null>(null)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="container mx-auto py-6 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="flex justify-between items-center">
          <Wrench className="h-10 w-10 text-secondary" />
          <ul className="flex space-x-4">
            <li><button onClick={() => scrollTo('hero')} className="text-foreground hover:text-secondary">Home</button></li>
            <li><button onClick={() => scrollTo('about')} className="text-foreground hover:text-secondary">About Us</button></li>
            <li><button onClick={() => scrollTo('specialty')} className="text-foreground hover:text-secondary">Specialty</button></li>
            <li><button onClick={() => scrollTo('services')} className="text-foreground hover:text-secondary">Services</button></li>
            <li><button onClick={() => scrollTo('schedule')} className="text-foreground hover:text-secondary">Schedule</button></li>
            <li><button onClick={() => scrollTo('team')} className="text-foreground hover:text-secondary">Team</button></li>
            <li><button onClick={() => scrollTo('journal')} className="text-foreground hover:text-secondary">Journal</button></li>
            <li><button onClick={() => scrollTo('contact')} className="text-foreground hover:text-secondary">Contact</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden section-gradient from-background to-secondary/40">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Car workshop"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-secondary/60" />
          </div>
          <div className="container mx-auto text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              HÁ <motion.span
                className="text-secondary"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              >
                50 ANOS
              </motion.span> A CUIDAR DO SEU AUTOMÓVEL
            </motion.h1>
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Check className="text-secondary mr-2" />
              <p className="text-xl">Free diagnosis and estimates available</p>
            </motion.div>
            <motion.div
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground" onClick={() => scrollTo('schedule')}>
                Schedule Service
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-secondary/20" onClick={() => scrollTo('contact')}>
                Our Location
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20 section-gradient from-secondary/40 to-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
            <Card>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  For half a century, our family-owned business has been at the forefront of automotive care in [Your City]. 
                  Founded in 1973 by [Founder's Name], we started as a small garage with a big dream: to provide honest, 
                  reliable, and expert car maintenance services to our community.
                </p>
                <p>
                  Over the years, we've grown from a modest workshop to a state-of-the-art facility, equipped with the 
                  latest diagnostic tools and staffed by certified mechanics. Our journey has been marked by a commitment 
                  to excellence, continuous learning, and a passion for cars that runs in our family's veins.
                </p>
                <p>
                  Today, we're proud to be [Your City]'s most trusted name in car maintenance, known for our expertise 
                  in brake services and our special affinity for Mini models. As we celebrate 50 years of service, we 
                  remain dedicated to our founding principles: quality work, fair prices, and customer satisfaction above all.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="specialty" className="py-20 section-gradient from-background to-secondary/40">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Specialty</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wrench className="mr-2 h-6 w-6 text-secondary" />
                      Brake Specialists
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our team specializes in brake repair and maintenance, ensuring your vehicle's safety on the road.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Car className="mr-2 h-6 w-6 text-secondary" />
                      Mini Enthusiasts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We have a special passion for Mini models, offering specialized services for these iconic vehicles.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 section-gradient from-secondary/40 to-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Oil Changes", "Brake Services", "Tire Rotation and Balancing",
                "Engine Diagnostics", "Transmission Services", "Suspension Repair",
                "Exhaust System Repair", "Electrical System Diagnosis", "Air Conditioning Service",
                "Battery Replacement", "Wheel Alignment", "Fuel System Cleaning"
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="text-center">{service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="py-20 section-gradient from-background to-secondary/40">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Schedule Service</h2>
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
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Contact Phone</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" />
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
                      <Input id="phone" type="tel" placeholder="Your phone number" />
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
                        {Array.from({ length: 10 }, (_, i) => i + 9).map((hour) => (
                          <SelectItem key={hour} value={`${hour}:00`}>{`${hour}:00`}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">Book Appointment</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="team" className="py-20 section-gradient from-secondary/40 to-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: 'John Doe', role: 'Master Mechanic', image: 'https://i.pravatar.cc/150?img=1' },
                { name: 'Jane Smith', role: 'Brake Specialist', image: 'https://i.pravatar.cc/150?img=2' },
                { name: 'Mike Johnson', role: 'Mini Expert', image: 'https://i.pravatar.cc/150?img=3' },
                { name: 'Emily Brown', role: 'Software Engineer', image: 'https://i.pravatar.cc/150?img=4' }
              ].map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="journal" className="py-20 section-gradient from-background to-secondary/40">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Journal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Car Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Annual Classic Car Show - June 15, 2023</li>
                    <li>Mini Cooper Rally - July 22-23, 2023</li>
                    <li>Electric Vehicle Expo - August 5, 2023</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Car News</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>New Brake Technology Promises Shorter Stopping Distances</li>
                    <li>Mini Announces All-Electric Lineup by 2030</li>
                    <li>Study Shows Regular Maintenance Extends Vehicle Lifespan by 50%</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 section-gradient from-secondary/40 to-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact and Location</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-6 w-6 text-secondary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>123 Auto Care Street, Your City, State 12345</p>
                  <div className="mt-4 h-64">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767645"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 h-6 w-6 text-secondary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Monday–Friday: 9 AM to 6 PM</p>
                    <p>Weekend: Closed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="mr-2 h-6 w-6 text-secondary" />
                      Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Brakes Specialty Services: (123) 456-7890</p>
                    <p>Other Services: (098) 765-4321</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="mr-2 h-6 w-6 text-secondary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>info@autocarexperts.com</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-foreground hover:text-secondary"><Facebook /></a>
            <a href="#" className="text-foreground hover:text-secondary"><Twitter /></a>
            <a href="#" className="text-foreground hover:text-secondary"><Instagram /></a>
          </div>
          <p>&copy; 2023 Auto Care Experts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}