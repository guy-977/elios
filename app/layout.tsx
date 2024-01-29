import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elios | Generative AI",
  description: "A website for generative AI innovation created by Ahmed Alrufai, in Elios you can use different types of Generative AI like text-to-text, text-to-image, text-to-video, image-classification and more of AI innovation",
  icons: {
    icon: '/next.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              <Navbar />
              <main className='max-w-4xl mx-auto px-2 py-3'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
