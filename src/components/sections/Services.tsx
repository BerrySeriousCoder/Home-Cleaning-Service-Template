import { SectionHeader } from "./section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Regular Cleaning",
    description: "Comprehensive cleaning service for maintaining a pristine home environment",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Deep Cleaning",
    description: "Thorough deep cleaning service targeting hard-to-reach areas and stubborn dirt",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Move In/Out",
    description: "Specialized cleaning service for moving transitions and property turnover",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
  },
];

export function Services() {
  return (
    <section className="py-24 flex justify-center">
      <div className="container px-4">
        <SectionHeader
          title="Our Services"
          subtitle="Tailored cleaning solutions for every need"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden border-none">
              <div className="aspect-[4/3] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="ghost" className="group text-white ">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}