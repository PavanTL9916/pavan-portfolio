"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { education } from "@/lib/data";

export function Education() {
  return (
    <SectionWrapper id="education" className="bg-muted/30">
      <SectionHeading
        title="Education"
        subtitle="My academic background."
      />
      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border/60 bg-card p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  <span>{edu.period}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>{edu.location}</span>
                  <span className="hidden sm:inline">·</span>
                  <span className="font-medium text-foreground">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
                {edu.highlights && (
                  <ul className="mt-4 space-y-1.5">
                    {edu.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
