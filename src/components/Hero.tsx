import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Heart Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="h-16 w-16 md:h-20 md:w-20 text-primary animate-heart-pulse" fill="currentColor" />
              <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse-slow" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-balance">
            <span className="block text-foreground">Sharing Love</span>
            <span className="block text-primary mt-2">On The Streets</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            One Act at a Time. Bringing hope, dignity, and compassion to communities across Nigeria.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-base group">
              <Link to="/involve">
                Donate Now
                <Heart className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" fill="currentColor" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base group">
              <Link to="/work">
                See Our Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "1000s", label: "Meals Shared" },
              { value: "8", label: "States Reached" },
              { value: "5", label: "Years Impact" },
              { value: "Feb 14", label: "Annual Event" },
            ].map((stat, index) => (
              <div
                key={index}
                className="space-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
