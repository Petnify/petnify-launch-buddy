import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="outline" 
          className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card className="border-0 shadow-elegant">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground">
              Terms of Service
            </CardTitle>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </CardHeader>
          
          <CardContent className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Petnify ("the Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Petnify is an all-in-one pet care platform that allows users to track their pet's health, 
                shop for pet products, book appointments, connect with other pet owners, and access adoption services. 
                The service is currently in development and will be available soon.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for providing accurate information about their pets and using the service 
                in accordance with applicable laws and regulations. Users must not use the service for any 
                illegal or unauthorized purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                use of the Service, to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Petnify shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at 
                <a href="mailto:legal@petnify.app" className="text-primary hover:text-primary/80 ml-1">
                  legal@petnify.app
                </a>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;