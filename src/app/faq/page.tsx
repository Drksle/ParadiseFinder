import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";

const FAQItem = dynamic(() => import("@/components/faq-item"), {
  loading: () => (
    <div className="border-b border-gray-200 py-6 animate-pulse"></div>
  ),
});

export default function FAQPage() {
  // FAQ Categories and Questions
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is Paradise Finder?",
          answer:
            "Paradise Finder is Ethiopia's premier real estate platform that connects property seekers with high-quality residential and commercial properties across Addis Ababa and other major Ethiopian cities. We offer a curated selection of properties for rent and sale, along with comprehensive information and tools to make your property search easier.",
        },
        {
          question: "Do I need to create an account to use Paradise Finder?",
          answer:
            "While you can browse properties without an account, creating a free account allows you to save favorite properties, receive property alerts, contact property owners directly, and track your property viewing history. It takes just a minute to sign up with your email address.",
        },
        {
          question: "How do I contact Paradise Finder for support?",
          answer:
            "You can reach our customer support team by email at info@paradisefinder.com, by phone at +251 932 704 408, or by visiting our office in Bole, Addis Ababa. Our support hours are Monday to Friday, 8:30 AM to 5:30 PM, and Saturday, 9:00 AM to 1:00 PM.",
        },
      ],
    },
    {
      category: "Property Search",
      questions: [
        {
          question: "How can I search for properties on Paradise Finder?",
          answer:
            "You can search for properties using our search bar by entering a location, neighborhood, or address. You can also filter results by property type, price range, number of bedrooms, and other amenities to find exactly what you're looking for.",
        },
        {
          question:
            "Are the property listings on Paradise Finder accurate and up-to-date?",
          answer:
            "We work closely with property owners and agents to ensure listings are accurate and current. All listings are reviewed before being published, and we regularly update our database to remove properties that are no longer available. However, we recommend contacting the property agent to confirm availability before making any decisions.",
        },
        {
          question: "Can I save properties to view later?",
          answer:
            "Yes, if you have a Paradise Finder account, you can save properties to your favorites list by clicking the heart icon on any property card. You can access your saved properties anytime from your account dashboard.",
        },
      ],
    },
    {
      category: "For Property Seekers",
      questions: [
        {
          question: "How do I schedule a property viewing?",
          answer:
            "To schedule a viewing, navigate to the property details page and click on the 'Schedule a Viewing' button. You'll be able to select a preferred date and time, and our team or the property agent will confirm your appointment. Alternatively, you can contact the agent directly using the contact information provided on the listing.",
        },
        {
          question:
            "Is there a fee for using Paradise Finder to find a property?",
          answer:
            "No, Paradise Finder is completely free for property seekers. We do not charge any fees for searching, viewing, or contacting property owners or agents through our platform.",
        },
        {
          question:
            "What should I consider when renting a property in Ethiopia?",
          answer:
            "When renting in Ethiopia, consider factors such as location, proximity to work or schools, security, utilities (water and electricity availability), transportation access, and neighborhood amenities. Also, be aware of standard lease terms, which typically include a one-year minimum contract and a two-month security deposit.",
        },
      ],
    },
    {
      category: "For Property Owners",
      questions: [
        {
          question: "How can I list my property on Paradise Finder?",
          answer:
            "To list your property, create an account as a property owner or agent, then click on 'Add Property' in your dashboard. Fill out the property details form, upload high-quality photos, and submit for review. Our team will review your listing and publish it once approved, typically within 24 hours.",
        },
        {
          question: "Is there a fee for listing properties on Paradise Finder?",
          answer:
            "We offer both free and premium listing options. Basic listings are free and include essential property details and photos. Premium listings, available for a fee, offer enhanced visibility, featured placement, and additional promotional benefits. Visit our 'Pricing' page for current rates.",
        },
        {
          question: "How long will my property listing remain active?",
          answer:
            "Free listings remain active for 30 days, while premium listings stay active for 60 days. You can renew or update your listing at any time from your account dashboard. We also recommend marking your property as 'Rented' or 'Sold' once it's no longer available.",
        },
      ],
    },
    {
      category: "Legal & Payments",
      questions: [
        {
          question:
            "Does Paradise Finder handle rental or purchase agreements?",
          answer:
            "No, Paradise Finder does not directly handle rental or purchase agreements. We connect property seekers with owners or agents, but the legal agreements are between those parties. However, we do provide templates and guidance on standard Ethiopian real estate contracts for reference.",
        },
        {
          question: "How are payments handled for rentals or purchases?",
          answer:
            "Paradise Finder does not handle payments between property seekers and owners. All financial transactions are conducted directly between the involved parties. We recommend using secure payment methods and obtaining proper receipts for all transactions.",
        },
        {
          question: "What should I know about property laws in Ethiopia?",
          answer:
            "In Ethiopia, land is owned by the government, but buildings and improvements can be privately owned. Foreign nationals face restrictions on property ownership. We recommend consulting with a legal professional familiar with Ethiopian property law before making any significant real estate decisions.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Paradise Finder and real
            estate in Ethiopia
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for questions..."
              className="pl-10 w-full h-12 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-5 gap-4 mb-12">
          {faqCategories.map((cat, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${index === 0 ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"}`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">
                {category.category} Questions
              </h2>
              <div className="space-y-0">
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem
                    key={faqIndex}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-blue-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, our team is here
            to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
