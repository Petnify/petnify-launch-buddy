import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <img 
                src="/lovable-uploads/a2869fab-aacd-4621-b47e-55afca331bdc.png" 
                alt="Petnify Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Petnify
              </h1>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              All-in-one care for your beloved pets
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Track your pet's health, shop for essentials, book appointments, find your perfect companion, 
              and connect with fellow pet lovers—all in one beautiful app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-hero-foreground hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Early Access
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right content - App mockup placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-primary rounded-3xl shadow-elegant flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/a2869fab-aacd-4621-b47e-55afca331bdc.png" 
                      alt="App Preview" 
                      className="w-20 h-20 opacity-80"
                    />
                  </div>
                  <p className="text-xl font-semibold">App Preview</p>
                  <p className="text-sm opacity-80 mt-2">Coming Soon</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;