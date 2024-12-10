import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The attention to detail is remarkable. My home has never looked better, and their eco-friendly approach gives me peace of mind.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Professional, punctual, and thorough. They have transformed our office space into a spotless environment that impresses clients.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'As an interior designer, I appreciate their attention to detail. They treat each space with the care it deserves.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Real Estate Agent',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Their move-in/move-out cleaning service is exceptional. Makes my job easier when showing properties.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Flexible scheduling and consistent quality. They have become an essential part of maintaining our home.',
    rating: 5,
  },
  {
    name: 'Robert Kim',
    role: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Managing multiple properties is easier with their reliable service. Always professional and thorough.',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              What Our Clients Say
            </h1>
            <p className="text-lg text-gray-600">
              Don't just take our word for it — hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}