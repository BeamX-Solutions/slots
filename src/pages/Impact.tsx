import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Quote, TrendingUp, Users, Heart, Package, UtensilsCrossed, Shirt, Home, Calendar } from "lucide-react";

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

const impactStats = [
  { label: "Meals Distributed", value: "1000s", icon: Package, color: "text-primary" },
  { label: "Years of Impact", value: "5", icon: TrendingUp, color: "text-primary" },
  { label: "States Reached", value: "8", icon: Heart, color: "text-primary" },
  { label: "Annual Events", value: "1", icon: Users, color: "text-primary" }
];

const testimonials = [
  {
    quote: "We distributed thousands of meals to individuals and families in need, bringing nourishment and hope to those who need it most.",
    author: "SLOTS Team",
    location: "Multiple States",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80"
  },
  {
    quote: "Providing essential supplies such as clothing, blankets, and hygiene kits has enhanced the well-being of countless people living on the streets.",
    author: "Volunteer Coordinator",
    location: "Lagos & Abuja",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80"
  },
  {
    quote: "Most of all, we made people smile and feel loved. Raising awareness about the importance of compassion in the community is our greatest achievement.",
    author: "Mmesoma Anita Ogbuagu",
    location: "SLOTS' 14 Convener",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
  }
];

export default function Impact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>Our Work & Impact</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Transforming lives through compassionate action and measurable results across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground">
              Multi-faceted initiatives addressing urgent needs
            </p>
          </div>

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
            <h3 className="text-2xl font-bold text-center mb-8">Program Details</h3>
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


      {/* Our Journey Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Journey (2020-2024)</h2>
            <p className="text-xl text-muted-foreground">
              Five years of spreading love and making a difference across Nigeria
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* 2020 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-primary/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2020</h3>
                  </div>
                  <p className="text-lg mb-4">The journey begins - our first Valentine's Day outreach</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    In our inaugural year, we launched SLOTS with a simple yet powerful mission: to share love and provide essential support to those living on the streets.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src="images\anambra-lagos-2020-I.jpg"  alt="SLOTS 2020 outreach in Anambra and Lagos" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2020-II.jpg" alt="Volunteers distributing care packages in 2020" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2020-III.jpg" alt="Community engagement 2020" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2020-IV.jpg" alt="Sharing meals and supplies 2020" className="w-full h-full object-cover rounded" />
                </div>
              </div>
            </Card>

            {/* 2021 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="grid grid-cols-2 gap-2 p-2 md:order-1">
                  <img src="images\anambra-lagos-2021-I.jpg" alt="SLOTS 2021 team celebrating with community" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2021-II.jpg" alt="Volunteers distributing love packages in 2021" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2021-III.jpg" alt="Community outreach 2021" className="w-full h-full object-cover rounded col-span-2" />
                </div>
                <div className="bg-primary/5 p-8 flex flex-col justify-center md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2021</h3>
                  </div>
                  <p className="text-lg mb-4">Expanding our reach</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos, Abuja</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our second year saw tremendous growth as we extended our mission to the nation's capital, touching more lives and building stronger community connections.
                  </p>
                </div>
              </div>
            </Card>

            {/* 2022 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-primary/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2022</h3>
                  </div>
                  <p className="text-lg mb-4">Strengthening our presence in the Southeast</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos, Enugu</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    With momentum from our early years, we solidified our footprint by incorporating Enugu into our outreach, deepening connections in the Southeast and empowering local volunteers to spread love on a broader scale.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src="images\anambra-lagos-2022-I.PNG"  alt="SLOTS 2022 outreach in Anambra and Lagos" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2022-II.PNG" alt="Volunteers distributing care packages in 2022" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2022-III.PNG" alt="Community engagement 2022" className="w-full h-full object-cover rounded col-span-2" />
                </div>
              </div>
            </Card>

            {/* 2023 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="grid grid-cols-2 gap-2 p-2 md:order-1">
                  <img src="images\anambra-lagos-2023-I.PNG" alt="SLOTS 2023 team celebrating with community" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2023-II.PNG" alt="Volunteers distributing love packages in 2023" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2023-III.PNG" alt="Community outreach 2023" className="w-full h-full object-cover rounded col-span-2" />
                </div>
                <div className="bg-primary/5 p-8 flex flex-col justify-center md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2023</h3>
                  </div>
                  <p className="text-lg mb-4">Reaching the South-South region</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos, Enugu, Port Harcourt</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our growth accelerated as we bridged regions by including Port Harcourt, bringing our message of compassion to the South-South and forging new partnerships that amplified our impact nationwide.
                  </p>
                </div>
              </div>
            </Card>

            {/* 2024 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-primary/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2024</h3>
                  </div>
                  <p className="text-lg mb-4">Our most expansive year yet</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos, Benin, Abuja, Nasarawa</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Celebrating five years of transformation, we pushed boundaries further by reaching Benin and Nasarawa, uniting diverse communities in a powerful display of nationwide solidarity and enduring love.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src="images\anambra-lagos-2024-I.PNG"  alt="SLOTS 2024 outreach in Anambra and Lagos" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2024-II.PNG" alt="Volunteers distributing care packages in 2024" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2024-III.PNG" alt="Community engagement 2024" className="w-full h-full object-cover rounded col-span-2" />
                </div>
              </div>
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

    </div>
  );
}
