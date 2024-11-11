import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import { Providers } from "./redux/provider/provider";
// import FormPopup from "./components/form-popup";
// import Whatsapp from "./components/whatsapp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mart",
  description: "Mart website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Providers> */}
          <Navbar/>
          {/* <Whatsapp /> */}
          {/* <FormPopup /> */}
          {children}
          <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
