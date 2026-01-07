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
        <section id="booking" className="py-0 ">
            <div className="container-custom-spatial border-y-t">
                <div className="flex- justify-center">
                    <div className="w-full bg-white border border-gray-200 border-y-transparent overflow-hidden p-6">
                        <div className="flex justify-center mb-8">
                            <h2 className="text-4xl md:text-5xl pt-24 font-medium text-center">
                                Book a{" "}
                                <span className="text-slate-600">Demo</span>
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
