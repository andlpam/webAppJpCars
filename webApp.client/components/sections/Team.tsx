import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const teamMembers = [
  { name: 'John Doe', role: 'Master Mechanic', image: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Jane Smith', role: 'Brake Specialist', image: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Mike Johnson', role: 'Mini Expert', image: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Emily Brown', role: 'Software Engineer', image: 'https://i.pravatar.cc/150?img=4' }
]

const Team = () => (
  <section id="team" className="py-20 section-gradient from-secondary/40 to-background">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
      <div className="grid md:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto" />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle>{member.name}</CardTitle>
              <p>{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
