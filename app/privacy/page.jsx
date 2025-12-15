"use client";

const pageStyle = {
  minHeight: "100vh",
  padding: "6rem 1.5rem 4rem",
  display: "flex",
  justifyContent: "center",
  background:
    "radial-gradient(circle at top left, rgba(46, 255, 196, 0.12), transparent 55%)," +
    "radial-gradient(circle at top right, rgba(0, 166, 255, 0.18), transparent 60%)," +
    "radial-gradient(circle at bottom, rgba(0, 0, 0, 0.9), #020816 70%)",
  color: "#f9fbff",
};

const innerStyle = {
  width: "100%",
  maxWidth: 900,
};

const backWrapStyle = {
  marginBottom: "1.8rem",
};

const backBtnStyle = {
  display: "inline-block",
  padding: "0.55rem 1.2rem",
  borderRadius: 999,
  fontSize: "0.9rem",
  textDecoration: "none",
  background: "rgba(15, 23, 42, 0.88)",
  border: "1px solid rgba(148, 163, 255, 0.35)",
  color: "#e5e7eb",
  transition: "background 160ms ease, border-color 160ms ease, transform 140ms ease",
};

const cardStyle = {
  borderRadius: "1.5rem",
  padding: "1.8rem 1.8rem 2.2rem",
  background:
    "radial-gradient(circle at top left, rgba(148, 163, 255, 0.18), transparent)," +
    "rgba(4, 10, 27, 0.96)",
  border: "1px solid rgba(148, 163, 255, 0.25)",
  boxShadow:
    "0 18px 35px rgba(15, 23, 42, 0.85)," +
    "0 0 0 1px rgba(15, 23, 42, 0.9) inset",
};

const kickerStyle = {
  fontSize: "0.8rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(196, 181, 253, 0.9)",
  marginBottom: "0.75rem",
};

const titleStyle = {
  fontSize: "clamp(2.1rem, 3vw, 2.6rem)",
  fontWeight: 800,
  margin: 0,
};

const updatedStyle = {
  opacity: 0.8,
  marginTop: "0.4rem",
  fontSize: "0.85rem",
};

const sectionTitleStyle = {
  marginTop: "2.2rem",
  fontSize: "1.15rem",
  fontWeight: 700,
};

const pStyle = {
  lineHeight: 1.7,
  fontSize: "0.95rem",
  color: "rgba(226, 232, 240, 0.95)",
};

const ulStyle = {
  lineHeight: 1.7,
  fontSize: "0.95rem",
  color: "rgba(226, 232, 240, 0.95)",
  paddingLeft: "1.2rem",
};

const footerStyle = {
  marginTop: "2.8rem",
  opacity: 0.7,
  fontSize: "0.85rem",
};

/** ❗ Hard-coded strings – no Date() → no hydration issues */
const LAST_UPDATED = "09 December 2025";
const COPYRIGHT_YEAR = "2025";

export default function PrivacyPage() {
  return (
    <main style={pageStyle}>
      <div style={innerStyle}>
        {/* Back to home */}
        <div style={backWrapStyle}>
          <a
            href="/"
            style={backBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(30, 64, 175, 0.85)";
              e.currentTarget.style.borderColor = "rgba(191, 219, 254, 0.8)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(15, 23, 42, 0.88)";
              e.currentTarget.style.borderColor = "rgba(148, 163, 255, 0.35)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ← Back to Home
          </a>
        </div>

        <div style={cardStyle}>
          <p style={kickerStyle}>Legal · Privacy</p>
          <h1 style={titleStyle}>Privacy Policy</h1>
          <p style={updatedStyle}>Last updated: {LAST_UPDATED}</p>

          <p style={{ ...pStyle, marginTop: "1.5rem" }}>
            At <strong>CaenyX Quantum</strong>, we build AI, automation and digital
            systems that are designed to be fast, reliable and secure. Your privacy
            is extremely important to us. This policy explains what information we
            collect, how we use it, and how we keep it safe.
          </p>

          <h2 style={sectionTitleStyle}>1. Information We Collect</h2>
          <p style={pStyle}>
            We only collect information that is necessary to build or deliver your
            project. This may include:
          </p>
          <ul style={ulStyle}>
            <li>Basic contact details (name, email, phone, WhatsApp)</li>
            <li>Project requirements and business details you share with us</li>
            <li>Files, documents or data needed for integrations or automations</li>
            <li>Technical and analytics data from your usage of our website</li>
          </ul>

          <h2 style={sectionTitleStyle}>2. How We Use Your Information</h2>
          <p style={pStyle}>We use your information to:</p>
          <ul style={ulStyle}>
            <li>Understand your needs and design the right solution</li>
            <li>Build, configure and deliver the agreed services</li>
            <li>Communicate updates, proposals and support</li>
            <li>Improve our systems, performance and user experience</li>
            <li>Maintain security, logs and audit trails where needed</li>
          </ul>

          <h2 style={sectionTitleStyle}>3. AI & Automation Data Handling</h2>
          <p style={pStyle}>
            Some services use AI models and automation platforms. We handle this
            carefully:
          </p>
          <ul style={ulStyle}>
            <li>We do not sell your data to any third party.</li>
            <li>Client data is only used to deliver and improve your project.</li>
            <li>We minimise the data sent to external APIs (OpenAI, WhatsApp, etc.).</li>
            <li>We follow secure practices for keys, credentials and access.</li>
          </ul>

          <h2 style={sectionTitleStyle}>4. Third-Party Services</h2>
          <p style={pStyle}>
            We may use trusted tools and infrastructure such as cloud hosting,
            WhatsApp Cloud API, analytics platforms, CRMs and AI providers. These
            services have their own privacy policies and security standards. We
            choose vendors that are widely adopted and respected in the industry.
          </p>

          <h2 style={sectionTitleStyle}>5. Data Protection & Security</h2>
          <p style={pStyle}>We aim to protect your data using industry-aligned practices:</p>
          <ul style={ulStyle}>
            <li>Encryption in transit (HTTPS) for data flows where possible</li>
            <li>Role-based access control and least-privilege access</li>
            <li>Secure password and key management</li>
            <li>Monitoring and audits where appropriate for the project</li>
          </ul>

          <h2 style={sectionTitleStyle}>6. Data Retention</h2>
          <p style={pStyle}>
            We keep project-related information only for as long as it is needed for:
          </p>
          <ul style={ulStyle}>
            <li>Delivering and maintaining your solution</li>
            <li>Complying with legal or accounting requirements</li>
            <li>Troubleshooting and support, if requested</li>
          </ul>

          <h2 style={sectionTitleStyle}>7. Your Rights</h2>
          <p style={pStyle}>You can request to:</p>
          <ul style={ulStyle}>
            <li>Access the information we hold about you</li>
            <li>Update or correct your details</li>
            <li>Request deletion of certain stored information (where possible)</li>
          </ul>

          <h2 style={sectionTitleStyle}>8. Contact Us</h2>
          <p style={pStyle}>
            If you have any questions about this Privacy Policy or how we handle
            data, you can contact us at:
            <br />
            <br />
            <strong>support@caenyxquantum.com</strong>
          </p>

          <p style={footerStyle}>
            © {COPYRIGHT_YEAR} CaenyX Quantum · All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
