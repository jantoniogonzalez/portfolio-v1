import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import { Kenia } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });
const kenia = Kenia({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kenia',
});

export const metadata = {
  title: "Juan Antonio Gonzalez",
  description: "Software Developer Portfolio",
  name:"viewport",
  content:"width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kenia.variable} scroll-smooth`}>
      <body className={jost.className}>{children}</body>
    </html>
  );
}