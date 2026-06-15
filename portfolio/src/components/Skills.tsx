"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-muted/30">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/[0.03]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
