"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({
                namespace: "quick-demo-walkthrough",
            });
            cal("ui", {
                theme: "light",
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section className="py-32">
            <div className="container">
                <div className="flex justify-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-medium text-center">
                        Book a <span className="text-slate-600">Demo</span>
                    </h2>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl bg-white border border-gray-200 overflow-hidden p-6">
                        <Cal
                            namespace="quick-demo-walkthrough"
                            calLink="nika-devashvili-38o3wu/quick-demo-walkthrough"
                            style={{
                                width: "100%",
                                height: "700px",
                                overflow: "scroll",
                            }}
                            config={{ layout: "month_view", theme: "light" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
