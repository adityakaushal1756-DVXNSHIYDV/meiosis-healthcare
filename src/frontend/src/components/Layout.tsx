import type { ReactNode } from "react";
import { Header } from "./Header";

const AUTH_URL = "https://meiosis-healthcare.vercel.app";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "ABDM Compliance", href: "#abdm" },
    { label: "Roadmap", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "HIPAA Compliance", href: "#" },
    { label: "Security", href: "#" },
  ],
};

function FooterLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary"
        aria-hidden="true"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <title>Meiosis logo</title>
          <path
            d="M9 2L3 6v6l6 4 6-4V6L9 2z"
            fill="oklch(var(--primary-foreground))"
            fillOpacity="0.9"
          />
          <path
            d="M9 5L6 7v4l3 2 3-2V7L9 5z"
            fill="oklch(var(--primary-foreground))"
          />
        </svg>
      </div>
      <span className="font-display font-semibold text-lg tracking-tight text-foreground">
        Meiosis
      </span>
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border" data-ocid="footer">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            {/* Brand column */}
            <div className="md:col-span-1">
              <FooterLogo />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Enterprise-grade EMR built for modern Indian clinics.
                Local-first, ABDM-compliant, AI-powered.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href={AUTH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-accent hover:underline"
                  data-ocid="footer-signin"
                >
                  Sign In →
                </a>
                <a
                  href={`${AUTH_URL}/signup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-accent hover:underline"
                  data-ocid="footer-signup"
                >
                  Get Started →
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  {group}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        type="button"
                        className="text-sm text-muted-foreground hover:text-foreground transition-smooth text-left"
                        onClick={() => scrollTo(link.href)}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Meiosis Corporation. All rights
              reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
