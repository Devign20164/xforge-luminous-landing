
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-white via-white to-xforge-teal/10 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-xforge-teal/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 opacity-0 animate-fade-in">
          <div>
            <div className="inline-block px-3 py-1 bg-xforge-teal/10 text-xforge-teal rounded-full text-sm font-medium mb-4">
              Introducing XForge
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-xforge-dark text-balance">
              The Future of <span className="text-xforge-teal">Premium</span> Vaping
            </h1>
          </div>
          <p className="text-lg text-xforge-dark/80 max-w-xl text-balance">
            Experience unmatched precision, modern design, and versatility with XForge. 
            Redefining the art of vaping with premium materials and cutting-edge technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-xforge-teal hover:bg-xforge-teal/90 text-xforge-dark px-6 py-6 text-lg button-shine">
              Shop Now
            </Button>
            <Button variant="outline" className="border-xforge-teal text-xforge-dark hover:bg-xforge-teal/10 px-6 py-6 text-lg">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <p className="text-sm text-xforge-dark/80">
              <span className="font-bold">500+</span> satisfied customers
            </p>
          </div>
        </div>
        
        <div className="relative h-[500px] opacity-0 animate-fade-in animate-delay-300">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-xforge-teal/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-white to-xforge-teal/30 rounded-full flex items-center justify-center glass shadow-lg">
              <div className="w-32 h-56 md:w-40 md:h-64 bg-xforge-dark rounded-3xl relative overflow-hidden">
                <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-xforge-teal animate-pulse-subtle"></div>
                <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-10 h-1 rounded-full bg-xforge-gray"></div>
                <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[40%] rounded-lg bg-black/20 flex items-center justify-center">
                  <div className="w-4 h-12 bg-xforge-teal/80 rounded-full animate-pulse-subtle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-xforge-lightgray/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in animate-delay-500">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-xforge-dark">2x</h3>
            <p className="text-xforge-lightgray">Battery Life</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-xforge-dark">99%</h3>
            <p className="text-xforge-lightgray">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-xforge-dark">24/7</h3>
            <p className="text-xforge-lightgray">Support</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-xforge-dark">500+</h3>
            <p className="text-xforge-lightgray">Flavor Options</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
