import { Card, CardContent } from '@/components/ui/card'

const About = () => (
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
)

export default About