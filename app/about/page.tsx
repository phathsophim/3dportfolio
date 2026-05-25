// app/about/page.tsx
"use client";
import NavBar from '@/components/NavBar';

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0f2a] to-[#1a1c3a] text-primary p-8">
      <div className="glass p-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-base leading-relaxed">
          Hi! I’m Sophim, a full‑stack software developer passionate about building immersive web experiences. I love blending 3‑D graphics, modern UI design, and robust back‑ends to create memorable portfolios.
        </p>
      </div>
    </section>
  );
}
