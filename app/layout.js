import { Header } from "./components";
import "./globals.css";

export const metadata = {
  title: "Clementsijo-portfolio",
  description: "Clementsijo portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}
