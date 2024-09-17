import type { Metadata } from "next";
import "../assets/styles/globals.css"
import "../assets/styles/main.css"

export const metadata: Metadata = {
    title: "Piscine Clash of Dev",
    description: "Première intégration de l'event Clash of Dev.",
    icons: {
        icon: '/favicon.ico?v=2',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-bgBeige font-inter">
                {children}
            </body>
        </html>
    );
}
