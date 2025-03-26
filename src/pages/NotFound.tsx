
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-xforge-teal/5 p-4">
      <div className="glass rounded-2xl p-10 max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-xforge-teal/10 rounded-full flex items-center justify-center mx-auto">
          <p className="text-4xl font-bold text-xforge-teal">404</p>
        </div>
        <h1 className="text-2xl font-bold text-xforge-dark">Page Not Found</h1>
        <p className="text-xforge-dark/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-xforge-teal hover:bg-xforge-teal/90 text-xforge-dark button-shine">
          <a href="/">Return Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
