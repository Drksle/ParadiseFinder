import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">About Paradise Finder</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for finding premium real estate properties in
            Ethiopia
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Paradise Finder was born out of a vision to
              transform the real estate experience in Ethiopia. We recognized
              the challenges that home seekers faced in finding quality
              properties that matched their lifestyle needs and budget
              constraints.
            </p>
            <p className="text-gray-600 mb-4">
              Our founders, with over 15 years of combined experience in the
              Ethiopian real estate market, set out to create a platform that
              would connect property seekers with their dream homes through a
              transparent, efficient, and enjoyable process.
            </p>
            <p className="text-gray-600">
              Today, Paradise Finder has grown to become one of the leading real
              estate platforms in Ethiopia, with a curated selection of over 500
              premium properties across Addis Ababa and other major cities.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
              alt="Paradise Finder Office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Our Mission & Values</h2>
            <p className="text-gray-600">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We are committed to providing the highest quality service and
                properties to our clients.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our dealings
                with clients and partners.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new ways to improve the property search and
                acquisition experience.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Our Team</h2>
            <p className="text-gray-600">
              Meet the people behind Paradise Finder
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Abebe Kebede",
                role: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
              },
              {
                name: "Sarah Tesfaye",
                role: "Head of Property Listings",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
              },
              {
                name: "Dawit Haile",
                role: "Chief Marketing Officer",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
              },
              {
                name: "Tigist Mengistu",
                role: "Customer Experience Manager",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Find Your Paradise?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Let us help you discover your dream property in Ethiopia's most
            desirable locations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
