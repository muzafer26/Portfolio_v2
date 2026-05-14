/**
 * Animated gradient mesh background.
 * Three blurred blobs (mint + purple) drifting via CSS animation.
 */
export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div
        className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle at center, #00FFB2 0%, transparent 60%)",
          animation: "blob1 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-40 right-[-10rem] h-[44rem] w-[44rem] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle at center, #7B61FF 0%, transparent 60%)",
          animation: "blob2 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle at center, #00FFB2 0%, #7B61FF 70%, transparent 90%)",
          animation: "blob3 26s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(8rem, 6rem) scale(1.15); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-10rem, -4rem) scale(1.1); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(-50%,-50%) scale(1); }
          50% { transform: translate(-40%,-60%) scale(1.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-hidden] > div { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
