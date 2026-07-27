export function StarField({ count = 18, className = '' }) {
  const stars = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 4 + Math.random() * 8,
    delay: Math.random() * 3,
  }));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute animate-twinkle text-lavender-dark/70 dark:text-lavender-light/60"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            fontSize: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

export function GridPattern({ className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12] ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(#CDB4FF22 1px, transparent 1px), linear-gradient(90deg, #CDB4FF22 1px, transparent 1px)',
        backgroundSize: '38px 38px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
      }}
    />
  );
}

export function Blob({ className = '', from = '#CDB4FF', to = '#FFC1E3', delay = '0s' }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-blob blur-2xl animate-blobMove opacity-60 dark:opacity-30 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        animationDelay: delay,
      }}
      aria-hidden="true"
    />
  );
}

export function SectionBackdrop({ children }) {
  return (
    <div className="relative overflow-hidden">
      <GridPattern />
      <StarField count={10} />
      {children}
    </div>
  );
}
