import './globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Sophim – Full‑Stack 3D Portfolio',
  description: 'Sophim, full‑stack software developer, showcasing interactive 3‑D projects.',
  openGraph: {
    title: 'Sophim – 3D Portfolio',
    description: 'Interactive portfolio built with Next.js, Three.js, and Firebase.',
    images: ['/assets/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-bg">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Sophim – Full‑Stack 3D Portfolio',
  description: 'Sophim, full‑stack software developer, showcasing interactive 3‑D projects.',
  openGraph: {
    title: 'Sophim – 3D Portfolio',
    description: 'Interactive portfolio built with Next.js, Three.js, and Firebase.',
    images: ['/assets/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <NavBar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Sophim – Full‑Stack 3D Portfolio',
  description: 'Sophim, full‑stack software developer, showcasing interactive 3‑D projects.',
  openGraph: {
    title: 'Sophim – 3D Portfolio',
    description: 'Interactive portfolio built with Next.js, Three.js, and Firebase.',
    images: ['/assets/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-bg">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sophim – Full‑Stack 3D Portfolio',
  description: 'Sophim, full‑stack software developer, showcasing interactive 3‑D projects.',
  openGraph: {
    title: 'Sophim – 3D Portfolio',
    description: 'Interactive portfolio built with Next.js, Three.js, and Firebase.',
    images: ['/assets/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
