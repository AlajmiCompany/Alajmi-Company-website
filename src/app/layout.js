import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import "../styles/_variables.scss";
import "../i18n"; // هذا يضل

import CustomNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Al Ajami Landing",
  description: "Landing page for Al Ajami",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
