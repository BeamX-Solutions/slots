import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UtensilsCrossed, BookOpen, Heart, Shirt, Home, Users } from "lucide-react";

const programs = [
  {
    icon: UtensilsCrossed,
    title: "Food Distribution Program",
    description: "Providing nutritious meals and food packages to families and individuals in need across Lagos and Abuja.",
    impact: "5,000+ meals distributed in 2024",
    details: "Our flagship program delivers hot meals and food packages directly to communities. We partner with local vendors to ensure quality and cultural relevance. Every Thursday and Saturday, our teams visit designated areas to share love through food."
  },
  {
    icon: Heart,
    title: "Valentine's Day Outreach",
    description: "Annual street outreach spreading love with care packages, food, and personal items on Valentine's Day.",
    impact: "2,000+ people reached annually",
    details: "Our signature event transforms Valentine's Day into a community-wide celebration of compassion. Volunteers distribute love packages containing food, toiletries, and encouraging messages. This initiative has become a beloved tradition in our communities."
  },
  {
    icon: BookOpen,
    title: "Education Support",
    description: "Providing school supplies, books, and educational materials to underprivileged children.",
    impact: "500+ students supported",
    details: "We believe education is key to breaking cycles of poverty. Our program provides backpacks, notebooks, textbooks, and uniforms to students who would otherwise go without. We also organize tutoring sessions and mentorship programs."
  },
  {
    icon: Shirt,
    title: "Clothing Drive",
    description: "Collecting and distributing clean, quality clothing to those experiencing homelessness and poverty.",
    impact: "3,000+ clothing items distributed",
    details: "Dignity starts with basic needs. Our clothing drives collect gently used items which are cleaned, sorted, and distributed with respect and care. We host monthly distribution events and maintain a clothing bank for emergency needs."
  },
  {
    icon: Home,
    title: "Shelter Support",
    description: "Partnering with shelters to provide supplies, meals, and support services.",
    impact: "10 partner shelters",
    details: "We work closely with local shelters to provide essential supplies, hot meals, and volunteer support. Our team helps with cleaning, cooking, and organizing activities that bring joy and normalcy to residents' lives."
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Regular gatherings that build community, provide resources, and celebrate together.",
    impact: "Monthly community events",
    details: "Beyond material aid, we foster community through regular events including health fairs, skill-building workshops, holiday celebrations, and family fun days. These gatherings create connections and combat isolation."
  }
];

export default function Work() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>Our Programs</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Multi-faceted initiatives addressing urgent needs while building lasting community relationships
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{program.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">{program.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Accordion */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Program Details</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {programs.map((program, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 hover:shadow-glow transition-all"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <program.icon className="h-6 w-6 text-primary shrink-0" />
                      <span className="font-semibold">{program.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {program.details}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Locations Map Placeholder */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Where We Work</h2>
            <p className="text-xl text-muted-foreground">
              Active programs across Lagos and Abuja, reaching communities in need
            </p>
          </div>
          
          <Card className="max-w-5xl mx-auto overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center space-y-2">
                <Users className="h-12 w-12 text-primary mx-auto" />
                <p className="text-muted-foreground">Interactive map coming soon</p>
                <p className="text-sm text-muted-foreground">
                  Primary locations: Lagos (Ikeja, Surulere, Ajah) • Abuja (Wuse, Kubwa, Nyanya)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
