import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
})

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 60 // Revalidate Cached data at most 60 sec

export const metadata: Metadata = {
  title: "Elios | Generative AI",
  description: "A website for generative AI innovation created by Ahmed Alrufai, in Elios you can use different types of Generative AI like text-to-text, text-to-image, text-to-video, image-classification and more of AI innovation",
  icons: {
    icon: '/logo.png'
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
        <Analytics />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              <AnimatedCursor
            innerSize={16}
            outerSize={16}
            color='59, 130, 246'
            outerAlpha={0.3}
            innerScale={1.5}
            outerScale={6}
            trailingSpeed={10}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}/>
              <Navbar />
              <main className='max-w-4xl mx-auto px-2 py-3'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
