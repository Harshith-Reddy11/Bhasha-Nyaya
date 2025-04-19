
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProgressiveDisclosure } from "@/components/ui/progressive-disclosure";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <PageLayout title="Home" description="Your multilingual legal help platform">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-90"></div>
          {/* Abstract background patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight animate-fade-in">
            BHASHA NYAYA
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto text-bhasha-accent animate-fade-in">
            Your Rights. Your Language. Your Voice.
          </p>
          <p className="text-bhasha-muted max-w-3xl mx-auto mb-10 animate-fade-in">
            Breaking language barriers in legal assistance. We provide multilingual legal support 
            to help you understand and assert your rights regardless of the language you speak.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button asChild className="bg-white text-black hover:bg-white/90 py-6 px-8 rounded-2xl text-lg font-medium">
              <Link to="/contact">Get Legal Help</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 py-6 px-8 rounded-2xl text-lg font-medium hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Can Help
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors hover-scale">
              <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Multilingual Support</h3>
              <p className="text-bhasha-muted">
                Access legal assistance in multiple Indian languages. Our platform breaks language barriers to ensure everyone can understand their rights.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors hover-scale">
              <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Simplified Legal Information</h3>
              <p className="text-bhasha-muted">
                Complex legal concepts explained in simple language. We make legal information accessible and understandable for everyone.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors hover-scale">
              <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Assistance</h3>
              <p className="text-bhasha-muted">
                Get instant answers to your legal questions through our AI assistant. Voice and text support in multiple languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progressive Disclosure Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Understanding Your Legal Journey
          </h2>
          <p className="text-bhasha-muted text-center max-w-3xl mx-auto mb-12">
            Legal processes can be complex. We break them down into manageable steps to help you navigate your legal journey.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-black p-8 rounded-2xl border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Your Legal Path: Step {currentStep} of 3</h3>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    className="border-white/20 hover:bg-white/10"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    aria-label="Previous step"
                  >
                    Previous
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 hover:bg-white/10"
                    onClick={nextStep}
                    disabled={currentStep === 3}
                    aria-label="Next step"
                  >
                    Next
                  </Button>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="w-full bg-white/10 h-2 rounded-full">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="step-content-container">
                <div className={`step-content ${currentStep === 1 ? 'active' : ''}`}>
                  {currentStep === 1 && (
                    <div className="animate-fade-in">
                      <h4 className="text-lg font-medium mb-4">Identify Your Legal Issue</h4>
                      <p className="text-bhasha-muted mb-4">
                        Understanding what kind of legal issue you're facing is the first step. 
                        Our AI assistant can help classify your problem into the right legal category.
                      </p>
                      <ul className="space-y-2 text-bhasha-muted list-disc pl-5">
                        <li>Describe your situation in your preferred language</li>
                        <li>Our system will identify the relevant legal area</li>
                        <li>Get initial guidance on your specific issue</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className={`step-content ${currentStep === 2 ? 'active' : ''}`}>
                  {currentStep === 2 && (
                    <div className="animate-fade-in">
                      <h4 className="text-lg font-medium mb-4">Understand Your Rights</h4>
                      <p className="text-bhasha-muted mb-4">
                        Once we understand your issue, we'll explain your legal rights and options
                        in clear, simple language that you can understand.
                      </p>
                      <ul className="space-y-2 text-bhasha-muted list-disc pl-5">
                        <li>Learn about relevant laws in your state/region</li>
                        <li>Understand the timeframes and deadlines</li>
                        <li>Get explained the potential outcomes of your case</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className={`step-content ${currentStep === 3 ? 'active' : ''}`}>
                  {currentStep === 3 && (
                    <div className="animate-fade-in">
                      <h4 className="text-lg font-medium mb-4">Take Action</h4>
                      <p className="text-bhasha-muted mb-4">
                        With a clear understanding of your rights, we'll guide you through the
                        next practical steps, including connecting you with appropriate legal resources.
                      </p>
                      <ul className="space-y-2 text-bhasha-muted list-disc pl-5">
                        <li>Get document templates in your language</li>
                        <li>Connect with legal aid services near you</li>
                        <li>Follow guided workflows for common legal procedures</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-bhasha-muted text-center max-w-3xl mx-auto mb-12">
            Get answers to common questions about our legal assistance platform.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <ProgressiveDisclosure title="What languages do you support?">
              <p className="text-bhasha-muted">
                We currently support English, Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, 
                Malayalam, Punjabi, and several other Indian languages. We're continuously working to add more languages.
              </p>
            </ProgressiveDisclosure>
            
            <ProgressiveDisclosure title="Is your legal advice legally binding?">
              <p className="text-bhasha-muted">
                No, the information provided on our platform is for educational purposes only and should not be 
                construed as legal advice. We recommend consulting with a qualified lawyer for specific legal matters.
              </p>
            </ProgressiveDisclosure>
            
            <ProgressiveDisclosure title="How does your AI assistant work?">
              <p className="text-bhasha-muted">
                Our AI assistant uses natural language processing to understand your questions and provide 
                relevant legal information. It can communicate in multiple languages and can process both 
                text and voice inputs. The system is continually learning and improving based on interactions.
              </p>
            </ProgressiveDisclosure>
            
            <ProgressiveDisclosure title="Is my information kept confidential?">
              <p className="text-bhasha-muted">
                Yes, we take data privacy very seriously. All information shared on our platform is encrypted 
                and kept confidential. We do not share your personal information with third parties without 
                your explicit consent. Please refer to our Privacy Policy for more details.
              </p>
            </ProgressiveDisclosure>
            
            <ProgressiveDisclosure title="How can I get more personalized help?">
              <p className="text-bhasha-muted">
                While our AI assistant can provide general information, for personalized legal assistance, 
                you can use our Contact form to request a referral to legal aid services or lawyers in your area 
                who speak your preferred language.
              </p>
            </ProgressiveDisclosure>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Legal Help in Your Language?
          </h2>
          <p className="text-bhasha-muted max-w-3xl mx-auto mb-10">
            Our platform is designed to make legal information accessible to everyone, 
            regardless of the language they speak. Start your journey towards understanding 
            your legal rights today.
          </p>
          <Button asChild className="bg-white text-black hover:bg-white/90 py-6 px-8 rounded-2xl text-lg font-medium">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
