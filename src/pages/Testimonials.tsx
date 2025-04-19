
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

// Mock testimonial data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Uttar Pradesh",
    language: "हिंदी (Hindi)",
    content: "The Bhasha Nyaya platform helped me understand my rights as a tenant when my landlord was trying to unfairly evict me. Being able to get legal information in Hindi made all the difference. I was able to stand up for myself and reach a fair resolution.",
    image: null
  },
  {
    id: 2,
    name: "Priya Mehta",
    location: "Gujarat",
    language: "ગુજરાતી (Gujarati)",
    content: "As a small business owner, I was struggling with understanding consumer protection laws. The AI assistant explained everything in Gujarati and helped me create compliant policies for my store. The voice input feature was especially helpful since I could ask questions while working.",
    image: null
  },
  {
    id: 3,
    name: "Lakshmi Narayanan",
    location: "Tamil Nadu",
    language: "தமிழ் (Tamil)",
    content: "When I faced workplace discrimination, I felt helpless until I found Bhasha Nyaya. The step-by-step guidance in Tamil helped me understand my legal options and how to document incidents. With this knowledge, I was able to file a formal complaint and the situation was addressed.",
    image: null
  },
  {
    id: 4,
    name: "Mohammed Farhan",
    location: "Kerala",
    language: "മലയാളം (Malayalam)",
    content: "I was involved in a property dispute and needed to understand the legal process. Being able to upload documents and get explanations in Malayalam was invaluable. The platform helped me prepare for mediation and we were able to resolve the issue without going to court.",
    image: null
  },
  {
    id: 5,
    name: "Samina Begum",
    location: "West Bengal",
    language: "বাংলা (Bengali)",
    content: "As a single mother navigating child support issues, I felt overwhelmed by the legal system. Bhasha Nyaya's resources in Bengali helped me understand my rights and the correct procedures to follow. The simplified explanations of complex legal terms made a huge difference.",
    image: null
  },
  {
    id: 6,
    name: "Arjun Singh",
    location: "Punjab",
    language: "ਪੰਜਾਬੀ (Punjabi)",
    content: "After an accident, I needed to understand how to file an insurance claim. Getting this information in Punjabi made the process so much clearer. The chatbot guided me through each step and helped me avoid common mistakes that could have delayed my claim.",
    image: null
  }
];

export default function Testimonials() {
  const [filter, setFilter] = useState("all");

  const filteredTestimonials = filter === "all" 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.language.includes(filter));

  return (
    <PageLayout title="Testimonials" description="Success stories from our users">
      {/* Testimonials Hero Section */}
      <section className="pt-40 pb-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Success Stories
            </h1>
            <p className="text-xl text-bhasha-accent mb-8 animate-fade-in">
              Real people, real impact: See how BHASHA NYAYA is making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Filters */}
      <section className="py-10 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              className={filter !== "all" ? "border-white/20 hover:bg-white/10" : "bg-white text-black hover:bg-white/90"}
              onClick={() => setFilter("all")}
            >
              All Languages
            </Button>
            <Button 
              variant={filter === "Hindi" ? "default" : "outline"}
              className={filter !== "Hindi" ? "border-white/20 hover:bg-white/10" : "bg-white text-black hover:bg-white/90"}
              onClick={() => setFilter("Hindi")}
            >
              Hindi
            </Button>
            <Button 
              variant={filter === "Tamil" ? "default" : "outline"}
              className={filter !== "Tamil" ? "border-white/20 hover:bg-white/10" : "bg-white text-black hover:bg-white/90"}
              onClick={() => setFilter("Tamil")}
            >
              Tamil
            </Button>
            <Button 
              variant={filter === "Bengali" ? "default" : "outline"}
              className={filter !== "Bengali" ? "border-white/20 hover:bg-white/10" : "bg-white text-black hover:bg-white/90"}
              onClick={() => setFilter("Bengali")}
            >
              Bengali
            </Button>
            <Button 
              variant={filter === "Gujarati" ? "default" : "outline"}
              className={filter !== "Gujarati" ? "border-white/20 hover:bg-white/10" : "bg-white text-black hover:bg-white/90"}
              onClick={() => setFilter("Gujarati")}
            >
              Gujarati
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-bhasha-muted">No testimonials found for the selected language.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white/5 rounded-2xl p-6 hover-scale"
                >
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <svg className="h-6 w-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-bhasha-muted">{testimonial.location}</p>
                      <p className="text-xs text-bhasha-muted mt-1">{testimonial.language}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <svg className="h-8 w-8 text-white/10 absolute -top-4 -left-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-bhasha-muted text-sm relative z-10 pl-4">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Share Your Story
            </h2>
            <p className="text-bhasha-muted mb-8">
              Has BHASHA NYAYA helped you understand or resolve a legal issue? 
              We'd love to hear about your experience. Your story could inspire 
              others facing similar challenges.
            </p>
            <Button className="bg-white text-black hover:bg-white/90 rounded-xl py-3 px-6">
              Submit Your Testimonial
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">12,000+</div>
              <p className="text-bhasha-muted">Users Helped</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">14</div>
              <p className="text-bhasha-muted">Languages Supported</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-bhasha-muted">Resolution Rate</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">28</div>
              <p className="text-bhasha-muted">States Reached</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
