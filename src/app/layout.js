import {Bilbo_Swash_Caps, Poppins} from "next/font/google";
import "./globals.css";
import "./app.css";

import Background from "@/components/background";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bilboSwashCaps = Bilbo_Swash_Caps({
    variable: "--font-bilbo",
    subsets: ["latin"],
    weight: ["400"],
})

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
            className={`${poppins.className} ${bilboSwashCaps.variable} antialiased`}
        >
        <Background/>
        {children}
        </body>
        </html>
    );
}
