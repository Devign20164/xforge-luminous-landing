
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Your account has been created. Welcome to XForge!",
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome back!",
      description: "You have successfully logged in.",
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-xforge-dark">
              <span className="text-xforge-teal">X</span>Forge
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-xforge-dark hover:text-xforge-teal transition-colors">Features</a>
            <a href="#about" className="text-xforge-dark hover:text-xforge-teal transition-colors">About</a>
            <a href="#campaign" className="text-xforge-dark hover:text-xforge-teal transition-colors">Campaign</a>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-xforge-teal hover:bg-xforge-teal/90 text-xforge-dark button-shine">
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login" className="space-y-4">
                    <DialogHeader>
                      <DialogTitle>Welcome back</DialogTitle>
                      <DialogDescription>
                        Sign in to your account to continue
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email-login">Email</Label>
                        <Input id="email-login" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password-login">Password</Label>
                        <Input id="password-login" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-xforge-teal hover:bg-xforge-teal/90 text-xforge-dark">
                        Sign In
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="register" className="space-y-4">
                    <DialogHeader>
                      <DialogTitle>Create an account</DialogTitle>
                      <DialogDescription>
                        Join XForge today and experience premium vaping
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-xforge-teal hover:bg-xforge-teal/90 text-xforge-dark">
                        Create Account
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-xforge-dark focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 text-white hover:text-xforge-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-white hover:text-xforge-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#campaign" 
              className="block px-3 py-2 text-white hover:text-xforge-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campaign
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="w-full mt-2 bg-xforge-teal hover:bg-xforge-teal/90 text-xforge-dark button-shine"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login" className="space-y-4">
                    <DialogHeader>
                      <DialogTitle>Welcome back</DialogTitle>
                      <DialogDescription>
                        Sign in to your account to continue
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email-mobile">Email</Label>
                        <Input id="email-mobile" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password-mobile">Password</Label>
                        <Input id="password-mobile" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-xforge-teal hover:bg-xforge-teal/90 text-xforge-dark">
                        Sign In
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="register" className="space-y-4">
                    <DialogHeader>
                      <DialogTitle>Create an account</DialogTitle>
                      <DialogDescription>
                        Join XForge today and experience premium vaping
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name-mobile">Full Name</Label>
                        <Input id="name-mobile" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-reg-mobile">Email</Label>
                        <Input id="email-reg-mobile" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password-reg-mobile">Password</Label>
                        <Input id="password-reg-mobile" type="password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password-mobile">Confirm Password</Label>
                        <Input id="confirm-password-mobile" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-xforge-teal hover:bg-xforge-teal/90 text-xforge-dark">
                        Create Account
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
