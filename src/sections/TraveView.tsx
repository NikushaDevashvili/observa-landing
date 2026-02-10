import Image from "next/image";
import traceview from "@/assets/images/traceview.png";
import traceviewMobile from "@/assets/images/traceview-mobile.png";

export default function CatchDetails() {
    return (
        <>
            <div className="border-y h-[140px] bg-background text-foreground"></div>
            <section className="bg-background text-foreground">
                <div className="container-custom-spatial">
                    <div className="border border-t-0 border-border flex flex-col items-center py-24 px-4">
                        <h1
                            className="text-[40px] font-medium text-center"
                            style={{ letterSpacing: "-2.8px" }}
                        >
                            From alert to root cause in minutes
                        </h1>
                        <h2
                            className="text-[20px] text-center py-4 text-foreground/70 max-w-3xl leading-[28px]"
                            style={{ letterSpacing: "-1.44px" }}
                        >
                            Every alert links to the full trace: prompts, tool
                            calls, external APIs, and model responses. Filter by
                            user, route, or error code and see exactly where the
                            request went wrong.
                        </h2>
                    </div>
                    <div className="border border-y-0 border-border bg-[#121212]">
                        <div className="w-full">
                            <picture>
                                <source
                                    media="(max-width: 768px)"
                                    srcSet={traceviewMobile.src}
                                />
                                <img
                                    src={traceview.src}
                                    alt="Observa trace interface showing detailed error monitoring, spans, tool calls, and LLM interactions with error details"
                                    className="w-full h-auto min-h-[500px] md:min-h-[700px] object-contain"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
