import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { ThemeProvider } from "@/components/theme-provider"



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
      <body className={poppins.className}>
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
