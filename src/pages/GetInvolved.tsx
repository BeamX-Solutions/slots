import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, Handshake, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function GetInvolved() {
  const { toast } = useToast();

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your generosity!",
      description: "Donation processing will be available soon. We'll contact you shortly.",
    });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application received!",
      description: "We'll review your volunteer application and get in touch soon.",
    });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership inquiry received!",
      description: "Our team will reach out to discuss collaboration opportunities.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>Get Involved</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Join us in spreading love and making a tangible difference in communities
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4 animate-heart-pulse" fill="currentColor" />
              <h2 className="mb-4">Make a Donation</h2>
              <p className="text-xl text-muted-foreground">
                Support our mission to share love on the streets. Your donation contributes directly to our upcoming SLOTS' 14 events.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Bank Transfer Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Bank Details */}
                <div className="space-y-4 p-6 bg-muted/30 rounded-lg">
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted-foreground">Account Name:</span>
                    <span className="font-semibold">Slots Humanitarian Initiatives</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted-foreground">Account Number:</span>
                    <span className="font-semibold text-lg">1306638368</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Bank:</span>
                    <span className="font-semibold">Providus Bank</span>
                  </div>
                </div>

                {/* Donation Options */}
                <div className="space-y-4 mt-6">
                  <h3 className="font-semibold text-lg">Ways to Donate:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">1</span>
                      </div>
                      <p className="text-muted-foreground">
                        Donate One Hundred Thousand Naira (₦100,000) or more to support the project
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">2</span>
                      </div>
                      <p className="text-muted-foreground">
                        Sponsor a specific aspect of the project, such as meals, supplies, or transportation
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact for Donations */}
                <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    For inquiries or to confirm your donation, please contact us at{" "}
                    <a href="tel:+2349041401167" className="text-primary font-semibold hover:underline">
                      +234 904 140 1167
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="mb-4">Become a Volunteer</h2>
              <p className="text-xl text-muted-foreground">
                Give your time and energy to serve alongside us
              </p>
            </div>

            <Card>
              <CardContent className="pt-8">
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="vol-name">Full Name</Label>
                      <Input id="vol-name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vol-email">Email</Label>
                      <Input id="vol-email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="vol-phone">Phone Number</Label>
                      <Input id="vol-phone" type="tel" placeholder="+234 XXX XXX XXXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vol-location">Location</Label>
                      <Select>
                        <SelectTrigger id="vol-location">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja</SelectItem>
                          <SelectItem value="anambra">Anambra</SelectItem>
                          <SelectItem value="benin">Benin</SelectItem>
                          <SelectItem value="nasarawa">Nasarawa</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vol-skills">Skills & Interests</Label>
                    <Textarea
                      id="vol-skills"
                      placeholder="Tell us about your skills, interests, and how you'd like to contribute..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Users className="mr-2 h-5 w-5" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="mb-4">Partner With Us</h2>
              <p className="text-xl text-muted-foreground">
                Corporate partnerships and collaborations for greater impact
              </p>
            </div>

            <Card>
              <CardContent className="pt-8">
                <form onSubmit={handlePartnerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="org-name">Organization Name</Label>
                      <Input id="org-name" placeholder="Your organization" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Person</Label>
                      <Input id="contact-name" placeholder="Full name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="org-email">Email</Label>
                      <Input id="org-email" type="email" placeholder="contact@organization.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-type">Partnership Type</Label>
                      <Select>
                        <SelectTrigger id="org-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate Sponsorship</SelectItem>
                          <SelectItem value="ngo">NGO Collaboration</SelectItem>
                          <SelectItem value="events">Event Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnership-details">Partnership Proposal</Label>
                    <Textarea
                      id="partnership-details"
                      placeholder="Describe how you'd like to partner with SLOTS..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Handshake className="mr-2 h-5 w-5" />
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section id="events" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">
              Join us at our next community gathering
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Event calendar coming soon. Check back for volunteer opportunities and community events.
              </p>
              <Button variant="outline">
                Subscribe for Event Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
