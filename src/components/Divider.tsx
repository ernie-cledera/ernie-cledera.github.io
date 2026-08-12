const PLUS_PATTERN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M12 10 L12 14 M10 12 L14 12' stroke='%2381818a' stroke-width='1' fill='none'/%3E%3C/svg%3E";

export default function Divider() {
  return (
    <div className="relative mx-auto h-24 w-full max-w-7xl border-x border-border/40" aria-hidden="true">
      <div
        className="h-full w-full opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
        style={{ backgroundImage: `url("${PLUS_PATTERN}")` }}
      />
    </div>
  );
}
