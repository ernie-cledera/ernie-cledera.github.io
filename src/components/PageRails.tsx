function Corner({ path, className }: { path: string; className: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="rgb(var(--muted-foreground))"
      strokeOpacity="0.4"
      strokeWidth="1"
    >
      <path d={path} />
    </svg>
  );
}

export default function PageRails() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 hidden md:block" aria-hidden="true">
      <div className="relative mx-auto h-full w-full max-w-7xl">
        <div className="absolute inset-y-0 left-0 w-px bg-border/40">
          <div className="absolute left-0 top-0 h-32 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 w-px bg-border/40">
          <div className="absolute left-0 top-0 h-32 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>
        <Corner path="M1 13 V1 H13" className="absolute left-1 top-1" />
        <Corner path="M13 13 V1 H1" className="absolute right-1 top-1" />
        <Corner path="M1 1 V13 H13" className="absolute bottom-1 left-1" />
        <Corner path="M13 1 V13 H1" className="absolute bottom-1 right-1" />
      </div>
    </div>
  );
}
