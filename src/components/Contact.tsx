import { useState } from "react";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profileData } from "@/data/portfolio";

const inputClass =
  "w-full rounded-md border border-input/60 bg-input/30 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-ring focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "468c432c-4311-435e-bba2-2a734177d628";

    const data = new FormData();
    data.append("access_key", accessKey);
    data.append("Name", (form.elements.namedItem("name") as HTMLInputElement).value);
    data.append("Email", (form.elements.namedItem("email") as HTMLInputElement).value);
    data.append("subject", (form.elements.namedItem("subject") as HTMLInputElement).value);
    data.append("Message", (form.elements.namedItem("message") as HTMLTextAreaElement).value);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        setMessage("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to connect. Please check your internet connection.");
    }
  };

  const info = [
    { icon: Mail, label: "Email", value: profileData.email, href: `mailto:${profileData.email}` },
    { icon: Phone, label: "Phone", value: profileData.phone, href: "tel:+639296529698" },
    { icon: MapPin, label: "Location", value: profileData.location },
  ];

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: profileData.social.linkedin },
    { icon: Github, label: "GitHub", href: profileData.social.github },
  ];

  return (
    <Section id="contact" index="07" eyebrow="Contact" title="Let's talk.">
      <div className="grid items-stretch gap-10 lg:grid-cols-5">
        <div className="flex flex-col lg:col-span-3">
          <Reveal>
            <h3 className="text-center text-xl font-bold tracking-tight md:text-left md:text-2xl">Send Me A Message</h3>
            <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-foreground/75 text-shadow-intro md:mx-0 md:text-left md:text-base">
              Have a project in mind, or need a hand streamlining operations? The inbox is open — let&apos;s
              make it happen.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-6 flex flex-1 flex-col">
            <form
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm md:p-8"
            >
              {status !== "idle" && (
                <div
                  className={`mb-6 rounded-md border px-4 py-3 text-sm ${
                    status === "sent"
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : status === "error"
                        ? "border-red-500/40 bg-red-500/10 text-red-400"
                        : "border-border/60 bg-muted/50 text-muted-foreground"
                  }`}
                >
                  {status === "sending" ? "Sending your message..." : message}
                </div>
              )}

              <div className="flex flex-1 flex-col">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="subject" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" required placeholder="What's this about?" className={inputClass} />
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea id="message" name="message" required rows={7} placeholder="What is your message about?" className={`${inputClass} resize-none`} />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <Reveal delay={60}>
            <div className="rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact Information</p>
              <div className="mt-4 divide-y divide-border/40">
                {info.map((c) => (
                  <div key={c.label} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background/60 text-muted-foreground shadow-sm">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="block truncate text-sm font-medium transition-colors hover:text-primary"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Find Me Online</p>
              <div className="mt-4 space-y-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -mx-2 flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-muted/50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-background/60 text-muted-foreground shadow-sm transition-colors group-hover:text-foreground">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-sm font-medium">{s.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={220} className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Resume</p>
              <a
                href="/Cledera - Resume.pdf"
                download="Cledera - Resume.pdf"
                className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}