import Image from "next/image";
import traceview from "@/assets/images/traceview.png";

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
                            CATCH EVEN TINIEST DETAIL
                        </h1>
                        <h2
                            className="text-[20px] text-center py-4 text-foreground/70 max-w-3xl leading-[28px]"
                            style={{ letterSpacing: "-1.44px" }}
                        >
                            We send you alerts when your AI misbehaves and links
                            straight to the events so you can dig into the
                            conversations or traces, understand the root cause,
                            and fix it—fast.
                        </h2>
                    </div>
                    <div className="border border-y-0 border-border bg-[#121212]">
                        <div className="">
                            <img
                                src={traceview.src}
                                alt="Observa trace interface showing detailed error monitoring, spans, tool calls, and LLM interactions with error details"
                                className="w-full h-auto sm:h-96 object-fill"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
