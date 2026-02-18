import { ConnectButton } from "@/components/ConnectButton";
import { JupiterSwap } from "@/components/JupiterSwap";
import { StatsBanner } from "@/components/StatsBanner";
import { ArrowUpRight, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen grid-bg relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] orb pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-highlight/5 blur-[120px] orb pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 fade-in-up">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9L9 3L15 9L9 15L3 9Z" fill="#080B14" />
              <path d="M7 9L9 7L11 9L9 11L7 9Z" fill="#00F5A0" />
            </svg>
          </div>
          <span className="font-display font-700 text-lg text-text tracking-tight">
            Seekn<span className="text-accent">Swap</span>
          </span>
        </div>

        {/* Nav links + connect */}
        <div className="flex items-center gap-4 fade-in-up fade-in-up-delay-1">
          <a
            href="https://docs.jup.ag"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-text-dim hover:text-text text-sm font-body transition-colors"
          >
            Docs <ArrowUpRight size={12} />
          </a>
          <ConnectButton />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 text-center px-6 pt-12 pb-8 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6 fade-in-up fade-in-up-delay-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-xs font-body font-medium">
            Built for Seeker · Powered by Jupiter
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-800 text-5xl md:text-6xl text-text leading-tight mb-4 fade-in-up fade-in-up-delay-2">
          Swap{" "}
          <span className="text-accent text-glow">smarter</span>
          <br />
          on Solana.
        </h1>

        {/* Subtitle */}
        <p className="text-text-dim font-body text-lg md:text-xl leading-relaxed mb-10 fade-in-up fade-in-up-delay-3 max-w-xl mx-auto">
          The fastest token swap experience on Seeker. Best prices aggregated
          from all Solana DEXs. No surprises.
        </p>

        {/* Swap widget */}
        <div className="fade-in-up fade-in-up-delay-4">
          <JupiterSwap />
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 py-10 max-w-3xl mx-auto border-t border-border/50">
        <StatsBanner />
      </section>

      {/* Features grid */}
      <section className="relative z-10 px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Native Seeker Support",
              desc: "Connect your Seeker Seed Vault or Phantom wallet in one tap. No browser needed.",
              icon: "📱",
            },
            {
              title: "Best Prices Guaranteed",
              desc: "Jupiter aggregates 30+ DEX pools and finds the optimal route for every swap.",
              icon: "⚡",
            },
            {
              title: "Transparent Fees",
              desc: "0.5% platform fee, displayed clearly. No hidden slippage, no surprises.",
              icon: "🔍",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all group"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-display font-700 text-text text-lg mb-2 group-hover:text-accent transition-colors">
                {f.title}
              </h3>
              <p className="text-text-dim font-body text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border px-6 py-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-700 text-text text-sm">
            Seekn<span className="text-accent">Swap</span>
          </span>
          <span className="text-text-dim text-xs font-body">
            · Non-custodial · Powered by Jupiter
          </span>
        </div>
        <p className="text-text-dim text-xs font-body">
          © 2025 SeeknSwap · Built for the Seeker ecosystem
        </p>
      </footer>
    </main>
  );
}
