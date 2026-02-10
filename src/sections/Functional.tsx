"use client";
import hotjarimg from "@/assets/images/Hotjarimg.png";
import performanceimg from "@/assets/images/Performance.png";
import slackmessageimg from "@/assets/images/SlackMessage.png";
import aiperformance from "@/assets/images/AIperformance.png";
import costsimage from "@/assets/images/costsimage.png";
export default function Functional() {
    return (
        <>
            <section id="features" className="bg-background text-foreground">
                <div className="container-custom border-border border-x border-t-0 border-solid ">
                    <div className=" border-border bg-background border-x border-l-0 border-r-0  border-solid p-0">
                        <div className="border-x min-h-[4rem]"></div>
                        <div className="border-x border border-border min-h-[24rem] md:min-h-[24rem]">
                            <div className="flex flex-col mt-16 mx-10 md:mx-20">
                                <h1 className="text-5xl md:text-6xl lg:text-5xl text-center mt-8 md:mt-16 font-medium break-normal mx-auto tracking-custom">
                                    Find failures before your users do
                                </h1>
                                <div className="flex flex-row">
                                    <p className="text-center text-xl text-foreground/70 mt-8 mx-auto max-w-3xl">
                                        Stop guessing why prompts misbehave.
                                        Observa shows every error, slowdown, and
                                        broken tool call in one place, with
                                        traces linked to the exact request.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-x min-h-[4rem]"></div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="flex flex-col px-6 py-12 bg-muted border border-border">
                                <div className="text-2xl">
                                    See every failed and slow LLM request
                                </div>
                                <div className="mt-4 pb-4">
                                    <p className="text-md text-muted-foreground">
                                        Trace each request across tools, models,
                                        and services so you can reproduce bugs
                                        instead of relying on screenshots from
                                        users.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <img
                                        src={aiperformance.src}
                                        alt="AI Performance Image"
                                        className="w-full h-54 md:h-64 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col px-6 py-12 bg-muted border border-border">
                                <div className="text-2xl flex-1">
                                    Catch cost spikes early
                                </div>
                                <div className="mt-4 pb-4">
                                    <p className="text-md text-muted-foreground">
                                        See spend by model, feature, and team.
                                        Spot noisy endpoints and runaway loops
                                        before they burn your budget.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <img
                                        src={costsimage.src}
                                        alt="Functional Image"
                                        className="w-full h-54 md:h-72 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col  px-6 py-12 bg-muted border border-border">
                                <div className="text-2xl flex-1">
                                    Get paged when LLMs misbehave
                                </div>
                                <div className="mt-4 pb-4">
                                    <p className="text-md text-muted-foreground">
                                        Send alerts to Slack when retries
                                        explode, errors spike, or latency
                                        drifts, so on-call engineers know
                                        exactly where to look.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <img
                                        src={slackmessageimg.src}
                                        alt="Functional Image"
                                        className="w-full h-54 md:h-64 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-x min-h-[5rem]"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
