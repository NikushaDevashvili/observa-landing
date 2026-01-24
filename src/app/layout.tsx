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

export const metadata = {
    title: "Observa — Open source observability platform for LLM's",
    description:
        "Observa is a open source observability platform for LLM's it helps you track and analyze your LLM's performance and usage.",
    openGraph: {
        title: "Observa — Open source observability platform for LLM's",
        description:
            "Observa is a open source observability platform for LLM's it helps you track and analyze your LLM's performance and usage",
        url: "https://observa-landing.vercel.app/",
        siteName: "Observa",
        type: "website",
    },
    twitter: {
        title: "Observa — Open source observability platform for LLM's",
        description:
            "Observa is a open source observability platform for LLM's it helps you track and analyze your LLM's performance and usage",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    defer
                    src="http://localhost:3000/script.js"
                    data-website-id="64ddb8d9-881b-43f5-b4d1-6410e96bfb84"
                ></script>
            </head>
            <body
                className={`${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
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
