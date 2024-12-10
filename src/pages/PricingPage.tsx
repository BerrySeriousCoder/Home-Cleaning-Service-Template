import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const plans = [
  {
    name: 'Basic Clean',
    price: 129,
    description: 'Perfect for regular maintenance cleaning',
    features: [
      'Weekly or bi-weekly cleaning',
      'Basic dusting and vacuuming',
      'Bathroom and kitchen cleaning',
      'Floor cleaning',
      'Up to 2 bedrooms, 1 bathroom',
    ],
  },
  {
    name: 'Deep Clean',
    price: 249,
    description: 'Comprehensive cleaning for a spotless home',
    features: [
      'All Basic Clean features',
      'Deep carpet cleaning',
      'Window cleaning',
      'Cabinet organization',
      'Up to 4 bedrooms, 2 bathrooms',
      'Appliance cleaning',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: 399,
    description: 'The ultimate luxury cleaning experience',
    features: [
      'All Deep Clean features',
      'Custom cleaning solutions',
      'Eco-friendly products',
      'Priority scheduling',
      'Unlimited rooms and bathrooms',
      'Seasonal deep cleaning',
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600">
            Choose the perfect cleaning plan for your home
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.featured
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-border'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 ml-2">per clean</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.featured ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}