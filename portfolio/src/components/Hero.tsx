"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle gradient bg */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl text-center"
      >
        {/* Profile Image */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-border ring-offset-4 ring-offset-background md:h-36 md:w-36">
            <Image
              src="/profile.png"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="mt-4 text-lg font-light text-muted-foreground md:text-xl"
        >
          {personalInfo.title} · {personalInfo.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground/80"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-5"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-lg p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
