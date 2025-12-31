import {
    Braces,
    LucideDollarSign,
    LucideMountain,
    MessagesSquareIcon,
    UsersIcon,
} from "lucide-react";

export default function Summaries() {
    return (
        <>
            <div className="border-y h-[140px]"></div>
            <section>
                <div className="container-custom-spatial">
                    <div className="border border-t-0 flex flex-col items-center py-24 px-4">
                        <h1 className="text-4xl">
                            <b>DAILY SUMMARIES</b>
                        </h1>
                        <h2 className="text-lg text-center py-4 text-black/50">
                            We send you alerts when your AI misbehaves and links
                            straight to the events so you can <br></br>dig into
                            the conversations or traces, understand the root
                            cause, and fix it—fast.
                        </h2>
                    </div>
                    <div className="border py-12 border-y-0 bg-gradient-to-b from-slate-50 to-blue-50">
                        {" "}
                        <div className="max-w-4xl mx-auto p-2 md:p-8  bg-slate-100">
                            <div className="p-4 border pb-8 bg-white">
                                <div className="flex flex-row justify-between items-center pt-8  ">
                                    <h2 className="text-2xl">
                                        <b>What Happend Yesterday</b>
                                    </h2>
                                    <span className="text-gray-400">
                                        13.10.2025
                                    </span>
                                </div>
                                <p>
                                    check the comprehensive report of what
                                    happend yesterday
                                </p>
                            </div>
                            <div className="p-4 py-8 border border-y-0 bg-white">
                                <h1 className="text-xl">🟢 Wins</h1>
                                <p>
                                    Users liked the assistant&apos;s tone and
                                    appreciated the life advice.
                                </p>
                            </div>
                            <div className="p-4 py-8 border border-b-0 bg-white">
                                <h1 className="text-xl">🔴 Issues</h1>
                                <p>
                                    Common Patterns: context retention, response
                                    quality, and task completion Top Issues:
                                    Forgetting (+50%), User Frustration (-20%),
                                    Laziness
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 grid-cols-1 bg-white">
                                <div className="flex items-center gap-x-2 px-4 py-12 border">
                                    <div className="border p-4">
                                        <MessagesSquareIcon />
                                    </div>
                                    <b>Messages:</b> 325 (+9%)
                                </div>

                                <div className="flex items-center gap-x-2 px-4 py-12 border md:border-l-0">
                                    <div className="border p-4">
                                        <UsersIcon />
                                    </div>
                                    <b>Users:</b> 78 (+5%)
                                </div>

                                <div className="flex items-center gap-x-2 px-4 py-12 border md:border-l-0">
                                    <div className="border p-4">
                                        <UsersIcon />
                                    </div>
                                    <b>Issues:</b> 3 (42 events)
                                </div>
                            </div>
                            <div className="grid-cols-1 bg-white">
                                <div className="flex flex-row justify-between border p-4 py-6">
                                    <div className="flex gap-2 items-center">
                                        <Braces />
                                        <p>Tool calls: </p>
                                    </div>
                                    <p>
                                        Most used calls: get_payment_tool,
                                        get_userschema
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between border p-4 py-6">
                                    <div className="flex gap-2 items-center">
                                        <LucideMountain />
                                        <p>Rate Limit: </p>
                                    </div>
                                    <p>
                                        System hit 4 rate limits: this caused
                                        dropped requests
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between border p-4 py-6">
                                    <div className="flex gap-2 items-center">
                                        <LucideDollarSign />
                                        <p>Cost Overrun: </p>
                                    </div>
                                    <p>No cost overruns detected yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
