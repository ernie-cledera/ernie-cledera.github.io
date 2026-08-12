import { useState } from "react";
import { BadgeCheck, ChevronDown, ChevronUp } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import CertificateModal from "./CertificateModal";

const certificationsData = [
  {
    id: "ccna-scaling",
    name: "CCNA Routing and Switching - Scaling Networks",
    issuer: "Cisco",
    category: "Networking",
    date: "2026",
    credentialId: "CCNA-Scaling",
    image: "/certificates/CCNA Routing and Switching - Scaling Networks.jpg",
  },
  {
    id: "ccna-essentials",
    name: "CCNA Routing and Switching Essentials",
    issuer: "Cisco",
    category: "Networking",
    date: "2026",
    credentialId: "CCNA-Essentials",
    image: "/certificates/CCNA Routing and Switching Essentials.jpg",
  },
  {
    id: "ccna-security",
    name: "CCNA Security",
    issuer: "Cisco",
    category: "Security",
    date: "2026",
    credentialId: "CCNA-Security",
    image: "/certificates/CCNA Security.jpg",
  },
  {
    id: "azure-ai",
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    category: "AI & Data",
    date: "2026",
    credentialId: "Azure-AI",
    image: "/certificates/Azure AI Fundamentals.png",
  },
  {
    id: "ms-cybersecurity",
    name: "Microsoft Cybersecurity - Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    category: "Security",
    date: "2026",
    credentialId: "Cyber-Intro",
    image: "/certificates/Microsoft Cybersecurity Course - Security Compliance, and Identity Fundamentals.png",
  },
  {
    id: "ethical-hacker",
    name: "Ethical Hacker",
    issuer: "Cisco",
    category: "Security",
    date: "2026",
    credentialId: "Ethical-Hacker",
    image: "/certificates/Ethical Hacker.png",
  },
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    issuer: "Course",
    category: "AI & Data",
    date: "2026",
    credentialId: "AI-ML",
    image: "/certificates/Artificial Intelligence & Machine Learning.png",
  },
  {
    id: "ai-ethics",
    name: "AI Ethics and Governance",
    issuer: "Course",
    category: "AI & Data",
    date: "2026",
    credentialId: "AI-Ethics",
    image: "/certificates/AI Ethics and Governance.png",
  },
  {
    id: "5g-networks",
    name: "5G Mobile Networks",
    issuer: "Course",
    category: "Networking",
    date: "2026",
    credentialId: "5G-Networks",
    image: "/certificates/5G Mobile Networks.png",
  },
  {
    id: "networking-basics",
    name: "Networking Basics",
    issuer: "Cisco",
    category: "Networking",
    date: "2026",
    credentialId: "Networking-Basics",
    image: "/certificates/Networking Basics.png",
  },
  {
    id: "sap-4hana",
    name: "SAP S/4HANA",
    issuer: "SAP",
    category: "AI & Data",
    date: "2026",
    credentialId: "SAP-4HANA",
    image: "/certificates/SAP 4HANA.png",
  },
];

const filters = ["All", "Networking", "Security", "AI & Data"];

export default function Certifications() {
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<{ image: string; name: string } | null>(null);

  const filtered = active === "All" ? certificationsData : certificationsData.filter((c) => c.category === active);
  const visible = showAll ? filtered : filtered.slice(0, 3);

  return (
    <Section id="certifications" index="04" eyebrow="Certifications" title="Certifications.">
      <Reveal>
        <div className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-lg border border-border/50 bg-muted/50 p-1 shadow-sm">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActive(f);
                setShowAll(false);
              }}
              className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active === f
                  ? "border border-border/50 bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 60}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/85 shadow-sm transition-all duration-300 hover:shadow-md hover:border-highlight">
              <button
                type="button"
                onClick={() => setSelected({ image: c.image, name: c.name })}
                aria-label={`Zoom into ${c.name}`}
                className="relative block aspect-video w-full cursor-zoom-in overflow-hidden bg-muted text-left"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-secondary-foreground">
                  {c.date}
                </span>
              </button>
              <div className="flex flex-1 flex-col p-5">
                <button
                  type="button"
                  onClick={() => setSelected({ image: c.image, name: c.name })}
                  className="flex items-start gap-2 text-left"
                >
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <h3 className="text-lg font-semibold tracking-tight">{c.name}</h3>
                </button>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.issuer}</p>
                <div className="mt-4 flex flex-1 items-end gap-2 border-t border-border/50 pt-4">
                  <p className="truncate font-mono text-[10px] text-muted-foreground">{c.credentialId}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {filtered.length > 3 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-card/85 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
          >
            {showAll ? "Show Less" : `View All Certifications (${filtered.length - 3})`}
            {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      )}

      {selected && (
        <CertificateModal
          image={selected.image}
          name={selected.name}
          onClose={() => setSelected(null)}
        />
      )}
    </Section>
  );
}