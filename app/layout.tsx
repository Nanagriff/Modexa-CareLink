import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { ThemeProvider } from "@/components/theme-provider"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Carelink app",
  description: "This is the web app for modexa carelink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body id="__next" className={poppins.className}> {/* Add the ID here */}
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />      
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
