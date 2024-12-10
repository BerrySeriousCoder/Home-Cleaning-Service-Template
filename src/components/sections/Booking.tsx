import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function Booking() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section id="schedule" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Schedule Your Cleaning
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Book your preferred cleaning service at a time that works best for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <Label htmlFor="service">Service Type</Label>
                <Select>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deep">Deep Cleaning</SelectItem>
                    <SelectItem value="regular">Regular Cleaning</SelectItem>
                    <SelectItem value="move">Move-In/Move-Out</SelectItem>
                    <SelectItem value="specialized">Specialized Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Select Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>

              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <Select>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                    <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>

              <div>
                <Label htmlFor="notes">Special Requirements</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific areas or requirements we should know about?"
                  className="h-32"
                />
              </div>

              <Button className="w-full" size="lg">
                Book Cleaning Service
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}