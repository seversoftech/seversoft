"use client";

const features = [
  {
    icon: "⚡️",
    title: "Lightning Fast",
    description: "Built on Next.js App Router for optimal performance, instant loading, and excellent SEO right out of the box.",
  },
  {
    icon: "🎨",
    title: "Beautiful Design",
    description: "Crafted with Tailwind CSS v4. Includes a premium dark mode, glassmorphism effects, and smooth animations.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description: "Ready for production with best practices implemented for security, data handling, and scalable architecture.",
  },
  {
    icon: "🧩",
    title: "Modular Components",
    description: "Easily mix and match pre-built, accessible components to create your unique application interface quickly.",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    description: "Looks stunning on all devices. Seamless transitions from mobile to tablet to desktop displays.",
  },
  {
    icon: "🚀",
    title: "One-Click Deploy",
    description: "Optimized for static export or serverless deployment on Vercel, Netlify, or any modern hosting platform.",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "100px 0", position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 64px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px" }}>
            Everything you need to <span className="gradient-text">scale.</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)" }}>
            Stop rebuilding the same foundational features. Launchpad provides a robust architecture so you can focus on your core product.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(124, 92, 252, 0.1)",
                  border: "1px solid rgba(124, 92, 252, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ fontSize: "1.25rem" }}>{feature.title}</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
