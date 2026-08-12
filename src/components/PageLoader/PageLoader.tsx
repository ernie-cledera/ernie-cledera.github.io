import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import "./PageLoader.css";

export default function PageLoader({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const hideAt = window.setTimeout(() => setPhase("out"), 1350);
    const finishAt = window.setTimeout(onFinish, 1350 + 550);
    return () => {
      clearTimeout(hideAt);
      clearTimeout(finishAt);
    };
  }, [onFinish]);

  return (
    <div className={`page-loader ${phase === "out" ? "page-loader--done" : ""}`} aria-hidden="true">
      <div className="page-loader__logo-wrap">
        <span className="page-loader__ring" />
        <span className="page-loader__ring page-loader__ring--2" />
        <BrandLogo className="page-loader__logo h-16 w-16 md:h-20 md:w-20" />
      </div>
    </div>
  );
}