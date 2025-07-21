
import PageLayout from "@/components/layout/PageLayout";
import { ProgressiveDisclosure } from "@/components/ui/progressive-disclosure";

export default function About() {
  return (
    <PageLayout title="About Us" description="Learn about BHASHA NYAYA and our mission">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About BHASHA NYAYA
            </h1>
            <p className="text-xl text-bhasha-accent mb-8 animate-fade-in">
              Breaking language barriers in legal assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="h-1 w-20 bg-white mb-6"></div>
              <p className="text-bhasha-muted mb-4">
                BHASHA NYAYA's mission is to democratize access to legal information and assistance 
                by breaking down language barriers. We believe that everyone deserves to understand 
                and assert their legal rights, regardless of the language they speak.
              </p>
              <p className="text-bhasha-muted">
                Through innovative technology and a deep commitment to accessibility, 
                we aim to empower individuals across India with the legal knowledge they need, 
                delivered in the language they're most comfortable with.
              </p>
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <div className="h-1 w-20 bg-white mb-6"></div>
              <p className="text-bhasha-muted mb-4">
                We envision a future where language is no longer a barrier to justice. 
                Where every citizen, regardless of their linguistic background, has equal 
                access to legal information, representation, and resources.
              </p>
              <p className="text-bhasha-muted">
                Through the power of AI and translation technology, we're working to create 
                a more inclusive legal ecosystem that serves all of India's diverse linguistic communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white/5 rounded-2xl p-6 hover-scale">
              <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Inclusion</h3>
              <p className="text-bhasha-muted">
                We believe that legal information should be accessible to everyone, 
                regardless of the language they speak. We're committed to serving 
                India's diverse linguistic communities.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/5 rounded-2xl p-6 hover-scale">
              <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-bhasha-muted">
                We're committed to providing accurate, reliable legal information 
                and being transparent about the limitations of our AI-powered assistance. 
                We prioritize user privacy and data security.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/5 rounded-2xl p-6 hover-scale">
              <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-bhasha-muted">
                We leverage cutting-edge AI and language technologies to break down 
                barriers to legal assistance. We're constantly improving our platform 
                to better serve our users' needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-black rounded-2xl p-6 text-center hover-scale">
              <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full bg-white/20 flex items-center justify-center">
                  <svg className="h-16 w-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ananya Sharma</h3>
              <p className="text-bhasha-muted mb-4">Founder & CEO</p>
              <p className="text-bhasha-muted text-sm">
                Former legal aid attorney with a passion for technology and language access.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-black rounded-2xl p-6 text-center hover-scale">
              <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full bg-white/20 flex items-center justify-center">
                  <svg className="h-16 w-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rajiv Patel</h3>
              <p className="text-bhasha-muted mb-4">Chief Technology Officer</p>
              <p className="text-bhasha-muted text-sm">
                AI and NLP expert specializing in multilingual language processing.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-black rounded-2xl p-6 text-center hover-scale">
              <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full bg-white/20 flex items-center justify-center">
                  <svg className="h-16 w-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Priya Nair</h3>
              <p className="text-bhasha-muted mb-4">Legal Content Director</p>
              <p className="text-bhasha-muted text-sm">
                Consumer rights attorney with expertise in simplifying complex legal concepts.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-black rounded-2xl p-6 text-center hover-scale">
              <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full bg-white/20 flex items-center justify-center">
                  <svg className="h-16 w-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vikram Singh</h3>
              <p className="text-bhasha-muted mb-4">Language Access Manager</p>
              <p className="text-bhasha-muted text-sm">
                Linguist specializing in translation and localization for legal content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
            
            <div className="space-y-6">
              <ProgressiveDisclosure title="AI-Powered Language Support" defaultOpen={true}>
                <p className="text-bhasha-muted mb-4">
                  We leverage advanced AI and natural language processing to provide 
                  legal information in multiple Indian languages. Our technology can:
                </p>
                <ul className="list-disc pl-6 text-bhasha-muted space-y-2">
                  <li>Accurately translate legal concepts while preserving meaning</li>
                  <li>Process and respond to queries in multiple languages</li>
                  <li>Convert speech to text and text to speech in various languages</li>
                  <li>Continuously improve through machine learning</li>
                </ul>
                <div className="mt-4 bg-white/5 p-4 rounded-lg">
                  <p className="text-xs text-bhasha-muted">
                    <strong>Note:</strong> Our platform uses OpenAI's GPT models for natural language 
                    understanding and Bhashini APIs for Indian language processing and translation.
                  </p>
                </div>
              </ProgressiveDisclosure>
              
              <ProgressiveDisclosure title="Simplified Legal Information">
                <p className="text-bhasha-muted mb-4">
                  Legal jargon can be intimidating even in one's native language. 
                  We're committed to simplifying legal information without sacrificing accuracy:
                </p>
                <ul className="list-disc pl-6 text-bhasha-muted space-y-2">
                  <li>Breaking down complex legal concepts into accessible language</li>
                  <li>Using progressive disclosure to avoid overwhelming users</li>
                  <li>Providing context-specific information based on user needs</li>
                  <li>Offering visual aids to supplement textual information</li>
                </ul>
              </ProgressiveDisclosure>
              
              <ProgressiveDisclosure title="Human-Centered Design">
                <p className="text-bhasha-muted mb-4">
                  Our platform is designed with real users in mind, focusing on accessibility and usability:
                </p>
                <ul className="list-disc pl-6 text-bhasha-muted space-y-2">
                  <li>Intuitive interface that works across devices and connection speeds</li>
                  <li>Voice input for users who prefer speaking to typing</li>
                  <li>Accessibility features including font size adjustments and keyboard navigation</li>
                  <li>Clear pathways to additional help when AI assistance isn't enough</li>
                </ul>
              </ProgressiveDisclosure>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Supporters */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Partners & Supporters</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Partner logos would go here - using placeholders */}
            <div className="h-24 bg-white/5 rounded-xl flex items-center justify-center">
              <div className="text-bhasha-muted">Legal Aid Society</div>
            </div>
            <div className="h-24 bg-white/5 rounded-xl flex items-center justify-center">
              <div className="text-bhasha-muted">Language Access Network</div>
            </div>
            <div className="h-24 bg-white/5 rounded-xl flex items-center justify-center">
              <div className="text-bhasha-muted">Digital Rights Foundation</div>
            </div>
            <div className="h-24 bg-white/5 rounded-xl flex items-center justify-center">
              <div className="text-bhasha-muted">AI Ethics Institute</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
