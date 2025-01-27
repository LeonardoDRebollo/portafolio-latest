import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer.component";

export const metadata: Metadata = {
  title: "Portfolio Leonardo Rebollo",
  description: "Portfolio de proyectos de Leonardo Daniel Rebollo Calero",
  icons: {
    icon: "/planet-ringed.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
