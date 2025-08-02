import { Heart, ShoppingBag, Calendar, Users, MessageCircle, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "Health & Wellness Tracking",
    description: "Monitor your pet's food intake, water consumption, exercise, and health metrics with detailed analytics."
  },
  {
    icon: ShoppingBag,
    title: "Pet Product Shopping",
    description: "Discover and purchase quality pet food, toys, accessories, and essentials from trusted brands."
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Easily schedule vet visits, grooming sessions, and training appointments with local professionals."
  },
  {
    icon: Heart,
    title: "Adoption & Breeding",
    description: "Find your perfect companion through our adoption network or connect with responsible breeders."
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Connect with fellow pet owners, share experiences, get advice, and build lasting friendships."
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Access certified veterinarians, trainers, and pet care specialists for professional guidance."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything Your Pet Needs
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From daily care tracking to finding the perfect companion, Petnify brings together 
            all aspects of pet ownership in one comprehensive platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-elegant hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;