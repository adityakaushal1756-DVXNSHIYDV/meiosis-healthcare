import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

const AUTH_URL = "https://meiosis-healthcare.vercel.app";

const navItems = [
  {
    label: "Features",
    items: [
      { label: "High-Efficiency EMR", href: "#features" },
      { label: "AI-Scribe", href: "#features" },
      { label: "Queue Management", href: "#features" },
      { label: "ABDM Integration", href: "#abdm" },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "ABDM Compliance", href: "#abdm" },
  {
    label: "Resources",
    items: [
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  { label: "About Us", href: "#about" },
];

type NavItem = {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
};

function NavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (item.items) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2 px-1"
          aria-expanded={open}
          data-ocid="nav-dropdown"
        >
          {item.label}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-smooth ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 rounded-lg bg-card border border-border shadow-elevated py-2 z-50 animate-fade-in">
            {item.items.map((sub) => (
              <button
                key={sub.label}
                type="button"
                className="block w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth"
                onClick={() => scrollTo(sub.href)}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2 px-1"
      onClick={() => item.href && scrollTo(item.href)}
      data-ocid="nav-link"
    >
      {item.label}
    </button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      data-ocid="header"
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-subtle border-b border-border"
          : "bg-card border-b border-border/60"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 gap-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          data-ocid="logo"
        >
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
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          data-ocid="desktop-nav"
        >
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-3">
            <a href={AUTH_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm px-4"
                data-ocid="signin-btn"
              >
                Sign In
              </Button>
            </a>
            <a
              href={`${AUTH_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-sm px-4"
                data-ocid="signup-btn"
              >
                Get Started
              </Button>
            </a>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
