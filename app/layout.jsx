export const metadata = {
  title: "VAXS | Digital Asset Exchange",
  description: "VAXS is a digital asset exchange platform serving Southeast Asia, Japan and Korea."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
