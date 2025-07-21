
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact Us", path: "/contact" },
];

const LANGUAGES = [
  { name: "English", code: "en" },
  { name: "हिंदी (Hindi)", code: "hi" },
  { name: "বাংলা (Bengali)", code: "bn" },
  { name: "తెలుగు (Telugu)", code: "te" },
  { name: "मराठी (Marathi)", code: "mr" },
  { name: "ગુજરાતી (Gujarati)", code: "gu" },
  { name: "ਪੰਜਾਬੀ (Punjabi)", code: "pa" },
  { name: "தமிழ் (Tamil)", code: "ta" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES[0]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white hover:opacity-90 transition-opacity">
            BHASHA NYAYA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-white/80 ${
                  location.pathname === item.path ? "text-white" : "text-white/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white">
                  {currentLanguage.name}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border border-white/20 text-white w-48">
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className={`cursor-pointer hover:bg-white/10 ${
                      currentLanguage.code === lang.code ? "bg-white/20" : ""
                    }`}
                    onClick={() => setCurrentLanguage(lang)}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 animate-fade-in"
          >
            <div className="flex flex-col space-y-4 pt-4 pb-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-white/10 ${
                    location.pathname === item.path ? "bg-white/20 text-white" : "text-white/70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-white/10">
                <div className="px-4 py-2 text-sm font-medium text-white/70">Language</div>
                <div className="max-h-48 overflow-y-auto scrollbar-hide">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      className={`w-full text-left text-sm px-4 py-2 hover:bg-white/10 transition-colors ${
                        currentLanguage.code === lang.code ? "bg-white/20 text-white" : "text-white/70"
                      }`}
                      onClick={() => {
                        setCurrentLanguage(lang);
                        setIsMenuOpen(false);
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
