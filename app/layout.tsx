import type { Metadata } from "next";
import "./globals.css";

// Removed Google Fonts import - using local fonts only for faster load
// Inter will fallback to system fonts if General Sans fails

export const metadata: Metadata = {
  title: "Teecherz Home & Office - Quality Furniture in Zimbabwe",
  description:
    "Transform your home and office with quality furniture. 25+ years of trusted service. Free delivery, easy returns, multiple payment options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "'General Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
