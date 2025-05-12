import type { Metadata } from "next";
import { Nunito, } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
