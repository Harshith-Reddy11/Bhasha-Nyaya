
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "../chatbot/Chatbot";
import FontSizeControl from "../accessibility/FontSizeControl";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({ 
  children, 
  title, 
  description 
}: PageLayoutProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | BHASHA NYAYA`;
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <div className="fixed top-24 right-6 z-40">
        <FontSizeControl />
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}
