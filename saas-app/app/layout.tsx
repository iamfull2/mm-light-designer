import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MM Light Designer | Iluminação Futurista",
  description: "Experiências visuais imersivas para eventos, shows e arquitetura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bebasNeue.variable} ${roboto.variable} antialiased bg-deep-black text-white font-roboto`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
