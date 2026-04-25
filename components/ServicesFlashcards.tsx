"use client";

import { useState, type ReactNode } from "react";

type Service = {
  title: string;
  eyebrow: string;
  description: string;
  meta: string;
  highlights?: string[];
  accent: "blue" | "purple" | "teal";
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: "Mobile App Development",
    eyebrow: "Build",
    description: "Reliable iOS and Android apps with clean product flows, strong performance, and secure integrations.",
    meta: "iOS, Android, Flutter, React Native",
    highlights: ["Intuitive user journeys", "Performance-led engineering"],
    accent: "purple",
    icon: <path d="M9 3.5h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Zm3 13.5h.01" />,
  },
  {
    title: "Web Development",
    eyebrow: "Launch",
    description: "Modern websites, dashboards, and business platforms engineered for clarity, speed, and conversion.",
    meta: "Web apps, dashboards, landing pages",
    highlights: ["Conversion-focused UX", "Fast, scalable frontends"],
    accent: "teal",
    icon: <path d="M4 6.5h16v11H4v-11Zm0 3h16M9 20h6" />,
  },
  {
    title: "Web Hosting Service",
    eyebrow: "Host",
    description: "Reliable, high-speed hosting and domain management to keep your business online 24/7 with zero friction.",
    meta: "Cloud hosting, SSL, Domains, DNS",
    highlights: ["99.9% uptime guarantee", "Managed server security"],
    accent: "blue",
    icon: (
      <>
        <rect x="2" y="5.5" width="20" height="6" rx="2" />
        <rect x="2" y="13.5" width="20" height="6" rx="2" />
        <path d="M6 8.5h.01M6 16.5h.01" />
      </>
    ),
  },
  {
    title: "Fintech & Bill Payment Services",
    eyebrow: "Transact",
    description: "Data, airtime, bills payment, wallet systems, and transaction orchestration tailored for scale.",
    meta: "Bills, wallets, VTU, utility flows",
    accent: "blue",
    icon: <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7ZM8 11h8M8 14h5" />,
  },
  {
    title: "Design & UI/UX",
    eyebrow: "Design",
    description: "Clean, conversion-focused product design, interface systems, and user experiences for digital platforms.",
    meta: "UX strategy, flows, interface systems",
    accent: "purple",
    icon: <path d="M12 4h7v7M20 4 13 11M5 20h7v-7M11 13l-7 7" />,
  },
  {
    title: "APIs & Developer Tools",
    eyebrow: "Integrate",
    description: "Powerful APIs, documentation, and tooling that help developers integrate and ship faster.",
    meta: "APIs, docs, internal tools",
    accent: "blue",
    icon: <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" />,
  },
  {
    title: "White-label Solutions",
    eyebrow: "Launch",
    description: "Launch branded fintech products faster with flexible platforms built for your market and workflow.",
    meta: "Branded fintech, reseller-ready systems",
    accent: "purple",
    icon: <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5H15l4 4v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5v-9Z" />,
  },
  {
    title: "Registration & Compliance",
    eyebrow: "Comply",
    description:
      "Company registration, Trademark, SCUML, TIN and other regulatory compliance services for growing businesses.",
    meta: "CAC, Trademark, SCUML, TIN",
    accent: "blue",
    icon: <path d="M6 4.5h9l3 3v12H6v-15ZM9 9h6M9 12h6M9 15h4M15 4.5v3h3" />,
  },
  {
    title: "Business Automation",
    eyebrow: "Optimize",
    description: "Automate repetitive processes, payments, reporting, and customer operations with dependable systems.",
    meta: "Automation, workflows, reporting",
    accent: "teal",
    icon: <path d="M12 3v4M12 17v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M3 12h4M17 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />,
  },
];

function ServiceIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export default function ServicesFlashcards() {
  const [activeTitle, setActiveTitle] = useState(services[0]?.title ?? "");

  return (
    <section id="services" className="section section-dark services-section">
      <div className="shell">
        <div className="services-shell frame-card reveal">
          <div className="services-heading">
            <div className="section-heading compact reveal">
              <span className="section-kicker kicker-with-dot">Services</span>
              <h2>Services built to help ambitious businesses launch, transact, and scale with confidence</h2>
              <p>
                Click a service card to open its explanation. From mobile products and web platforms to fintech systems
                and compliance support, Seversoft delivers focused solutions for how real businesses operate.
              </p>
            </div>

            <div className="services-signals reveal reveal-delay">
              <span>Cross-platform delivery</span>
              <span>Fintech-ready systems</span>
              <span>Compliance support</span>
            </div>
          </div>

          <div className="services-flashcards">
            {services.map((service, index) => {
              const isOpen = service.title === activeTitle;

              return (
                <button
                  key={service.title}
                  type="button"
                  className={`service-flashcard accent-${service.accent} ${isOpen ? "is-open" : ""} reveal`}
                  style={{ animationDelay: `${index * 70}ms` }}
                  onClick={() => setActiveTitle(service.title)}
                  aria-expanded={isOpen}
                >
                  <div className="service-flashcard-top">
                    <span className="service-eyebrow">{service.eyebrow}</span>
                    <div className="icon-wrap">
                      <ServiceIcon>{service.icon}</ServiceIcon>
                    </div>
                  </div>

                  <h3>{service.title}</h3>

                  <div className="service-flashcard-summary">
                    <span>{service.meta}</span>
                    <strong>
                      {isOpen ? (
                        "Open"
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </strong>
                  </div>

                  <div className="service-flashcard-body">
                    <p>{service.description}</p>
                    {service.highlights && (
                      <div className="service-meta-row">
                        {service.highlights.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
