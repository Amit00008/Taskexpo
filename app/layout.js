import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import AuthSync from "./_components/AuthSync";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TooltipProvider from "./_components/ToolTipProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthSync />
        <ToastContainer />
        <TooltipProvider />
        {children}
      </body>
      </ClerkProvider>
    </html>
      
  );
}
