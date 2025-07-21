
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";

// Mock blog post data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Your Right to Education in India",
    excerpt: "Learn about the legal framework supporting education rights and how to ensure these rights are respected in your community.",
    date: "April 15, 2025",
    category: "Constitutional Rights",
    readTime: "5 min read",
    languages: ["English", "हिंदी", "தமிழ்"]
  },
  {
    id: 2,
    title: "Consumer Protection Laws Simplified",
    excerpt: "A comprehensive guide to your rights as a consumer and the legal remedies available when those rights are violated.",
    date: "April 10, 2025",
    category: "Consumer Rights",
    readTime: "7 min read",
    languages: ["English", "বাংলা", "తెలుగు"]
  },
  {
    id: 3,
    title: "Women's Legal Rights in the Workplace",
    excerpt: "An overview of laws protecting women from discrimination and harassment in the workplace, and steps to take if your rights are violated.",
    date: "April 5, 2025",
    category: "Workplace Rights",
    readTime: "6 min read",
    languages: ["English", "हिंदी", "ગુજરાતી"]
  },
  {
    id: 4,
    title: "Property Disputes: Legal Remedies and Resolution Pathways",
    excerpt: "Navigate the complex world of property law and understand the legal processes for resolving common property disputes.",
    date: "March 28, 2025",
    category: "Property Law",
    readTime: "8 min read",
    languages: ["English", "मराठी", "ਪੰਜਾਬੀ"]
  },
  {
    id: 5,
    title: "Understanding the Right to Information Act",
    excerpt: "A citizen's guide to using the RTI Act effectively to access government information and ensure transparency.",
    date: "March 20, 2025",
    category: "Government & Transparency",
    readTime: "6 min read",
    languages: ["English", "हिंदी", "ಕನ್ನಡ"]
  },
  {
    id: 6,
    title: "Digital Privacy Rights: What You Need to Know",
    excerpt: "Learn about your legal rights regarding data privacy and steps you can take if your digital privacy is compromised.",
    date: "March 15, 2025",
    category: "Digital Rights",
    readTime: "5 min read",
    languages: ["English", "हिंदी", "മലയാളം"]
  }
];

export default function Blog() {
  return (
    <PageLayout title="Blog" description="Legal information in simple language">
      {/* Blog Hero Section */}
      <section className="pt-40 pb-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Legal Rights Blog
            </h1>
            <p className="text-xl text-bhasha-accent mb-8 animate-fade-in">
              Legal information in simple language, accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-10 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" className="border-white/20 hover:bg-white/10">All Categories</Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10">Constitutional Rights</Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10">Consumer Rights</Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10">Workplace Rights</Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10">Property Law</Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10">Digital Rights</Button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article 
                key={post.id}
                className="bg-white/5 rounded-2xl overflow-hidden hover-scale"
              >
                <div className="h-48 bg-white/10 flex items-center justify-center">
                  <div className="text-4xl opacity-20">{post.id}</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-bhasha-muted">{post.date}</span>
                    <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-bhasha-muted">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link to={`/blog/${post.id}`} className="hover:text-bhasha-accent transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-bhasha-muted mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2 text-xs text-bhasha-muted">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <div className="flex space-x-1">
                        {post.languages.map((lang, index) => (
                          <span key={lang} className="px-1.5 py-0.5 bg-white/10 rounded-sm">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-xs font-medium hover:text-bhasha-accent transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Previous
              </Button>
              <Button variant="outline" className="border-white/20 bg-white/20">
                1
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                2
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                3
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-bhasha-muted mb-8">
              Get the latest legal information and updates in your preferred language, 
              delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-black border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                aria-label="Email address"
              />
              <Button className="bg-white text-black hover:bg-white/90 rounded-xl py-3">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
