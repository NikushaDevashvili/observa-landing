"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function MyApp() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({
                namespace: "quick-demo-walkthrough",
            });
            cal("ui", {
                theme: resolvedTheme === "dark" ? "dark" : "light",
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, [resolvedTheme]);

    return (
        <section id="booking" className="py-0 bg-background text-foreground">
            <div className="container-custom-spatial border-y-t">
                <div className="flex- justify-center">
                    <div className="w-full bg-background border border-border border-y-transparent overflow-hidden p-6">
                        <div className="flex justify-center mb-8">
                            <h2 className="text-4xl md:text-5xl pt-24 font-medium text-center">
                                Book a{" "}
                                <span className="text-foreground/70">Demo</span>
                            </h2>
                        </div>
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
