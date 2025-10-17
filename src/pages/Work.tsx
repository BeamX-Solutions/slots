import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UtensilsCrossed, BookOpen, Heart, Shirt, Home, Users } from "lucide-react";

const programs = [
  {
    icon: Heart,
    title: "SLOTS' 14 - Annual Valentine's Day Outreach",
    description: "Our signature event held every February 14th, spreading love with meals, clothing, and care packages to those living on the streets.",
    impact: "Thousands reached annually since 2020",
    details: "The core mission of SLOTS. Each year on February 14th, we transform Valentine's Day into a community-wide celebration of compassion. Our teams distribute love packages containing meals, clothing, blankets, hygiene kits, and encouragement to individuals and families in need across multiple states."
  },
  {
    icon: UtensilsCrossed,
    title: "Meal Distribution",
    description: "Providing nutritious meals and food packages to individuals and families living on the streets.",
    impact: "Thousands of meals distributed",
    details: "Our flagship program delivers hot meals and food packages directly to communities in need. We work to ensure everyone we meet on February 14th receives a warm meal and knows they are loved and valued."
  },
  {
    icon: Shirt,
    title: "Clothing & Blankets",
    description: "Distributing quality clothing and warm blankets to those experiencing homelessness and poverty.",
    impact: "Essential supplies distributed annually",
    details: "We provide clothing and blankets to enhance the well-being and dignity of those on the streets. During our February 14th outreach, we ensure everyone receives warm clothing and blankets to help them through difficult times."
  },
  {
    icon: Home,
    title: "Hygiene Kits",
    description: "Providing personal hygiene supplies to promote health and dignity for those in need.",
    impact: "Kits distributed across all outreach locations",
    details: "Our hygiene kits include essential items like soap, toothpaste, towels, and other personal care products. We believe everyone deserves to maintain their dignity and health, regardless of their circumstances."
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
                  2024 Locations: Anambra • Lagos • Benin • Abuja • Nasarawa
                  <br />
                  Historical Reach: Port Harcourt • Enugu
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
