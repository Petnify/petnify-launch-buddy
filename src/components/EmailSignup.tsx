import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Here you would integrate with your email service (Mailchimp, Brevo, etc.)
    setIsSubmitted(true);
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll notify you when Petnify launches!",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-0 shadow-elegant bg-card/95 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            {!isSubmitted ? (
              <>
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                  <Mail className="h-10 w-10 text-hero-foreground" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Be the First to Know
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Join thousands of pet lovers on our waitlist and get exclusive early access 
                  to Petnify when we launch.
                </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 text-base border-primary/20 focus:border-primary"
                  />
                  <Button 
                    type="submit" 
                    className="bg-gradient-hero text-hero-foreground hover:shadow-glow transition-all duration-300 h-12 px-8 font-semibold"
                  >
                    Get Notified
                  </Button>
                </form>
                
                <p className="text-sm text-muted-foreground mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <Check className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Welcome to the Petnify Family!
                </h3>
                <p className="text-muted-foreground">
                  You're all set! We'll send you updates as we get closer to launch.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Sign Up Another Email
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmailSignup;