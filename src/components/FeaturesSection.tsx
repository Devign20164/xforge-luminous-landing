
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    title: "Premium Materials",
    description: "Crafted from aerospace-grade materials for durability and a premium feel that stands the test of time.",
    delay: "0"
  },
  {
    title: "Advanced Technology",
    description: "Featuring next-generation heating elements and precise temperature control for the perfect experience.",
    delay: "100"
  },
  {
    title: "Elegant Design",
    description: "Sleek, minimalist design that fits perfectly in your hand and makes a statement wherever you go.",
    delay: "200"
  },
  {
    title: "Long Battery Life",
    description: "Our proprietary battery technology ensures all-day usage without compromising on performance.",
    delay: "300"
  },
  {
    title: "Smart Controls",
    description: "Intuitive touch controls and optional app connectivity for a personalized vaping experience.",
    delay: "400"
  },
  {
    title: "Versatile Compatibility",
    description: "Compatible with a wide range of cartridges and accessories for endless customization.",
    delay: "500"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-white to-xforge-teal/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-xforge-teal/10 text-xforge-teal rounded-full text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-xforge-dark mb-4">
            Why Choose <span className="text-xforge-teal">XForge</span>
          </h2>
          <p className="text-xforge-dark/70 max-w-2xl mx-auto text-balance">
            Engineered with precision and designed for the discerning user, 
            XForge combines cutting-edge technology with elegant aesthetics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`glass-card opacity-0 animate-fade-in`} style={{animationDelay: `${feature.delay}ms`}}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-xforge-teal/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-xforge-teal rounded-full"></div>
                </div>
                <CardTitle className="text-xl text-xforge-dark">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xforge-dark/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="w-full max-w-4xl mx-auto p-8 glass rounded-2xl opacity-0 animate-fade-in animate-delay-500">
            <h3 className="text-2xl font-bold text-xforge-dark mb-4">
              Uncompromising Quality
            </h3>
            <p className="text-xforge-dark/70 mb-6 text-balance">
              Every XForge device undergoes rigorous quality testing to ensure it meets our exacting standards.
              We stand behind our products with a comprehensive warranty and dedicated customer support.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-white/50">
                <p className="font-bold text-xforge-teal">99.8%</p>
                <p className="text-sm text-xforge-dark/70">Quality Pass Rate</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50">
                <p className="font-bold text-xforge-teal">2 Years</p>
                <p className="text-sm text-xforge-dark/70">Warranty Coverage</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50">
                <p className="font-bold text-xforge-teal">24/7</p>
                <p className="text-sm text-xforge-dark/70">Support Team</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50">
                <p className="font-bold text-xforge-teal">48 Hours</p>
                <p className="text-sm text-xforge-dark/70">Replacement Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
