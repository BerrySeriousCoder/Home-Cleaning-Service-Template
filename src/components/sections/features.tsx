'use client'

import { Check, Shield, Clock, Sparkles } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from './section-header'
import Image from '../../assets/homecleaningthree.jpg'
import ImageTwo from '../../assets/homecleaning.jpg'
import ImageThree from '../../assets/homecleaningtwo.jpg'
import ImageFour from   '../../assets/Imagefour.jpg'
import { motion } from 'framer-motion'

const features = [
  {
    title: "Premium Quality",
    description: "Experience the highest standards of cleanliness with our expert team",
    icon: Sparkles,
    image: Image,
  },
  {
    title: "Trusted & Vetted",
    description: "All our cleaning professionals are background checked and certified",
    icon: Shield,
    image: ImageTwo,
  },
  {
    title: "Flexible Schedule",
    description: "Book our services at your convenience, 7 days a week",
    icon: Clock,
    image: ImageThree,
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Your complete satisfaction is our top priority",
    icon: Check,
    image: ImageFour,
  },
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-background/80 backdrop-blur-sm h-full">
      <CardContent className="p-0">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img
            src={feature.image}
            alt={feature.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent group-hover:from-background/60 transition-colors duration-300" />
          <feature.icon className="absolute bottom-4 right-4 h-10 w-10 text-primary bg-background rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature.description}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Experience the difference with our premium cleaning services"
          className="mb-16 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

