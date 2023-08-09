import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Virtual Friends",
  description: "Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="relative">
          <header className="fixed bg-white w-full top-0">
            <div className="container">
              <Header />
            </div>
          </header>

          <main className="container">{children}</main>
          <div className="w-2.5 h-full bg-purple-600 absolute top-0" />
        </div>

        <footer className="container">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
