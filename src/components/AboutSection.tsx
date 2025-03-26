
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-xforge-teal/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-xforge-teal/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-xforge-teal/10 text-xforge-teal rounded-full text-sm font-medium mb-4">
              About XForge
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-xforge-dark mb-6 text-balance">
              Crafted with Precision, <span className="text-xforge-teal">Designed for Excellence</span>
            </h2>
            <div className="space-y-6 text-xforge-dark/80">
              <p>
                At XForge, we believe that vaping should be an elegant, refined experience. 
                Our journey began in 2018 with a simple mission: to create the most sophisticated, 
                high-performance vaping devices on the market.
              </p>
              <p>
                Every XForge product represents countless hours of research, development, and precision 
                engineering. We source only the finest materials and components, ensuring each device 
                not only performs flawlessly but becomes a statement piece you're proud to carry.
              </p>
              <p>
                Our team of designers and engineers bring decades of experience from luxury consumer 
                electronics, creating products that seamlessly blend form and function. The result is 
                a vaping experience that's unmatched in quality, reliability, and sophistication.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 glass-card">
                <p className="font-bold text-lg text-xforge-dark">Innovative</p>
                <p className="text-sm text-xforge-dark/70">Leading the industry with cutting-edge technology</p>
              </div>
              <div className="p-4 glass-card">
                <p className="font-bold text-lg text-xforge-dark">Sustainable</p>
                <p className="text-sm text-xforge-dark/70">Committed to eco-friendly practices and materials</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-xforge-teal/20 rounded-full blur-3xl"></div>
              <div className="glass rounded-2xl overflow-hidden relative z-10">
                <div className="aspect-square bg-gradient-to-br from-xforge-teal/20 to-xforge-dark/20 flex items-center justify-center">
                  <div className="w-40 h-64 bg-xforge-dark rounded-3xl relative overflow-hidden">
                    <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-xforge-teal animate-pulse-subtle"></div>
                    <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-10 h-1 rounded-full bg-xforge-gray"></div>
                    <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[40%] rounded-lg bg-black/20 flex flex-col items-center justify-center">
                      <div className="w-4 h-12 bg-xforge-teal/80 rounded-full animate-pulse-subtle"></div>
                      <p className="text-white text-[8px] mt-2">XForge Pro</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 z-20">
                <div className="glass p-4 rounded-xl">
                  <p className="text-sm font-bold text-xforge-dark">Est. 2018</p>
                  <p className="text-xs text-xforge-dark/70">Redefining Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
