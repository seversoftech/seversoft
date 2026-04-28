"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompliancePage() {
  return (
    <main className="light-page">
      <Navbar />

      <section className="section section-light">
        <div className="shell content-page">
          <span className="section-kicker kicker-with-dot">Legal</span>
          <h1>Compliance</h1>
          <p className="content-date">Last Updated: April 27, 2026</p>

          <div className="prose">
            <p>
              At Seversoft Technologies, compliance is not a checkbox — it is a core principle embedded into how we engineer, operate, and deliver our services. We build high-performance software, fintech infrastructure, and AI-powered systems, and we hold ourselves to the highest standards of legal, regulatory, and technical compliance across every engagement.
            </p>
            <p>
              This page outlines the key frameworks, standards, and obligations that govern how Seversoft operates, how we handle client and user data, and how we maintain accountability across our platforms and partnerships.
            </p>

            <h2>1. Regulatory Compliance</h2>
            <p>
              Seversoft Technologies actively adheres to applicable data protection and digital services regulations across the jurisdictions in which we operate. These include:
            </p>
            <ul>
              <li>
                <strong>NDPR</strong> — Nigeria Data Protection Regulation, enforced by the Nigeria Data Protection Commission (NDPC). As an Africa-based technology company, NDPR compliance is our primary regulatory obligation.
              </li>
              <li>
                <strong>GDPR</strong> — General Data Protection Regulation (European Union). We apply GDPR-aligned data practices for any clients, users, or partners located in the EEA.
              </li>
              <li>
                <strong>CCPA</strong> — California Consumer Privacy Act. Users and clients based in California may exercise their rights under CCPA in relation to data we hold.
              </li>
              <li>
                <strong>CBN Guidelines</strong> — Where our infrastructure supports payment processing, digital wallets, or fintech operations, we align with relevant Central Bank of Nigeria (CBN) regulations and circulars governing technology service providers.
              </li>
            </ul>

            <h2>2. Fintech & Payment Compliance</h2>
            <p>
              Seversoft builds and integrates fintech infrastructure for businesses operating in payments, lending, utilities, and digital transactions. Our compliance posture in this area includes:
            </p>
            <ul>
              <li>
                <strong>PCI-DSS Alignment</strong> — We do not store, process, or transmit raw card data. All payment processing is delegated to PCI-DSS certified processors (e.g., Paystack, Monnify). Our systems are designed to minimize cardholder data exposure.
              </li>
              <li>
                <strong>Secure Payment Integration</strong> — We implement payment integrations using tokenization and server-side verification to reduce fraud surface area.
              </li>
              <li>
                <strong>Transaction Integrity</strong> — Our fintech platforms are built with idempotency, audit logging, and reconciliation mechanisms to ensure accurate and tamper-evident transaction records.
              </li>
              <li>
                <strong>Third-Party Processor Compliance</strong> — We only integrate with payment processors who maintain their own regulatory certifications and compliance obligations.
              </li>
            </ul>

            <h2>3. Data Protection & Privacy</h2>
            <p>
              Our approach to data protection is built on the principles of data minimization, purpose limitation, and privacy by design. Key commitments include:
            </p>
            <ul>
              <li>We collect only the data necessary to deliver our services.</li>
              <li>Personal data is processed only for the purposes for which it was collected.</li>
              <li>Data subjects have the right to access, correct, or delete their data — exercisable via our <a href="/privacy-policy">Privacy Policy</a>.</li>
              <li>Cross-border data transfers are governed by standard contractual clauses or equivalent safeguards.</li>
              <li>We do not sell, rent, or trade personal data to third parties under any circumstances.</li>
            </ul>
            <p>
              Full details of our data practices are documented in our <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>4. Security Compliance</h2>
            <p>
              Seversoft applies a security-first engineering philosophy across all our products and infrastructure. Our security compliance practices include:
            </p>
            <ul>
              <li><strong>Encryption in Transit:</strong> All data transmitted via our platforms uses TLS 1.2+ encryption.</li>
              <li><strong>Encryption at Rest:</strong> Sensitive data stored in our systems is encrypted using AES-256 or equivalent standards.</li>
              <li><strong>Access Control:</strong> Role-based access control (RBAC) and multi-factor authentication (MFA) are enforced across internal and client-facing systems.</li>
              <li><strong>Vulnerability Management:</strong> We conduct regular security assessments, dependency audits, and penetration testing on our platforms.</li>
              <li><strong>Incident Response:</strong> We maintain documented incident response procedures to detect, contain, and remediate security events in a timely manner.</li>
              <li><strong>Responsible Disclosure:</strong> We welcome good-faith security researchers to report vulnerabilities. Please contact us at <a href="mailto:info@seversoftech.com">info@seversoftech.com</a> before any public disclosure.</li>
            </ul>

            <h2>5. AML & KYC Support (Fintech Clients)</h2>
            <p>
              Where Seversoft builds or integrates fintech platforms for clients, we support their Anti-Money Laundering (AML) and Know Your Customer (KYC) obligations through:
            </p>
            <ul>
              <li>Building onboarding flows that support identity verification (BVN, NIN, document upload)</li>
              <li>Integrating with licensed KYC and identity verification providers</li>
              <li>Implementing transaction monitoring hooks and flagging thresholds at the infrastructure level</li>
              <li>Maintaining audit trails and access logs for regulatory review</li>
            </ul>
            <p>
              Clients are responsible for their own AML/KYC regulatory compliance. Seversoft provides the technical infrastructure to support — not replace — their compliance obligations.
            </p>

            <h2>6. Third-Party Vendor Compliance</h2>
            <p>
              We work with a curated set of third-party vendors and service providers whose compliance posture meets or exceeds our own standards. Our vendor compliance approach includes:
            </p>
            <ul>
              <li>Conducting due diligence on all third-party vendors before integration</li>
              <li>Requiring data processing agreements (DPAs) with vendors who handle personal data</li>
              <li>Reviewing vendors&apos; security certifications and compliance documentation</li>
              <li>Operating under a shared responsibility model — both Seversoft and its vendors are accountable for their respective obligations</li>
            </ul>

            <h2>7. Employee & Internal Compliance</h2>
            <p>
              Compliance at Seversoft extends to how our team operates internally:
            </p>
            <ul>
              <li>All team members are trained on data protection, information security, and ethical handling of client data.</li>
              <li>Access to client systems and data is limited to those with a documented need-to-know.</li>
              <li>Confidentiality agreements are in place with all personnel and contractors.</li>
              <li>Internal policies are reviewed and updated regularly to reflect changes in law and best practice.</li>
            </ul>

            <h2>8. Reporting a Compliance Concern</h2>
            <p>
              If you have identified a potential compliance issue, data breach, security vulnerability, or any concern regarding how Seversoft handles data or operates its platforms, please contact us immediately. We take all reports seriously and commit to a prompt, thorough response.
            </p>

            <div className="prose-card">
              <p style={{ margin: 0 }}>
                <strong>Seversoft Technologies — Compliance Contact</strong><br />
                Email: <a href="mailto:info@seversoftech.com">info@seversoftech.com</a><br />
                Website: <a href="https://seversoftech.com">seversoftech.com</a><br />
                WhatsApp: <a href="https://wa.me/2347049076570">+234 704 907 6570</a><br /><br />
                <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  For security vulnerability disclosures, please include &quot;Security Disclosure&quot; in your subject line. We aim to acknowledge all reports within 48 hours.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
