import "./globals.css";

export const metadata = {
  title: "VAXS | Digital Asset Exchange Infrastructure",
  description: "VAXS is a digital asset exchange serving Southeast Asia, Japan and Korea with spot trading, smart contract trading, wallet management and market data services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
