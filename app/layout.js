import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Headers from "@/components/common/Headers";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/NavBar/NavBar";
import GeneralContext from "./store/GeneralContext";
import SetAlertComponent from "@/components/common/AlertHanlder";
import { Loader } from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Thoughts",
  description: "Put your thoughts here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GeneralContext>
          <Navbar />
          {children}
          <Footer />
          <SetAlertComponent />
          <Loader />
        </GeneralContext>
      </body>
    </html>
  );
}
