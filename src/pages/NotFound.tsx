
import { useLocation, Link } from "react-router-dom";
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
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="mb-8">
          <div className="text-9xl font-bold mb-2">404</div>
          <div className="h-0.5 w-16 bg-white mx-auto mb-8"></div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-bhasha-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-white text-black hover:bg-white/90 rounded-xl py-6 px-8 text-lg font-medium">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
