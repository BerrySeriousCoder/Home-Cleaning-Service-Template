import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-secondary flex justify-center">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <Sparkles className="h-12 w-12 mx-auto text-primary" />
          <h2 className="text-4xl font-bold tracking-tight">
            Ready to Experience a Cleaner Home?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join our satisfied customers and discover the difference professional cleaning can make.
          </p>
          <Button
            size="lg"
            variant="default"
            className="text-lg"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}