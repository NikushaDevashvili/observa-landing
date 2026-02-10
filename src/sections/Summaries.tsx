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
            <div className="border-y h-[140px] bg-background text-foreground"></div>
            <section className="bg-background text-foreground">
                <div className="container-custom-spatial">
                    <div className="border border-t-0 border-border flex flex-col items-center py-24 px-4">
                        <h1 className="text-4xl">
                            <b>Daily report for your AI stack</b>
                        </h1>
                        <h2 className="text-lg text-center py-4 text-foreground/70 max-w-3xl">
                            Each morning, your team gets a summary of what
                            broke, what got slower, and where users struggled.
                        </h2>
                    </div>
                    <div className="border py-12 border-y-0 border-border bg-gradient-to-b from-muted to-background">
                        <div className="max-w-4xl mx-auto p-2 md:p-8 bg-muted">
                            <div className="p-4 border pb-8 bg-background border-border">
                                <div className="flex flex-row justify-between items-center pt-8  ">
                                    <h2 className="text-2xl">
                                        <b>What Happend Yesterday</b>
                                    </h2>
                                    <span className="text-muted-foreground">
                                        13.10.2025
                                    </span>
                                </div>
                                <p>
                                    check the comprehensive report of what
                                    happend yesterday
                                </p>
                            </div>
                            <div className="p-4 py-8 border border-y-0 bg-background border-border">
                                <h1 className="text-xl">🟢 Wins</h1>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>
                                        Top failing flows (by error count and
                                        impact)
                                    </li>
                                    <li>
                                        Endpoints with rising latency and
                                        timeouts
                                    </li>
                                    <li>
                                        Rate limit incidents and dropped
                                        requests
                                    </li>
                                    <li>Cost anomalies by model or feature</li>
                                </ul>
                            </div>
                            <div className="p-4 py-8 border border-b-0 bg-background border-border">
                                <h1 className="text-xl">🔴 Issues</h1>
                                <p>
                                    Users abandoned 17% of conversations after
                                    repeated clarification questions. Common
                                    patterns: context loss, incomplete actions,
                                    and irrelevant answers.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 grid-cols-1 bg-background">
                                <div className="flex items-center gap-x-2 px-4 py-12 border border-border">
                                    <div className="border p-4 border-border">
                                        <MessagesSquareIcon />
                                    </div>
                                    <b>Messages:</b> 325 (+9%)
                                </div>

                                <div className="flex items-center gap-x-2 px-4 py-12 border md:border-l-0 border-border">
                                    <div className="border p-4 border-border">
                                        <UsersIcon />
                                    </div>
                                    <b>Users:</b> 78 (+5%)
                                </div>

                                <div className="flex items-center gap-x-2 px-4 py-12 border md:border-l-0 border-border">
                                    <div className="border p-4 border-border">
                                        <UsersIcon />
                                    </div>
                                    <b>Issues:</b> 3 (42 events)
                                </div>
                            </div>
                            <div className="grid-cols-1 bg-background">
                                <div className="flex flex-row justify-between border p-4 py-6 border-border">
                                    <div className="flex gap-2 items-center">
                                        <Braces />
                                        <p>Tool calls: </p>
                                    </div>
                                    <p>
                                        Most used calls: get_payment_tool,
                                        get_userschema
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between border p-4 py-6 border-border">
                                    <div className="flex gap-2 items-center">
                                        <LucideMountain />
                                        <p>Rate Limit: </p>
                                    </div>
                                    <p>
                                        System hit 4 rate limits: this caused
                                        dropped requests
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between border p-4 py-6 border-border">
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
