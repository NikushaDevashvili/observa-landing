"use client";
import hotjarimg from "@/assets/images/Hotjarimg.png";
import slacklogo from "@/assets/images/slacklogo.png";
import performanceimg from "@/assets/images/Performance.png";
import slackmessageimg from "@/assets/images/SlackMessage.png";
import aiperformance from "@/assets/images/AIPerformance.png";
export default function Functional() {
    return (
        <>
            <section>
                <div className="container-custom border-gray-200 border-x border-t-0 border-solid ">
                    <div className=" border-gray-200 bg-white border-x border-l-0 border-r-0  border-solid p-0">
                        <div className="border-x min-h-[4rem]"></div>
                        <div className="border-x border border-gray-200 min-h-[24rem]">
                            <div className="flex flex-col mt-16 mx-20">
                                <h1
                                    className="text-5xl md:text-6xl lg:text-5xl text-center mt-20 font-medium break-normal mx-auto tracking-custom"
                                >
                                    FIND ISSUES
                                    <br />
                                </h1>
                                <div className="flex flex-row">
                                    <p className="text-left text-xl text-black/50 mt-8 mx-auto">
                                        get{" "}
                                        <b>
                                            <img
                                                src={slacklogo.src}
                                                alt="Functional Image"
                                                className="inline-block h-6 object-cover"
                                            />{" "}
                                            <u>
                                                <i>slack notifications</i>
                                            </u>
                                        </b>{" "}
                                        when your AI product fails
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-x min-h-[4rem]"></div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="flex flex-col px-6 py-12 bg-slate-50 border border-gray-200">
                                <div className="text-2xl">
                                    Monitor AI performance
                                </div>
                                <div className="mt-4 pb-4">
                                    <p className="text-md text-gray-500">
                                        Get real-time visibility into errors,
                                        drifts, and hidden failures so you
                                        always know how your AI is behaving.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <img
                                        src={aiperformance.src}
                                        alt="AI Performance Image"
                                        className="w-full h-56 md:h-64 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col px-6 py-12 bg-slate-50 border border-gray-200">
                                <div className="text-2xl flex-1">
                                    Track costs & budgets
                                </div>
                                <div className="mt-4 pb-4">
                                    <p className="text-md text-gray-500">
                                        Stay ahead of runaway usage. See exactly
                                        where your AI overspends and keep costs
                                        under control.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <img
                                        src={performanceimg.src}
                                        alt="Functional Image"
                                        className="w-full h-56 md:h-72 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col  px-6 py-12 bg-slate-50 border border-gray-200">
                                <div className="text-2xl flex-1">
                                    Get instant alerts
                                </div>
                                <div className="mt-4 pb-4">
                                    <p className="text-md text-gray-500">
                                        Receive Slack notifications the moment
                                        something breaks, so your team can act
                                        before users notice.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <img
                                        src={slackmessageimg.src}
                                        alt="Functional Image"
                                        className="w-full h-56 md:h-64 object-cover"
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
