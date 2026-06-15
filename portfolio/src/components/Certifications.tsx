"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading title="Certifications" subtitle="Professional certifications and credentials." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/[0.03]"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
              <Award size={18} />
            </div>
            <h3 className="text-sm font-semibold text-foreground">{cert.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
            <p className="mt-2 text-xs text-muted-foreground/60">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
