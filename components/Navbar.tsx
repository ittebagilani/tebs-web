"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - lastScrollY;
      if (current < 100) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
      setLastScrollY(current);
    }
  });

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-[5000] px-4 md:px-0"
    >
      <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-12 md:space-x-20 px-8 py-6 text-md shadow-2xl">
        <Link href="/" className="text-white flex gap-x-2">
          works.
        </Link>
        <Link href="/about" className="text-white flex gap-x-2">
          about.
        </Link>
        <Link href="/contact" className="text-white flex gap-x-2">
          contact.
        </Link>
      </nav>
    </motion.div>
  );
}
