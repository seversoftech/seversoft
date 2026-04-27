"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="light-page">
      <Navbar />

      <section className="section section-light">
        <div className="shell content-page">
          <span className="section-kicker kicker-with-dot">Legal</span>
          <h1>Terms of Service</h1>
          <p className="content-date">Last updated: April 27, 2026</p>

          <div className="prose">
            <p>
              By using Seversoft (a product of Techdozie Solutions), you agree to these terms. Please read them carefully.
            </p>

            <h2>1. Use of Services</h2>
            <p>
              You must follow any policies made available to you within the services. You may use our 
              services only as permitted by law. We may suspend or stop providing our services to you 
              if you do not comply with our terms or policies.
            </p>

            <h2>2. Your Account</h2>
            <p>
              You may need a Seversoft account in order to use some of our services. You are responsible 
              for the activity that happens on or through your account.
            </p>

            <h2>3. Privacy and Copyright Protection</h2>
            <p>
              Seversoft&apos;s privacy policies explain how we treat your personal data and protect your 
              privacy when you use our services.
            </p>

            <h2>4. Modifying and Terminating Services</h2>
            <p>
              We are constantly changing and improving our services. We may add or remove functionalities 
              or features, and we may suspend or stop a service altogether.
            </p>

            <h2>5. Liability for our Services</h2>
            <p>
              To the extent permitted by law, Seversoft will not be responsible for lost profits, 
              revenues, or data, financial losses or indirect, special, consequential, exemplary, or 
              punitive damages.
            </p>

            <h2>6. About these Terms</h2>
            <p>
              We may modify these terms or any additional terms that apply to a service. You should 
              look at the terms regularly.
            </p>

            <div className="prose-card">
              <p style={{ margin: 0 }}>
                <strong>Contact Information</strong><br />
                For any questions regarding these terms, please contact us at <a href="mailto:hello@techdoziesolutions.com">hello@techdoziesolutions.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
