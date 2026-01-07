"use client";

import { useEffect, useMemo } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface BookingProps {
    calLink?: string; // e.g., "your-username/30min" or "your-username/event"
    embedType?: "inline" | "popup" | "popupButton";
}

export default function Booking({
    calLink = process.env.NEXT_PUBLIC_CAL_LINK ||
        "nika-devashvili-38o3wu/quick-demo-walkthrough",
    embedType = "inline",
}: BookingProps) {
    const namespace = useMemo(() => "booking-widget", []);

    // Initialize Cal UI for inline embeds
    useEffect(() => {
        if (embedType === "inline") {
            (async () => {
                const cal = await getCalApi({ namespace });
                cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
            })();
        }
    }, [embedType, namespace]);

    // Load Cal.com embed script for popup modes
    useEffect(() => {
        if (embedType === "popup" || embedType === "popupButton") {
            const script = document.createElement("script");
            script.src = "https://app.cal.com/embed/embed.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                const existingScript = document.querySelector(
                    'script[src="https://app.cal.com/embed/embed.js"]'
                );
                if (existingScript) {
                    document.body.removeChild(existingScript);
                }
            };
        }
    }, [embedType]);

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
                            <Cal
                                namespace={namespace}
                                calLink={calLink}
                                style={{
                                    width: "100%",
                                    height: "700px",
                                    overflow: "scroll",
                                }}
                                config={{ layout: "month_view" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Popup button fallback
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
