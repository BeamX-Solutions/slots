import { Hero } from "@/components/Hero";
import { StoryCard } from "@/components/StoryCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Heart, Users, Globe, Sparkles } from "lucide-react";

// Sample stories data
const featuredStories = [
  {
    title: "Valentine's Day 2024: Spreading Love in Lagos",
    excerpt: "Our annual Valentine's distribution brought smiles to over 2,000 people across Lagos communities.",
    date: "2024-02-14",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    slug: "valentine-day-2024-lagos"
  },
  {
    title: "Food Relief Program Reaches New Heights",
    excerpt: "Thanks to your support, we've now distributed over 5,000 meals to families in need.",
    date: "2024-01-20",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&q=80",
    slug: "food-relief-milestone"
  },
  {
    title: "Meet Our Volunteers: Stories of Compassion",
    excerpt: "Hear from the amazing volunteers who make our mission possible every single day.",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    slug: "meet-volunteers"
  }
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We lead with empathy and understanding in every interaction."
  },
  {
    icon: Users,
    title: "Community",
    description: "Together, we create lasting positive change in neighborhoods."
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Every action counts toward building a better future."
  },
  {
    icon: Sparkles,
    title: "Hope",
    description: "We believe in the power of small acts to transform lives."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by compassion, driven by community impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="mb-2">Stories of Impact</h2>
              <p className="text-xl text-muted-foreground">
                Real people, real change, real hope
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="mt-6 md:mt-0">
              <Link to="/blog">View All Stories</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <StoryCard {...story} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2>Be Part of the Change</h2>
            <p className="text-xl text-muted-foreground">
              Your support helps us reach more communities and share more love. Every contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/involve">
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  Make a Donation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/involve#volunteer">
                  Join as Volunteer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Stay Connected</CardTitle>
              <p className="text-muted-foreground">
                Get updates on our latest initiatives, events, and success stories
              </p>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
