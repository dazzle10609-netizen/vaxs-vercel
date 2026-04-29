const products = [
  ["Spot Trading", "High-speed order execution with deep market visibility for major digital asset pairs."],
  ["Smart Contract Trading", "Contract-based trading infrastructure designed for scalable risk control and real-time settlement states."],
  ["Wallet Management", "Unified Web3 wallet accounts, asset balances, deposits, withdrawals and internal ledger synchronization."],
  ["Market Data Services", "Live prices, market depth, trading history and WebSocket streaming for trading applications."]
];

const markets = ["Southeast Asia", "Japan", "Korea"];
const bars = [46, 52, 40, 68, 63, 74, 58, 81, 72, 88, 79, 94];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <header className="nav">
          <div className="brand"><span>V</span><div><b>VAXS</b><small>VAX Solutions Limited</small></div></div>
          <nav><a href="#products">Products</a><a href="#architecture">Architecture</a><a href="#markets">Markets</a><a href="#developers">Developers</a></nav>
          <button>Launch App</button>
        </header>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">Digital asset exchange infrastructure for Asia markets</p>
            <h1>Trade digital assets with speed, clarity and control.</h1>
            <p className="lead">VAXS is a digital asset exchange serving Southeast Asia, Japan and Korea, providing spot trading, smart contract trading, wallet management and market data services through a hybrid model of off-chain centralized matching and on-chain asset settlement.</p>
            <div className="actions"><a href="#contact">Start Trading</a><a className="secondary" href="#developers">Explore API</a></div>
          </div>
          <div className="terminal">
            <div className="price"><div><small>BTC / USDT</small><strong>68,428.90</strong></div><span>+2.84%</span></div>
            <div className="chart">{bars.map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div>
            <div className="ticker"><div><small>Bid</small><b>68,421.8</b></div><div><small>Ask</small><b>68,435.2</b></div><div><small>Vol</small><b>1.28B</b></div></div>
          </div>
        </div>
      </section>

      <section className="stats"><div><b>Hybrid</b><small>Matching + Settlement</small></div><div><b>24/7</b><small>Market Access</small></div><div><b>API</b><small>Ready Infrastructure</small></div><div><b>Web3</b><small>Wallet Native</small></div></section>

      <section id="products" className="section"><p className="label">Products</p><h2>A complete trading stack for digital assets.</h2><div className="cards">{products.map(([title, text]) => <article key={title}><span className="dot"/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="architecture" className="section split"><div><p className="label">Architecture</p><h2>Off-chain performance with on-chain settlement visibility.</h2><p className="bodyText">VAXS uses a hybrid exchange model. High-frequency order matching, clearing and state synchronization are completed within the internal ledger system, while asset settlement is connected to on-chain verification and Web3 wallet account management.</p></div><div className="flow"><article><h3>Off-chain Centralized Matching</h3><p>Built for high throughput, low latency, fast clearing and consistent trading state updates.</p></article><em/><article><h3>On-chain Asset Settlement</h3><p>Designed to support transparent asset settlement, wallet operations and verifiable ownership states.</p></article></div></section>

      <section id="markets" className="section market"><div><p className="label">Markets</p><h2>Focused on Asia digital asset markets.</h2><p className="bodyText">VAXS supports localized market access, multi-region operations and trading infrastructure for institutional and professional users.</p></div><div className="marketGrid">{markets.map((market) => <article key={market}>{market}</article>)}</div></section>

      <section id="developers" className="section developer"><div><p className="label">Developers</p><h2>Developer-ready trading access.</h2><p className="bodyText">Connect to real-time market data, trading endpoints, wallet operations and account services through API-first infrastructure built for fast integration.</p></div><aside><h3>Security by design</h3><p>Account protection, asset state control, permission management and operational monitoring are built into the platform foundation.</p></aside></section>

      <section id="contact" className="cta"><h2>Start building with VAXS.</h2><p>Access trading, wallet and market data services through a digital asset exchange platform designed for Asia-focused growth.</p><a href="mailto:contact@vaxs.cc">Contact Sales</a></section>

      <footer>© 2026 VAX Solutions Limited. All rights reserved.<span>Terms · Privacy · Contact</span></footer>

      <style jsx global>{`
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#050716;color:#fff;font-family:Inter,Arial,sans-serif}.page{min-height:100vh;overflow:hidden;background:radial-gradient(circle at 15% 0%,rgba(38,40,180,.45),transparent 32%),radial-gradient(circle at 85% 15%,rgba(217,70,239,.25),transparent 30%),#050716}.hero{max-width:1180px;margin:0 auto;padding:24px 24px 80px}.nav{display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:12px}.brand span{display:grid;place-items:center;width:42px;height:42px;border-radius:16px;background:#fff;color:#2628b4;font-weight:900}.brand b{display:block;font-size:19px}.brand small,.price small,.ticker small{display:block;color:#94a3b8;font-size:12px}.nav nav{display:flex;gap:28px}.nav a{color:#cbd5e1;text-decoration:none;font-size:14px}.nav button{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#fff;border-radius:999px;padding:10px 18px}.heroGrid{display:grid;grid-template-columns:1.05fr .95fr;gap:64px;align-items:center;padding-top:86px}.eyebrow,.label{color:#67e8f9;letter-spacing:.22em;text-transform:uppercase;font-size:12px;font-weight:700}.hero h1{font-size:70px;line-height:1.02;margin:20px 0 24px;letter-spacing:-.06em}.lead,.bodyText{color:#cbd5e1;font-size:18px;line-height:1.8}.actions{display:flex;gap:16px;margin-top:34px}.actions a,.cta a{display:inline-flex;text-decoration:none;border-radius:999px;padding:16px 26px;background:#fff;color:#080b1f;font-weight:700}.actions .secondary{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.16)}.terminal{border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);border-radius:32px;padding:22px;box-shadow:0 30px 80px rgba(38,40,180,.25)}.price{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.price strong{font-size:34px}.price span{background:rgba(52,211,153,.12);color:#6ee7b7;border-radius:999px;padding:8px 12px}.chart{height:230px;display:grid;grid-template-columns:repeat(12,1fr);align-items:end;gap:9px;background:rgba(255,255,255,.04);border-radius:22px;padding:18px}.chart i{display:block;border-radius:8px 8px 0 0;background:linear-gradient(to top,#2628b4,#67e8f9)}.ticker{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}.ticker div{background:rgba(255,255,255,.05);padding:15px;border-radius:18px}.stats,.section,.cta,footer{max-width:1180px;margin:0 auto}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding:0 24px 70px}.stats div,.cards article,.flow,.market,.developer,.cta{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.055);border-radius:28px}.stats div{padding:24px}.stats b{display:block;font-size:26px}.stats small{color:#94a3b8}.section{padding:80px 24px}.section h2,.cta h2{font-size:48px;line-height:1.08;margin:16px 0 24px;letter-spacing:-.04em}.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:32px}.cards article{padding:28px}.dot{display:block;width:42px;height:42px;border-radius:16px;background:linear-gradient(135deg,#2628b4,#67e8f9);margin-bottom:24px}.cards p,.flow p,.developer aside p,.cta p{color:#cbd5e1;line-height:1.7}.split,.developer{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}.flow{padding:26px}.flow article{background:rgba(255,255,255,.055);border-radius:24px;padding:24px}.flow em{display:block;width:1px;height:42px;background:rgba(255,255,255,.22);margin:0 auto}.market{display:grid;grid-template-columns:1fr 1.2fr;gap:34px;padding:42px}.marketGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.marketGrid article{min-height:150px;display:flex;align-items:flex-end;border:1px solid rgba(255,255,255,.1);background:#070a1f;border-radius:24px;padding:24px;font-size:24px;font-weight:700}.developer aside{border-radius:28px;background:rgba(38,40,180,.25);padding:34px}.cta{margin-top:70px;margin-bottom:40px;background:#fff;color:#070a1f;padding:56px;border-radius:36px}.cta p{color:#475569;max-width:760px}.cta a{background:#2628b4;color:#fff;margin-top:14px}footer{display:flex;justify-content:space-between;color:#94a3b8;border-top:1px solid rgba(255,255,255,.1);padding:34px 24px;margin-top:50px}@media (max-width:900px){.nav nav{display:none}.heroGrid,.split,.developer,.market{grid-template-columns:1fr}.hero h1{font-size:46px}.cards,.stats,.marketGrid{grid-template-columns:1fr}.section h2,.cta h2{font-size:36px}footer{flex-direction:column;gap:12px}}
      `}</style>
    </main>
  );
}
