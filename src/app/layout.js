import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import "../styles/_variables.scss";
import "../i18n";

export const metadata = {
  title: "Al Ajami Landing",
  description: "Landing page for Al Ajami",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
