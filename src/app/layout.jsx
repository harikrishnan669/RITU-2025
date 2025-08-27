import {Bilbo_Swash_Caps, Poppins} from "next/font/google";
import "./globals.css";
import "./app.css";
import Background from "@/components/background";
import NotFound from "@/app/not-found";
import {Analytics} from "@vercel/analytics/next";


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

export const viewport = {
    colorScheme: "dark",
    themeColor: "#0c0c0f",
}


export default function RootLayout({children}) {

    // redirect("/wait_for_it");

    if (process.env.NODE_ENV === 'production') {
        return <>
            <Background/>

            <NotFound/>
        </>
    }


    return (
        <html lang="en">
        <body
            className={`${poppins.className} ${bilboSwashCaps.variable} antialiased`}
        >
        <Background/>
        <Analytics/>
        {children}
        </body>
        </html>
    );
}
