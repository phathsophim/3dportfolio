// components/NavBar.tsx
"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="glass fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
      <div className="text-xl font-semibold text-primary">Sophim</div>
      <ul className="flex gap-4">
        <li><Link href="/" className="hover-scale">Home</Link></li>
        <li><Link href="/about" className="hover-scale">About</Link></li>
        <li><Link href="/projects" className="hover-scale">Projects</Link></li>
        <li><Link href="/experience" className="hover-scale">Experience</Link></li>
        <li><Link href="/contact" className="hover-scale">Contact</Link></li>
      </ul>
    </nav>
  );
}
