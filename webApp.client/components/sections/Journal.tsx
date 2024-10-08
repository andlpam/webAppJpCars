import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const journalEntries = [
  { title: 'The Importance of Regular Oil Changes', date: '2023-05-15' },
  { title: 'How to Extend the Life of Your Brakes', date: '2023-05-22' },
  { title: 'Mini Cooper Maintenance Tips', date: '2023-05-29' },
  { title: 'Understanding Your Check Engine Light', date: '2023-06-05' }
]

const Journal = () => (
  <section id="journal" className="py-20 section-gradient from-background to-secondary/40">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Auto Care Journal</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {journalEntries.map((entry, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{entry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Published on: {entry.date}</p>
              <a href="#" className="text-secondary hover:underline">Read more</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Journal