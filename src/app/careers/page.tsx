import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react";

export default function CareersPage() {
  // Sample job listings
  const jobs = [
    {
      title: "Real Estate Agent",
      location: "Addis Ababa",
      type: "Full-time",
      salary: "Competitive + Commission",
      description:
        "We are looking for experienced real estate agents to join our growing team. The ideal candidate will have excellent communication skills, knowledge of the Addis Ababa property market, and a passion for helping clients find their dream homes.",
      responsibilities: [
        "Develop and maintain a portfolio of properties for sale or rent",
        "Conduct property viewings and provide detailed information to potential clients",
        "Negotiate property prices and terms between buyers and sellers",
        "Stay updated on market trends and property values in different neighborhoods",
        "Build and maintain relationships with clients, property owners, and developers",
      ],
      requirements: [
        "Minimum 2 years of experience in real estate sales",
        "Excellent communication and negotiation skills",
        "Valid driver's license and own transportation",
        "Fluency in Amharic and English",
        "Bachelor's degree in Business, Marketing, or related field preferred",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      location: "Addis Ababa",
      type: "Full-time",
      salary: "Competitive",
      description:
        "We are seeking a talented Digital Marketing Specialist to help grow our online presence and generate quality leads for our real estate platform. The ideal candidate will have experience in digital marketing strategies, social media management, and content creation.",
      responsibilities: [
        "Develop and implement digital marketing campaigns across various channels",
        "Manage and grow our social media presence on platforms like Facebook, Instagram, and LinkedIn",
        "Create engaging content for our website, blog, and social media",
        "Analyze marketing data and optimize campaigns for better performance",
        "Collaborate with the sales team to generate and nurture leads",
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2+ years of experience in digital marketing",
        "Proficiency in social media management tools and Google Analytics",
        "Experience with SEO and SEM",
        "Strong analytical and creative skills",
      ],
    },
    {
      title: "Property Photographer",
      location: "Addis Ababa",
      type: "Part-time",
      salary: "Based on experience",
      description:
        "We are looking for a skilled photographer to capture high-quality images of our listed properties. The ideal candidate will have experience in real estate photography and the ability to highlight the best features of each property.",
      responsibilities: [
        "Photograph interior and exterior of properties",
        "Edit and enhance photos to ensure they meet our quality standards",
        "Coordinate with real estate agents to schedule photography sessions",
        "Maintain and organize a digital library of property photos",
        "Occasionally create video tours of premium properties",
      ],
      requirements: [
        "Experience in real estate or architectural photography",
        "Proficiency in photo editing software (Adobe Photoshop, Lightroom)",
        "Own professional photography equipment",
        "Flexible schedule for property visits",
        "Portfolio of previous work",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with the leading real estate platform in Ethiopia
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Growth Opportunities
              </h3>
              <p className="text-gray-600">
                We invest in our team's professional development with training,
                mentorship, and advancement opportunities.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Competitive Benefits
              </h3>
              <p className="text-gray-600">
                Enjoy competitive salaries, performance bonuses, health
                insurance, and other attractive benefits.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">
                We value your personal time and offer flexible schedules and a
                supportive work environment.
              </p>
            </div>
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Current Openings
          </h2>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-600">
                    {job.title}
                  </h3>
                  <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Responsibilities:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {job.requirements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-blue-50 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Our Application Process
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: 1,
                title: "Apply Online",
                description:
                  "Submit your application through our careers page with your resume and cover letter.",
              },
              {
                step: 2,
                title: "Initial Screening",
                description:
                  "Our HR team will review your application and contact you for an initial phone interview.",
              },
              {
                step: 3,
                title: "Interview",
                description:
                  "Qualified candidates will be invited for in-person or virtual interviews with the hiring team.",
              },
              {
                step: 4,
                title: "Offer & Onboarding",
                description:
                  "Successful candidates will receive an offer and begin our comprehensive onboarding process.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* No Current Openings Section */}
        <div className="text-center bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Don't See a Suitable Position?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send
            your resume to
            <a
              href="mailto:careers@paradisefinder.com"
              className="text-blue-600 hover:underline"
            >
              {" "}
              careers@paradisefinder.com
            </a>{" "}
            and we'll keep you in mind for future opportunities.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
