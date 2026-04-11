import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";

import { Inter, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: "300",
  subsets: ["latin"],
});
const dancing_script = Dancing_Script({
  variable: "--font-dancing_script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog VF",
  description: "Blog by Vakar Florenta",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
     appearance={{
     options: {
      socialButtonsPlacement: 'bottom',
       },
  }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${interSans.variable} ${poppins.variable} ${dancing_script.variable} h-full w-full antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
