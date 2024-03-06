import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToasterProvider } from "@/providers/ToasterContext";
import { LoginProvider } from "@/providers/LoginContext";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Shalom Prayer Ministry",
  description: "MPAEBO FIE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={poppins.className}>
      <ToasterProvider>
        <LoginProvider>
        {children}
        </LoginProvider>
        </ToasterProvider>
        </body>
    </html>
  );
}
