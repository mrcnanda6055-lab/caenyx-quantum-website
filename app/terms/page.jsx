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

const LAST_UPDATED = "09 December 2025";
const COPYRIGHT_YEAR = "2025";

export default function TermsPage() {
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
          <p style={kickerStyle}>Legal · Terms</p>
          <h1 style={titleStyle}>Terms &amp; Conditions</h1>
          <p style={updatedStyle}>Last updated: {LAST_UPDATED}</p>

          <p style={{ ...pStyle, marginTop: "1.5rem" }}>
            Welcome to <strong>CaenyX Quantum</strong>. By using our website or
            working with us on a project, you agree to the following terms. These
            are designed to protect both you and us, and to ensure a smooth,
            transparent collaboration.
          </p>

          <h2 style={sectionTitleStyle}>1. Services</h2>
          <p style={pStyle}>
            We provide AI systems, automations, dashboards, websites, mobile apps,
            branding and related services. The exact scope, timelines and pricing
            will be defined in discussions, proposals or agreements with you.
          </p>

          <h2 style={sectionTitleStyle}>2. Payments</h2>
          <ul style={ulStyle}>
            <li>Work usually starts after an advance or agreed milestone payment.</li>
            <li>Invoices are expected to be paid within the agreed timeline.</li>
            <li>Delays in payment may pause or delay project work.</li>
            <li>
              Except where clearly agreed, payments are generally non-refundable once
              work has been delivered or significantly progressed.
            </li>
          </ul>

          <h2 style={sectionTitleStyle}>3. Client Responsibilities</h2>
          <p style={pStyle}>To keep things moving smoothly, you agree to:</p>
          <ul style={ulStyle}>
            <li>Provide accurate information and requirements</li>
            <li>Give timely feedback and approvals</li>
            <li>Share necessary access (e.g., CRMs, APIs, hosting, accounts)</li>
            <li>Ensure you have rights to any data or content you provide</li>
          </ul>

          <h2 style={sectionTitleStyle}>4. Intellectual Property</h2>
          <ul style={ulStyle}>
            <li>
              After full payment, the main deliverables for your project are yours to
              use for your business.
            </li>
            <li>
              Pre-existing tools, libraries, components or frameworks remain owned by
              their respective creators (including open-source).
            </li>
            <li>
              We may reuse internal patterns or generic components, but not your
              confidential data.
            </li>
            <li>
              Unless we sign an NDA or you request otherwise, we may showcase
              non-sensitive parts of the work in our portfolio.
            </li>
          </ul>

          <h2 style={sectionTitleStyle}>5. AI-Generated Content</h2>
          <p style={pStyle}>
            Some outputs (copy, suggestions, responses) are powered by AI systems. We
            design guardrails and review flows, but you agree to review important or
            sensitive content (legal, financial, medical, etc.) before using it
            in production.
          </p>

          <h2 style={sectionTitleStyle}>6. Confidentiality</h2>
          <p style={pStyle}>
            We treat your business data, customer data and internal processes as
            confidential. We only use them to deliver the project and do not share
            them outside the tools and platforms required to provide the service.
          </p>

          <h2 style={sectionTitleStyle}>7. Use of Third-Party Services</h2>
          <p style={pStyle}>
            Many modern systems rely on third-party services (cloud, APIs,
            messaging, analytics). While we choose widely trusted providers, we do
            not control their uptime, policies or technical changes. We are not
            responsible for issues caused directly by third-party failures.
          </p>

          <h2 style={sectionTitleStyle}>8. Limitation of Liability</h2>
          <p style={pStyle}>
            To the maximum extent allowed by law, CaenyX Quantum is not liable for
            indirect, incidental or special damages, loss of profits, or data loss
            arising from the use or inability to use the delivered systems, or from
            third-party service issues.
          </p>

          <h2 style={sectionTitleStyle}>9. Termination</h2>
          <p style={pStyle}>
            Either party may end the engagement with reasonable written notice. You
            agree to pay for work that has been completed up to the date of
            termination, based on the agreed terms.
          </p>

          <h2 style={sectionTitleStyle}>10. Contact</h2>
          <p style={pStyle}>
            For any questions or concerns about these Terms &amp; Conditions, you can
            reach us at:
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
