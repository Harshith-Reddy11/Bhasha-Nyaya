
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [legalIssue, setLegalIssue] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("English");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setLegalIssue("");
      setMessage("");
    }, 1500);
  };

  const LANGUAGES = [
    "English",
    "हिंदी (Hindi)",
    "বাংলা (Bengali)",
    "తెలుగు (Telugu)",
    "मराठी (Marathi)",
    "ગુજરાતી (Gujarati)",
    "ਪੰਜਾਬੀ (Punjabi)",
    "தமிழ் (Tamil)",
    "ಕನ್ನಡ (Kannada)",
    "മലയാളം (Malayalam)",
  ];

  const LEGAL_ISSUES = [
    "Consumer Rights",
    "Property Dispute",
    "Family Law",
    "Employment Issue",
    "Criminal Matter",
    "Tenant Rights",
    "Immigration",
    "Business Legal Issue",
    "Government Benefits",
    "Other Legal Issue"
  ];

  return (
    <PageLayout title="Contact Us" description="Get in touch with our team">
      {/* Contact Hero Section */}
      <section className="pt-40 pb-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-bhasha-accent mb-8 animate-fade-in">
              Need legal help? Reach out to our team for assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-bhasha-muted mb-8">
                Have a legal question or need assistance with our platform? 
                Our team is here to help. Fill out the form and we'll get back 
                to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="text-bhasha-muted">123 Legal Avenue, Suite 456</p>
                    <p className="text-bhasha-muted">New Delhi, India 110001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-bhasha-muted">contact@bhashanyaya.org</p>
                    <p className="text-bhasha-muted">support@bhashanyaya.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-bhasha-muted">+91 1234567890</p>
                    <p className="text-bhasha-muted">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-white/5 rounded-2xl p-8 text-center animate-fade-in">
                  <div className="h-16 w-16 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto mb-6">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-bhasha-muted mb-6">
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-black rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="legal-issue" className="block text-sm font-medium mb-2">
                          Legal Issue <span className="text-red-500">*</span>
                        </label>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              id="legal-issue"
                              variant="outline"
                              className="w-full justify-between border-white/20 bg-white/5 hover:bg-white/10 text-left font-normal"
                            >
                              {legalIssue || "Select your legal issue"}
                              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-full min-w-[240px] bg-black border border-white/20">
                            {LEGAL_ISSUES.map((issue) => (
                              <DropdownMenuItem
                                key={issue}
                                className="cursor-pointer hover:bg-white/10"
                                onClick={() => setLegalIssue(issue)}
                              >
                                {issue}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      
                      <div>
                        <label htmlFor="language" className="block text-sm font-medium mb-2">
                          Preferred Language
                        </label>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              id="language"
                              variant="outline"
                              className="w-full justify-between border-white/20 bg-white/5 hover:bg-white/10 text-left font-normal"
                            >
                              {preferredLanguage}
                              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-full min-w-[240px] bg-black border border-white/20 max-h-56 overflow-y-auto">
                            {LANGUAGES.map((language) => (
                              <DropdownMenuItem
                                key={language}
                                className="cursor-pointer hover:bg-white/10"
                                onClick={() => setPreferredLanguage(language)}
                              >
                                {language}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 text-white resize-none"
                        placeholder="Describe your legal issue or question..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="consent"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-white/20 bg-white/5 text-white focus:ring-white/30"
                      />
                      <label htmlFor="consent" className="ml-2 block text-sm text-bhasha-muted">
                        I consent to having my information stored and processed to receive legal assistance.
                      </label>
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black hover:bg-white/90 py-3"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </div>
                        ) : "Send Message"}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-2xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-medium hover:bg-white/10 transition-colors"
                >
                  How quickly will I receive a response?
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-bhasha-muted">
                    We aim to respond to all inquiries within 24-48 hours during business days. 
                    For urgent matters, please indicate this in your message and we'll prioritize your request.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-2xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-medium hover:bg-white/10 transition-colors"
                >
                  Is there a fee for your services?
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                </button>
              </div>
              
              <div className="bg-white/5 rounded-2xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-medium hover:bg-white/10 transition-colors"
                >
                  Can you provide representation in court?
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                </button>
              </div>
              
              <div className="bg-white/5 rounded-2xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-medium hover:bg-white/10 transition-colors"
                >
                  What languages do your team members speak?
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
