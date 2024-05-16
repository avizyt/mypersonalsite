import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import Transition from "@/components/Transition";

export const metadata: Metadata = {
  title: "Avizyt",
  description: "Personal Portfolio and Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <Navbar />
          <Transition>
            <main>{children}</main>
          </Transition>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
