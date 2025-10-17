import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Users } from "lucide-react";

const milestones = [
  { year: "2015", title: "SLOTS Founded", description: "Our journey began with a small team and big dreams" },
  { year: "2016", title: "First Valentine's Event", description: "Reached 500 people in Lagos with love packages" },
  { year: "2018", title: "Expansion to Abuja", description: "Extended our reach to Nigeria's capital" },
  { year: "2020", title: "COVID-19 Response", description: "Provided essential supplies during the pandemic" },
  { year: "2023", title: "10,000+ Lives Touched", description: "Celebrating milestone impact across Nigeria" },
  { year: "2024", title: "Growing Stronger", description: "Continued expansion with new programs and partners" }
];

const team = [
  { name: "Founder & Executive Director", role: "Leadership", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
  { name: "Programs Director", role: "Operations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Community Outreach Lead", role: "Field Work", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Volunteer Coordinator", role: "Engagement", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>About SLOTS</h1>
            <p className="text-xl text-muted-foreground text-balance">
              We are a community-driven humanitarian organization dedicated to Sharing Love On The Streets through compassionate action and sustainable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-glow transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3>Our Mission</h3>
                <p className="text-muted-foreground">
                  To bring hope, dignity, and practical support to vulnerable communities across Nigeria through direct outreach, food assistance, education initiatives, and community empowerment programs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3>Our Vision</h3>
                <p className="text-muted-foreground">
                  A Nigeria where every person experiences dignity, compassion, and access to basic necessities. Where communities thrive together and no one is left behind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From humble beginnings to meaningful impact
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <Card className="flex-1 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate individuals dedicated to making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-glow transition-all group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Recap */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Heart className="h-16 w-16 text-primary mx-auto animate-heart-pulse" fill="currentColor" />
            <h2>Driven by Compassion</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Every initiative, every outreach, every act of kindness is rooted in our belief that love and compassion can transform lives and communities. We don't just provide aid – we build relationships, restore dignity, and create lasting change.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
