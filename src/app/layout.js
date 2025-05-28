import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import "./app.css";

import Background from "@/components/background";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "RITU 2025",
    description: "RITUTSAV 2025",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta name="color-scheme" content="dark"/>
            <meta name="theme-color" content="#24081f"/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Background/>
        {children}
        </body>
        </html>
    );
}
