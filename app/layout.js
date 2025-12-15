import "./globals.css";
import MagneticCursor from "../components/MagneticCursor";
import NeonGrid from "../components/NeonGrid";
import ParticleField from "../components/ParticleField";
import ParallaxController from "../components/ParallaxController"; // 🔥 NEW

export const metadata = {
  title: "CaenyX Quantum — AI-Powered Websites & Automations",
  description:
    "AI-first multi-agent development agency building websites, dashboards and automations 3–10× faster.",
  openGraph: {
    title: "CaenyX Quantum — AI-Powered Development",
    description:
      "AI-first multi-agent development agency building websites, dashboards and automations.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="is-loading">
        
        {/* Smooth fade-in script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', () => {
                document.body.classList.remove('is-loading');
              });
            `,
          }}
        />


         {/* 🔥 Neon Laser Grid Background */}
        <MagneticCursor />
        <NeonGrid />

        {/* 🔥 Magnetic Cursor */}
        
       

        {/* 🔥 3D Particle Field Background */}
        <ParticleField />

        {/* 🔥 Parallax Controller (global scroll parallax) */}
        <ParallaxController />

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
