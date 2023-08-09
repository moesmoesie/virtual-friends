import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import { DM_Mono, DM_Sans } from "next/font/google";

const dm_mono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Virtual Friends",
  description: "Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${dm_mono.variable} ${dm_sans.variable}`} lang="en">
      <body className="relative">
        <div className="relative">
          <header className="fixed bg-white w-full top-0">
            <div className="container">
              <Header />
            </div>
          </header>

          <main className="container">{children}</main>
          <div className="w-2.5 h-full bg-gradient-to-b from-violet-800 via-purple-600 to-zinc-300 absolute top-0" />
        </div>

        <footer className="container">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
