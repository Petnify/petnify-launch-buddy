import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
              Privacy Policy
            </CardTitle>
            <p className="text-muted-foreground">Last updated: August 2025</p>
          </CardHeader>
          
          <CardContent className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                add pet profiles, or contact us for support. This may include your name, email address, 
                and information about your pets including their health data, feeding schedules, and photos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and personalize your experience. Pet health data is used to 
                provide insights and recommendations for your pet's wellbeing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information with veterinarians and pet service providers only when you explicitly choose 
                to book appointments or services through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information 
                and your pet's data. All data is encrypted in transit and at rest, and we regularly 
                review our security practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, update, or delete your personal information at any time. 
                You can also opt out of certain communications and control how your information is shared 
                within the Petnify community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Petnify is not intended for use by children under 13. We do not knowingly collect 
                personal information from children under 13 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at 
                <a href="mailto:privacy@petnify.app" className="text-primary hover:text-primary/80 ml-1">
                  privacy@petnify.app
                </a>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;