import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Download, Quote, TrendingUp, Users, Heart, Package } from "lucide-react";

const impactStats = [
  { label: "Total Meals Distributed", value: "5,234", icon: Package, color: "text-primary" },
  { label: "Volunteers Engaged", value: "247", icon: Users, color: "text-primary" },
  { label: "Communities Reached", value: "10", icon: Heart, color: "text-primary" },
  { label: "Events Organized", value: "32", icon: TrendingUp, color: "text-primary" }
];

const programBreakdown = [
  { name: "Food Distribution", percentage: 40, value: "40%" },
  { name: "Education Support", percentage: 25, value: "25%" },
  { name: "Clothing Drive", percentage: 20, value: "20%" },
  { name: "Community Events", percentage: 15, value: "15%" }
];

const testimonials = [
  {
    quote: "SLOTS gave my family hope when we had none. The meals and kindness kept us going through our darkest times.",
    author: "Grace O.",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
  },
  {
    quote: "As a volunteer, I've witnessed firsthand how a simple act of giving can transform someone's entire day. This organization changed my life too.",
    author: "Chidi M.",
    location: "Abuja",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
  },
  {
    quote: "The school supplies my children received meant they could start the term with dignity and confidence. Thank you SLOTS.",
    author: "Amaka L.",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80"
  }
];

export default function Impact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>Our Impact</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Real numbers, real stories, real change in communities across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-glow transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-2">
                    <stat.icon className={`h-10 w-10 ${stat.color}`} />
                  </div>
                  <CardTitle className="text-4xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Breakdown */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Resource Allocation</h2>
              <p className="text-xl text-muted-foreground">
                How we distribute our impact across programs
              </p>
            </div>

            <Card>
              <CardContent className="pt-8 space-y-8">
                {programBreakdown.map((program, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{program.name}</span>
                      <span className="text-sm font-semibold text-primary">{program.value}</span>
                    </div>
                    <Progress value={program.percentage} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Voices of Impact</h2>
            <p className="text-xl text-muted-foreground">
              Stories from the hearts we've touched
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-glow transition-all animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-8 space-y-6">
                  <Quote className="h-10 w-10 text-primary/30" />
                  <p className="text-muted-foreground italic">{testimonial.quote}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Report CTA */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center">
            <CardContent className="pt-12 pb-12 space-y-6">
              <Download className="h-16 w-16 text-primary mx-auto" />
              <h2 className="text-3xl">2024 Annual Report</h2>
              <p className="text-xl text-muted-foreground">
                Dive deeper into our impact with our comprehensive annual report
              </p>
              <Button size="lg" className="mt-4">
                <Download className="mr-2 h-5 w-5" />
                Download Report (Coming Soon)
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
