
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const CampaignSection = () => {
  const [promoCode, setPromoCode] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim() || !email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter both your email and promo code.",
        variant: "destructive",
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: `Your promo code ${promoCode} has been successfully redeemed.`,
      });
      setPromoCode('');
      setEmail('');
    }, 1000);
  };

  return (
    <section id="campaign" className="py-20 px-4 bg-xforge-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(2,236,207,0.1),transparent_70%)] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(2,236,207,0.05),transparent_70%)] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-xforge-teal/20 text-xforge-teal rounded-full text-sm font-medium mb-4">
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Exclusive <span className="text-xforge-teal">Promotions</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-balance">
            Enter your promo code to unlock special discounts, free accessories, or limited edition products.
            Join the XForge community and elevate your vaping experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in">
            <div className="glass-dark rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Redeem Your Promo Code</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="promo-code" className="block text-sm font-medium text-white/70 mb-2">Promo Code</label>
                  <Input 
                    id="promo-code" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter your promo code" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required 
                  />
                </div>
                <Button type="submit" className="w-full bg-xforge-teal hover:bg-xforge-teal/90 text-xforge-dark button-shine">
                  Redeem Now
                </Button>
              </form>
            </div>
            
            <div className="mt-8 p-6 rounded-xl border border-white/10 bg-white/5">
              <p className="text-white/80 text-sm">
                By redeeming a promo code, you agree to our terms and conditions. 
                Promotional offers cannot be combined with other discounts. 
                Limited to one redemption per customer.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-300">
            <div className="glass-dark rounded-xl p-6 border border-xforge-teal/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-xforge-teal/10 flex items-center justify-center">
                  <div className="w-6 h-6 bg-xforge-teal rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">New Customer Discount</h4>
                  <p className="text-white/70 mb-4">
                    Use code <span className="text-xforge-teal font-bold">XFORGENEW</span> for 15% off your first order.
                  </p>
                  <div className="w-full bg-white/10 h-1 rounded-full">
                    <div className="bg-xforge-teal h-1 rounded-full w-[25%]"></div>
                  </div>
                  <p className="text-xs text-white/50 mt-2">25% of codes redeemed</p>
                </div>
              </div>
            </div>
            
            <div className="glass-dark rounded-xl p-6 border border-xforge-teal/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-xforge-teal/10 flex items-center justify-center">
                  <div className="w-6 h-6 bg-xforge-teal rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Free Accessory Pack</h4>
                  <p className="text-white/70 mb-4">
                    Use code <span className="text-xforge-teal font-bold">XFORGEPRO</span> to receive a free accessory pack with any Pro model purchase.
                  </p>
                  <div className="w-full bg-white/10 h-1 rounded-full">
                    <div className="bg-xforge-teal h-1 rounded-full w-[65%]"></div>
                  </div>
                  <p className="text-xs text-white/50 mt-2">65% of codes redeemed</p>
                </div>
              </div>
            </div>
            
            <div className="glass-dark rounded-xl p-6 border border-xforge-teal/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-xforge-teal/10 flex items-center justify-center">
                  <div className="w-6 h-6 bg-xforge-teal rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Limited Edition XForge</h4>
                  <p className="text-white/70 mb-4">
                    Use code <span className="text-xforge-teal font-bold">XFORGELIMITED</span> for early access to our limited edition models.
                  </p>
                  <div className="w-full bg-white/10 h-1 rounded-full">
                    <div className="bg-xforge-teal h-1 rounded-full w-[85%]"></div>
                  </div>
                  <p className="text-xs text-white/50 mt-2">85% of codes redeemed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
