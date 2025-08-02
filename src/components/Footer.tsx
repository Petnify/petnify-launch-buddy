import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/a2869fab-aacd-4621-b47e-55afca331bdc.png" 
                alt="Petnify Logo" 
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-bold">Petnify</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              All-in-one care for your beloved pets. Coming soon to make pet ownership 
              easier and more enjoyable than ever.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Coming Soon */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Coming Soon</h4>
            <p className="text-primary-foreground/80">
              We're working hard to bring Petnify to life. Join our waitlist to be 
              the first to know when we launch!
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Petnify. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-warm fill-current" />
              <span>for pet lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;