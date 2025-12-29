import { DollarSign, Clock, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

export function ValueProps() {
  const props = [
    {
      icon: DollarSign,
      title: "Reduce Downtime Costs",
      description: "Hydraulic failure costs an average of $2,500 per hour in downtime. EPHA protectors eliminate 85% of these incidents."
    },
    {
      icon: Clock,
      title: "Install in Minutes",
      description: "No need to disconnect hoses. Our patented snap-on design allows for installation in under 4 minutes per line."
    },
    {
      icon: ShieldCheck,
      title: "Extreme Durability",
      description: "Engineered to withstand temperatures from -40°F to 430°F and resist abrasion, UV rays, and chemical exposure."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, idx) => (
            <Card key={idx} className="border-none shadow-none hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 text-center md:text-left">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <prop.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary uppercase font-heading">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
