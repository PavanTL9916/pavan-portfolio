"use client";

import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} PAVAN T L. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
