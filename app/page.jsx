"use client";

import { motion } from "framer-motion";

function Icon({ name, className = "h-6 w-6" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  const icons = {
    arrowRight: (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    chart: (
      <svg {...commonProps}>
        <path d="M3 3v18h18" />
        <path d="M7 16v-5" />
        <path d="M12 16V7" />
        <path d="M17 16v-8" />
      </svg>
    ),
    layers: (
      <svg {...commonProps}>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    ),
    wallet: (
      <svg {...commonProps}>
        <path d="M19 7V6a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6" />
        <path d="M16 14h.01" />
      </svg>
    ),
    radio: (
      <svg {...commonProps}>
        <path d="M4.9 19.1a10 10 0 0 1 14.2 0" />
        <path d="M7.8 16.2a6 6 0 0 1 8.4 0" />
        <path d="M10.6 13.4a2 2 0 0 1 2.8 0" />
        <path d="M12 21h.01" />
      </svg>
    ),
    zap: (
      <svg {...commonProps}>
        <path d="M13 2 3 14h8l-1 8 11-13h-8l1-7Z" />
      </svg>
    ),
    lock: (
      <svg {...commonProps}>
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    globe: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
      </svg>
    ),
    code: (
      <svg {...commonProps}>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    ),
    shield: (
      <svg {...commonProps}>
        <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  };

  return icons[name] || null;
}

const products = [
  { icon: "chart", title: "Spot Trading", description: "High-speed order execution with deep market visibility for major digital asset pairs." },
  { icon: "layers", title: "Smart Contract Trading", description: "Contract-based trading infrastructure designed for scalable risk control and real-time settlement states." },
  { icon: "wallet", title: "Wallet Management", description: "Unified Web3 wallet accounts, asset balances, deposits, withdrawals and internal ledger synchronization." },
  { icon: "radio", title: "Market Data Services", description: "Live prices, market depth, trading history and WebSocket streaming for trading applications." }
];

const markets = ["Southeast Asia", "Japan", "Korea"];

const stats = [
  { value: "Hybrid", label: "Matching + Settlement" },
  { value: "24/7", label: "Market Access" },
  { value: "API", label: "Ready Infrastructure" },
  { value: "Web3", label: "Wallet Native" }
];

const chartBars = [46, 52, 40, 68, 63, 74, 58, 81, 72, 88, 79, 94];

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050716] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#2628b4]/30 blur-3xl" />
        <div className="absolute right-0 top-24 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-3" aria-label="VAXS homepage">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white font-black text-[#2628b4] shadow-lg shadow-[#2628b4]/30">V</div>
          <div>
            <div className="text-lg font-semibold tracking-wide">VAXS</div>
            <div className="text-xs text-slate-400">VAX Solutions Limited</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#products" className="transition hover:text-white">Products</a>
          <a href="#architecture" className="transition hover:text-white">Architecture</a>
          <a href="#markets" className="transition hover:text-white">Markets</a>
          <a href="#developers" className="transition hover:text-white">Developers</a>
        </nav>
        <button type="button" className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm backdrop-blur transition hover:bg-white/15">Launch App</button>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:pt-24">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Digital asset exchange infrastructure for Asia markets
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Trade digital assets with speed, clarity and control.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              VAXS is a digital asset exchange serving Southeast Asia, Japan and Korea, providing spot trading, smart contract trading, wallet management and market data services through a hybrid model of off-chain centralized matching and on-chain asset settlement.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.15 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button type="button" className="group rounded-full bg-white px-7 py-4 font-medium text-[#080b1f] shadow-xl shadow-white/10 transition hover:-translate-y-0.5">
                Start Trading
                <Icon name="arrowRight" className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button type="button" className="rounded-full border border-white/15 bg-white/5 px-7 py-4 font-medium text-white backdrop-blur transition hover:bg-white/10">Explore API</button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[#2628b4]/30 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#070a1f]/90 p-5">
                <div className="mb-5 flex items-center justify-between gap-6">
                  <div>
                    <div className="text-sm text-slate-400">BTC / USDT</div>
                    <div className="text-3xl font-semibold">68,428.90</div>
                  </div>
                  <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">+2.84%</div>
                </div>
                <div className="grid h-52 grid-cols-12 items-end gap-2 rounded-2xl bg-white/[0.03] p-4">
                  {chartBars.map((height, index) => (
                    <div key={`${height}-${index}`} className="rounded-t-lg bg-gradient-to-t from-[#2628b4] to-cyan-300" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-2xl bg-white/[0.04] p-4"><div className="text-slate-500">Bid</div><div className="mt-1 text-emerald-300">68,421.8</div></div>
                  <div className="rounded-2xl bg-white/[0.04] p-4"><div className="text-slate-500">Ask</div><div className="mt-1 text-rose-300">68,435.2</div></div>
                  <div className="rounded-2xl bg-white/[0.04] p-4"><div className="text-slate-500">Vol</div><div className="mt-1">1.28B</div></div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Products</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">A complete trading stack for digital assets.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.title} className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.08]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2628b4]/30 text-cyan-200"><Icon name={product.icon} className="h-6 w-6" /></div>
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{product.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="architecture" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Architecture</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Off-chain performance with on-chain settlement visibility.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">VAXS uses a hybrid exchange model. High-frequency order matching, clearing and state synchronization are completed within the internal ledger system, while asset settlement is connected to on-chain verification and Web3 wallet account management.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
              <div className="grid gap-4">
                <div className="rounded-3xl bg-[#2628b4]/20 p-6">
                  <div className="flex items-center gap-3 text-xl font-semibold"><Icon name="zap" className="h-6 w-6 shrink-0 text-cyan-300" />Off-chain Centralized Matching</div>
                  <p className="mt-3 text-slate-300">Built for high throughput, low latency, fast clearing and consistent trading state updates.</p>
                </div>
                <div className="mx-auto h-10 w-px bg-white/20" />
                <div className="rounded-3xl bg-white/[0.05] p-6">
                  <div className="flex items-center gap-3 text-xl font-semibold"><Icon name="lock" className="h-6 w-6 shrink-0 text-cyan-300" />On-chain Asset Settlement</div>
                  <p className="mt-3 text-slate-300">Designed to support transparent asset settlement, wallet operations and verifiable ownership states.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="markets" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 backdrop-blur md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2628b4]/30 text-cyan-200"><Icon name="globe" className="h-7 w-7" /></div>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight">Focused on Asia digital asset markets.</h2>
                <p className="mt-5 leading-8 text-slate-300">VAXS is positioned for Southeast Asia, Japan and Korea, supporting localized market access, multi-region operations and trading infrastructure for institutional and professional users.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {markets.map((market) => (
                  <div key={market} className="flex min-h-40 items-end rounded-3xl border border-white/10 bg-[#070a1f]/70 p-6"><div><div className="mb-3 h-2 w-12 rounded-full bg-cyan-300" /><div className="text-2xl font-semibold">{market}</div></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="developers" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur md:p-12 lg:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2628b4]/30 text-cyan-200"><Icon name="code" className="h-7 w-7" /></div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight">Developer-ready trading access.</h2>
              <p className="mt-5 max-w-3xl leading-8 text-slate-300">Connect to real-time market data, trading endpoints, wallet operations and account services through API-first infrastructure built for fast integration.</p>
              <button type="button" className="mt-8 rounded-full bg-white px-7 py-4 font-medium text-[#080b1f]">View Documentation</button>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#2628b4]/20 p-8 backdrop-blur">
              <Icon name="shield" className="h-10 w-10 text-cyan-200" />
              <h3 className="mt-6 text-2xl font-semibold">Security by design</h3>
              <p className="mt-4 leading-7 text-slate-300">Account protection, asset state control, permission management and operational monitoring are built into the platform foundation.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[2.5rem] border border-white/10 bg-white p-8 text-[#070a1f] shadow-2xl md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.6fr]">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Start building with VAXS.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Access trading, wallet and market data services through a digital asset exchange platform designed for Asia-focused growth.</p>
              </div>
              <button type="button" className="rounded-full bg-[#2628b4] px-8 py-4 font-medium text-white shadow-xl shadow-[#2628b4]/25">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-slate-400 md:flex-row">
          <div>© 2026 VAX Solutions Limited. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-white">Terms</a>
            <a href="#top" className="hover:text-white">Privacy</a>
            <a href="#top" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
