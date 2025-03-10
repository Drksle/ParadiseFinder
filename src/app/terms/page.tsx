import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: October 1, 2023</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="prose prose-blue max-w-none">
            <p>
              Welcome to Paradise Finder. Please read these Terms of Service
              ("Terms") carefully before using our website and services. By
              accessing or using our services, you agree to be bound by these
              Terms. If you disagree with any part of the terms, you may not
              access our services.
            </p>

            <h2>1. Use of Our Services</h2>
            <p>
              Paradise Finder provides an online platform that connects property
              seekers with property owners and real estate agents in Ethiopia.
              Our services include property listings, search functionality, user
              accounts, and communication tools.
            </p>
            <p>
              You must be at least 18 years old to use our services. By using
              our services, you represent and warrant that you are at least 18
              years of age and have the legal capacity to enter into these
              Terms.
            </p>

            <h2>2. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate,
              complete, and current information. You are responsible for
              safeguarding the password that you use to access our services and
              for any activities or actions under your password.
            </p>
            <p>
              You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of
              security or unauthorized use of your account.
            </p>

            <h2>3. Property Listings</h2>
            <p>
              Property owners and agents who list properties on our platform are
              responsible for ensuring that all information provided is
              accurate, complete, and up-to-date. Paradise Finder does not
              verify the accuracy of listings and is not responsible for any
              inaccuracies or misrepresentations.
            </p>
            <p>
              We reserve the right to remove any listing that violates these
              Terms or that we determine, in our sole discretion, is
              inappropriate or harmful to our community.
            </p>

            <h2>4. User Conduct</h2>
            <p>
              You agree not to use our services for any purpose that is unlawful
              or prohibited by these Terms. You may not use our services in any
              manner that could damage, disable, overburden, or impair our
              servers or networks, or interfere with any other party's use and
              enjoyment of our services.
            </p>
            <p>
              You may not attempt to gain unauthorized access to any part of our
              services, other accounts, computer systems, or networks connected
              to our servers through hacking, password mining, or any other
              means.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              The content on our website, including text, graphics, logos,
              images, and software, is the property of Paradise Finder or its
              content suppliers and is protected by Ethiopian and international
              copyright laws. The compilation of all content on our website is
              the exclusive property of Paradise Finder and is protected by
              Ethiopian and international copyright laws.
            </p>
            <p>
              You may not reproduce, duplicate, copy, sell, resell, or exploit
              any portion of our services without our express written
              permission.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall Paradise Finder, its officers, directors,
              employees, or agents, be liable to you for any direct, indirect,
              incidental, special, punitive, or consequential damages whatsoever
              resulting from any (i) errors, mistakes, or inaccuracies of
              content; (ii) personal injury or property damage related to your
              use of our services; (iii) any unauthorized access to or use of
              our servers and/or any personal information stored therein; (iv)
              any interruption or cessation of transmission to or from our
              services; (v) any bugs, viruses, trojan horses, or the like, which
              may be transmitted to or through our services by any third party;
              and/or (vi) any errors or omissions in any content or for any loss
              or damage of any kind incurred as a result of your use of any
              content posted, emailed, transmitted, or otherwise made available
              via our services, whether based on warranty, contract, tort, or
              any other legal theory, and whether or not we are advised of the
              possibility of such damages.
            </p>

            <h2>7. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Paradise Finder
              and its officers, directors, employees, and agents, from and
              against any and all claims, damages, obligations, losses,
              liabilities, costs or debt, and expenses (including but not
              limited to attorney's fees) arising from: (i) your use of and
              access to our services; (ii) your violation of any term of these
              Terms; (iii) your violation of any third party right, including
              without limitation any copyright, property, or privacy right; or
              (iv) any claim that your content caused damage to a third party.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of Ethiopia, without regard to its conflict of law
              provisions. Our failure to enforce any right or provision of these
              Terms will not be considered a waiver of those rights.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Paradise Finder</strong>
              <br />
              Bole Road, Addis Ababa, Ethiopia
              <br />
              Email:{" "}
              <a
                href="mailto:legal@paradisefinder.com"
                className="text-blue-600 hover:underline"
              >
                legal@paradisefinder.com
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
