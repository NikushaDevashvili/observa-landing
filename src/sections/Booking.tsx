"use client";

import { useEffect } from "react";

interface BookingProps {
    calLink?: string; // e.g., "your-username/30min" or just "your-username"
    embedType?: "inline" | "popup" | "popupButton";
}

export default function Booking({
    calLink = process.env.NEXT_PUBLIC_CAL_LINK ||
        "nika-devashvili-38o3wu/quick-demo-walkthrough",
    embedType = "inline",
}: BookingProps) {
    // Load Cal.com embed script only for popup modes (not needed for iframe)
    useEffect(() => {
        if (embedType === "popup" || embedType === "popupButton") {
            const script = document.createElement("script");
            script.src = "https://app.cal.com/embed/embed.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                // Cleanup: remove script on unmount
                const existingScript = document.querySelector(
                    'script[src="https://app.cal.com/embed/embed.js"]'
                );
                if (existingScript) {
                    document.body.removeChild(existingScript);
                }
            };
        }
    }, [embedType]);

    // Construct the Cal.com embed URL for iframe
    // Use the /embed/ prefix to avoid occasional 404s on some Cal setups
    const calUrl = `https://cal.com/embed/${calLink}`;

    // For inline embed, use iframe with proper attributes
    if (embedType === "inline") {
        return (
            <section className="py-24">
                <div className="container">
                    <div className="flex justify-center mb-8">
                        <h2 className="text-4xl md:text-5xl font-medium text-center">
                            Book a <span className="text-slate-600">Demo</span>
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <div
                            className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden"
                            style={{ minHeight: "700px" }}
                        >
                            <iframe
                                src={calUrl}
                                style={{
                                    width: "100%",
                                    height: "700px",
                                    border: "none",
                                    display: "block",
                                    minHeight: "700px",
                                    backgroundColor: "transparent",
                                }}
                                title="Cal.com Booking"
                                className="w-full"
                                allow="camera; microphone; geolocation; encrypted-media"
                                loading="eager"
                                referrerPolicy="no-referrer-when-downgrade"
                                scrolling="no"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // For popup button, use Cal.com's embed script
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-medium text-center">
                        Book a <span className="text-slate-600">Demo</span>
                    </h2>
                </div>
                <div className="flex justify-center">
                    <button
                        data-cal-link={calLink}
                        data-cal-config='{"layout":"month_view"}'
                        className="px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                        Schedule a Meeting
                    </button>
                </div>
            </div>
        </section>
    );
}
