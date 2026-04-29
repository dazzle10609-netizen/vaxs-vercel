const products = [
  {
    icon: "chart",
    title: "Spot Trading",
    description: "High-speed order execution with clear market visibility for major digital asset pairs."
  },
  {
    icon: "layers",
    title: "Smart Contract Trading",
    description: "Contract-based trading infrastructure designed for scalable risk control and real-time state updates."
  },
  {
    icon: "wallet",
    title: "Wallet Management",
    description: "Unified Web3 wallet accounts, asset balances, deposits, withdrawals and ledger synchronization."
  },
  {
    icon: "signal",
    title: "Market Data Services",
    description: "Live prices, market depth, trading history and streaming data for trading applications."
  }
];

const stats = [
  { value: "Hybrid", label: "Matching + Settlement" },
  { value: "24/7", label: "Market Access" },
  { value: "API", label: "Ready Infrastructure" },
  { value: "Web3", label: "Wallet Native" }
];

const bars = [42, 55, 46, 72, 64, 79, 58, 86, 75, 92, 82, 96];

function Icon({ name }) {
  const icons = {
    chart: (
      <svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/></svg>
    ),
    layers: (
      <svg viewBox="0 0 24 24"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>
    ),
    wallet: (
      <svg viewBox="0 0 24 24"><path d="M19 7V6a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6"/><path d="M16 14h.01"/></svg>
    ),
    signal: (
      <svg viewBox="0 0 24 24"><path d="M4.9 19.1a10 10 0 0 1 14.2 0"/><path d="M7.8 16.2a6 6 0 0 1 8.4 0"/><path d="M10.6 13.4a2 2 0 0 1 2.8 0"/><path d="M12 21h.01"/></svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>
    ),
    code: (
      <svg viewBox="0 0 24 24"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    zap: (
      <svg viewBox="0 0 24 24"><path d="M13 2 3 14h8l-1 8 11-13h-8l1-7Z"/></svg>
    ),
    lock: (
      <svg viewBox="0 0 24 24"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    )
  };

  return <span className="icon" aria-hidden="true">{icons[name]}</span>;
}

export default function Home() {
  return (
    <main className="site" id="top">
      <div className="background">
        <div className="glow glowOne" />
        <div className="glow glowTwo" />
        <div className="gridLayer" />
      </div>

      <header className="header">
        <a href="#top" className="brand" aria-label="VAXS homepage">
          <span className="brandMark">V</span>
          <span>
            <strong>VAXS</strong>
            <small>VAX Solutions Limited</small>
          </span>
        </a>
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#architecture">Architecture</a>
          <a href="#markets">Markets</a>
          <a href="#developers">Developers</a>
        </nav>
        <a className="ghostButton" href="#contact">Launch App</a>
      </header>

      <section className="hero section">
        <div className="heroText">
          <div className="pill"><span /> Digital asset exchange infrastructure for Asia markets</div>
          <h1>Trade digital assets with speed, clarity and control.</h1>
          <p>
            VAXS is a digital asset exchange serving Southeast Asia, Japan and Korea, providing spot trading, smart contract trading, wallet management and market data services through a hybrid model of off-chain centralized matching and on-chain asset settlement.
          </p>
          <div className="actions">
            <a className="primaryButton" href="#contact">Start Trading <Icon name="arrow" /></a>
            <a className="secondaryButton" href="#developers">Explore API</a>
          </div>
        </div>

        <div className="marketCard">
          <div className="tickerTop">
            <div>
              <span>BTC / USDT</span>
              <strong>68,428.90</strong>
            </div>
            <em>+2.84%</em>
          </div>
          <div className="chart">
            {bars.map((height, index) => (
              <i key={`${height}-${index}`} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="orderGrid">
            <div><span>Bid</span><strong className="green">68,421.8</strong></div>
            <div><span>Ask</span><strong className="red">68,435.2</strong></div>
            <div><span>Vol</span><strong>1.28B</strong></div>
          </div>
        </div>
      </section>

      <section className="stats section tight">
        {stats.map((stat) => (
          <div className="statCard" key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="products">
        <div className="sectionTitle">
          <span>Products</span>
          <h2>A complete trading stack for digital assets.</h2>
        </div>
        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.title}>
              <div className="iconBox"><Icon name={product.icon} /></div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section architecture" id="architecture">
        <div>
          <div className="sectionTitle compact">
            <span>Architecture</span>
            <h2>Off-chain performance with on-chain settlement visibility.</h2>
          </div>
          <p className="largeText">
            High-frequency order matching, clearing and state synchronization are completed within the internal ledger system, while asset settlement is connected to on-chain verification and Web3 wallet account management.
          </p>
        </div>
        <div className="flowCard">
          <div className="flowItem blue">
            <Icon name="zap" />
            <h3>Off-chain Centralized Matching</h3>
            <p>Built for high throughput, low latency, fast clearing and consistent trading state updates.</p>
          </div>
          <div className="flowLine" />
          <div className="flowItem">
            <Icon name="lock" />
            <h3>On-chain Asset Settlement</h3>
            <p>Designed to support transparent asset settlement, wallet operations and verifiable ownership states.</p>
          </div>
        </div>
      </section>

      <section className="section" id="markets">
        <div className="marketPanel">
          <div>
            <div className="iconBox"><Icon name="globe" /></div>
            <h2>Focused on Asia digital asset markets.</h2>
            <p>
              VAXS is positioned for Southeast Asia, Japan and Korea, supporting localized market access, multi-region operations and trading infrastructure for institutional and professional users.
            </p>
          </div>
          <div className="regionGrid">
            <div>Southeast Asia</div>
            <div>Japan</div>
            <div>Korea</div>
          </div>
        </div>
      </section>

      <section className="section developer" id="developers">
        <div className="developerMain">
          <div className="iconBox"><Icon name="code" /></div>
          <h2>Developer-ready trading access.</h2>
          <p>Connect to real-time market data, trading endpoints, wallet operations and account services through API-first infrastructure built for fast integration.</p>
          <a className="secondaryLight" href="#contact">View Documentation</a>
        </div>
        <div className="securityCard">
          <Icon name="shield" />
          <h3>Security by design</h3>
          <p>Account protection, asset state control, permission management and operational monitoring are built into the platform foundation.</p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="cta">
          <div>
            <h2>Start building with VAXS.</h2>
            <p>Access trading, wallet and market data services through a digital asset exchange platform designed for Asia-focused growth.</p>
          </div>
          <a href="mailto:contact@vaxs.cc">Contact Sales</a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 VAX Solutions Limited. All rights reserved.</span>
        <nav>
          <a href="#top">Terms</a>
          <a href="#top">Privacy</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
