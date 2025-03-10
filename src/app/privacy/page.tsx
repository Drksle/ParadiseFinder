import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: October 1, 2023</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="prose prose-blue max-w-none">
            <p>
              At Paradise Finder, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services. Please
              read this privacy policy carefully. If you do not agree with the
              terms of this privacy policy, please do not access the site.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you
              register on our site, place an order, subscribe to our newsletter,
              respond to a survey, fill out a form, or otherwise contact us.
              This information may include:
            </p>
            <ul>
              <li>
                Personal identification information (Name, email address, phone
                number, etc.)
              </li>
              <li>
                Demographic information (Address, postal code, preferences,
                interests, etc.)
              </li>
              <li>
                Financial information (Payment details, transaction history,
                etc.)
              </li>
              <li>Property preferences and search history</li>
            </ul>

            <p>
              We may also collect information automatically when you visit our
              website, including:
            </p>
            <ul>
              <li>IP address and browser information</li>
              <li>Pages you view and links you click</li>
              <li>Time spent on our website and pages visited</li>
              <li>Device information (type, operating system, etc.)</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We may use the information we collect from you for the following
              purposes:
            </p>
            <ul>
              <li>
                To personalize your experience and deliver content and property
                listings most relevant to you
              </li>
              <li>To improve our website, products, and services</li>
              <li>To process transactions and send related information</li>
              <li>
                To send periodic emails regarding your properties, inquiries, or
                other products and services
              </li>
              <li>
                To follow up with you after correspondence (email or phone
                inquiries)
              </li>
              <li>
                To provide targeted advertisements based on your interests and
                preferences
              </li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share your personal information with:</p>
            <ul>
              <li>
                Property owners or agents when you express interest in a
                specific property
              </li>
              <li>
                Service providers who perform services on our behalf (payment
                processing, data analysis, email delivery, etc.)
              </li>
              <li>
                Business partners with whom we jointly offer products or
                services
              </li>
              <li>
                Legal authorities when required by law or to protect our rights
              </li>
            </ul>

            <h2>Security of Your Information</h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information when you enter, submit, or access
              your personal information. However, no electronic transmission or
              storage of information can be guaranteed to be 100% secure, so we
              cannot promise or guarantee that hackers, cybercriminals, or other
              unauthorized third parties will not be able to defeat our security
              and improperly collect, access, steal, or modify your information.
            </p>

            <h2>Your Choices</h2>
            <p>
              You may choose to restrict the collection or use of your personal
              information in the following ways:
            </p>
            <ul>
              <li>
                You can review, update, or delete the information in your
                account at any time by logging into your account settings
              </li>
              <li>
                You can opt-out of marketing communications by following the
                unsubscribe link in any email we send
              </li>
              <li>
                You can set your browser to refuse cookies or alert you when
                cookies are being sent
              </li>
            </ul>

            <h2>Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services. We
              encourage you to review the privacy policy of every site you
              visit.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>
              <strong>Paradise Finder</strong>
              <br />
              Bole Road, Addis Ababa, Ethiopia
              <br />
              Email:{" "}
              <a
                href="mailto:privacy@paradisefinder.com"
                className="text-blue-600 hover:underline"
              >
                privacy@paradisefinder.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+251932704408"
                className="text-blue-600 hover:underline"
              >
                +251 932 704 408
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
