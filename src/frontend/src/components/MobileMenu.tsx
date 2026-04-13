import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const AUTH_URL = "https://meiosis-healthcare.vercel.app";

const navGroups = [
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

type NavGroup = {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
};

function MobileNavItem({
  item,
  onClose,
}: { item: NavGroup; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    onClose();
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (item.items) {
    return (
      <div>
        <button
          type="button"
          className="flex w-full items-center justify-between py-3 text-base font-medium text-foreground"
          onClick={() => setOpen(!open)}
        >
          {item.label}
          <ChevronDown
            className={`h-4 w-4 transition-smooth ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="ml-4 border-l border-border pl-4 pb-2 space-y-1">
            {item.items.map((sub) => (
              <button
                key={sub.label}
                type="button"
                className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
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
      className="block w-full text-left py-3 text-base font-medium text-foreground border-b border-border/50"
      onClick={() => scrollTo(item.href!)}
    >
      {item.label}
    </button>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          data-ocid="mobile-menu-trigger"
          className="md:hidden h-9 w-9"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 pt-16 bg-card">
        <nav className="flex flex-col divide-y divide-border/50">
          {navGroups.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              onClose={() => setOpen(false)}
            />
          ))}
        </nav>
        <div className="mt-6 space-y-3">
          <a
            href={AUTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button
              variant="outline"
              className="w-full"
              data-ocid="mobile-signin-btn"
            >
              Sign In
            </Button>
          </a>
          <a
            href={`${AUTH_URL}/signup`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              data-ocid="mobile-signup-btn"
            >
              Get Started Free
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
