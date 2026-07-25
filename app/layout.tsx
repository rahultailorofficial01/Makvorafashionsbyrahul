import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAKVORA | Haute Couture & Bespoke Tailoring Paris",
  description: "Bespoke tailoring, rare Vicuña outerwear, and haute couture crafted in Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#FAF7F2] text-[#1C1512] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}