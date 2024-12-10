import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative w-svw min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative flex min-h-screen items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Experience the Art of Clean Living
          </h1>
          <p className="mt-6 text-lg leading-8  text-gray-100">
            Elevate your home with our premium cleaning services. We bring luxury,
            precision, and care to every corner of your space.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="text-lg">
              
              <Link to="/schedule">Book Now</Link>
            </Button>
           
          </div>
        </div>
      </div>
    </div>
  );
}