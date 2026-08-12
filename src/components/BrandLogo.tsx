import useTheme from "@/hooks/useTheme";

export default function BrandLogo({ className = "h-7 w-7" }: { className?: string }) {
  const { theme } = useTheme();
  return (
    <img
      src={theme === "dark" ? "/Logo Yellow.png" : "/Logo Blue.png"}
      alt="Ernie Joseph Cledera logo"
      className={`object-contain ${className}`}
    />
  );
}