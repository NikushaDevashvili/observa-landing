import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalContext";
import GlobalModal from "@/components/GlobalModal";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    display: "swap",
});

const isDev = process.env.NODE_ENV === "development";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {isDev && (
                    <script
                        defer
                        src="http://localhost:3000/script.js"
                        data-website-id="64ddb8d9-881b-43f5-b4d1-6410e96bfb84"
                    ></script>
                )}
            </head>
            <body
                className={`${jetbrainsMono.variable} font-sans antialiased bg-white  text-black`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ModalProvider>
                        {children}
                        <GlobalModal />
                    </ModalProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
