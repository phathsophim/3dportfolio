import ThreeCanvas from '@/components/ThreeCanvas';
import HeroModel from '@/components/HeroModel';

export default function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0f2a] to-[#1a1c3a]">
      <div className="absolute inset-0 pointer-events-none">
        {/* Optional background particles or gradient overlay */}
      </div>
      <div className="w-full h-full max-w-4xl max-h-[80vh] glass p-4">
        <ThreeCanvas>
          <HeroModel />
        </ThreeCanvas>
      </div>
    </section>
  );
}
