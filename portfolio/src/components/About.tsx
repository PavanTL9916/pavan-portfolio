"use client";

import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { aboutText } from "@/lib/data";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About"
        subtitle="A brief introduction to who I am and what I do."
      />
      <div className="max-w-2xl space-y-5">
        {aboutText.map((paragraph, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
