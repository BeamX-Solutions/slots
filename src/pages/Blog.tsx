import { StoryCard } from "@/components/StoryCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const blogPosts = [
  {
    title: "Valentine's Day 2024: Spreading Love in Lagos",
    excerpt: "Our annual Valentine's distribution brought smiles to over 2,000 people across Lagos communities. Read about the incredible day of love and giving.",
    date: "2024-02-14",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    slug: "valentine-day-2024-lagos"
  },
  {
    title: "Food Relief Program Reaches New Heights",
    excerpt: "Thanks to your support, we've now distributed over 5,000 meals to families in need. Every meal represents a story of hope.",
    date: "2024-01-20",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&q=80",
    slug: "food-relief-milestone"
  },
  {
    title: "Meet Our Volunteers: Stories of Compassion",
    excerpt: "Hear from the amazing volunteers who make our mission possible every single day. Their dedication inspires us all.",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    slug: "meet-volunteers"
  },
  {
    title: "Back to School Drive: Empowering Students",
    excerpt: "500 students received school supplies and uniforms, starting their academic year with confidence and dignity.",
    date: "2023-12-15",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    slug: "back-to-school-2023"
  },
  {
    title: "Community Health Fair: Serving 1,000+ People",
    excerpt: "Our first health fair provided free checkups, medications, and health education to over 1,000 community members.",
    date: "2023-11-22",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    slug: "health-fair-2023"
  },
  {
    title: "Holiday Outreach: Bringing Joy to Families",
    excerpt: "During the holiday season, we distributed care packages and hot meals to 500 families across Abuja.",
    date: "2023-12-25",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
    slug: "holiday-outreach-2023"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>Stories & News</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Real stories of impact, hope, and transformation from our communities
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search stories..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <StoryCard {...post} />
              </div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
