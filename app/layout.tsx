import type {Metadata} from "next";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Providers from "@/app/providers";


export const metadata: Metadata = {
  title: "Jobify",
  description: "My application Jobify",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en" suppressHydrationWarning>
        <body>
        {children}
        </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
